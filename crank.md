# Port Plan: Waku/React → Crank

## Overview

The `portfolio-crank/` directory becomes the new implementation. All work happens there. The existing `public/css/` files are reused as-is.

---

## 1. Dependencies (`portfolio-crank/package.json`)

Update to latest versions, add needed packages:

```json
{
  "dependencies": {
    "@b9g/assets": "^0.2.x",
    "@b9g/crank": "^0.7.8",
    "@b9g/router": "^0.2.x",
    "@b9g/shovel": "^0.2.17",
    "clsx": "^2.1.1",
    "motion": "^12.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "eslint-plugin-crank": "^0.2.0"
  }
}
```

Note: `motion` replaces `framer-motion` and provides a vanilla JS API that works outside React.

---

## 2. Directory Structure

```
portfolio-crank/src/
├── server.tsx              # Worker entry + all SSR routes
├── client.tsx              # Client bundle: all pages (Navbar + WaveBackground)
├── client-projects.tsx     # Client bundle: projects pages only
├── components/
│   ├── Layout.tsx          # HTML shell (SSR only)
│   ├── Navbar.tsx          # Nav (SSR + client hydrate for active tab)
│   ├── WaveBackground.tsx  # Client-only wave animation
│   ├── Link.tsx            # Smart internal/external link
│   ├── Typography.tsx      # H2, BodyText
│   ├── Panel.tsx           # Styled container
│   └── projects/
│       ├── manifest.tsx    # Project data (converted from React JSX → Crank JSX)
│       └── Projects.tsx    # Interactive grid (client hydrated)
└── pages/
    ├── Hero.tsx
    ├── About.tsx
    ├── Kyeosis.tsx
    └── ProjectsPage.tsx    # SSR wrapper (renders initial state from URL params)
```

---

## 3. Build & Deployment

**`portfolio-crank/wrangler.jsonc`** — points at Shovel's build output, serves static assets from the parent `public/` directory:
```jsonc
{
  "name": "portfolio",
  "main": "./dist/server/index.js",
  "assets": { "directory": "../public" },
  "compatibility_flags": ["nodejs_compat"],
  "compatibility_date": "2025-11-17"
}
```

**`package.json` scripts:**
```json
"dev": "shovel develop src/server.tsx --platform cloudflare",
"build": "shovel build src/server.tsx --platform cloudflare",
"deploy": "npm run build && wrangler deploy"
```

Shovel bundles the server entry point and any `import ... with { assetBase }` client bundles automatically.

---

## 4. Server Entry (`server.tsx`)

Uses `@b9g/router` + `@b9g/assets` + `@b9g/crank/html`:

```tsx
/** @jsxImportSource @b9g/crank */
import { renderer } from '@b9g/crank/html'
import { Router } from '@b9g/router'
import { assets } from '@b9g/assets/middleware'
import clientUrl from './client.tsx' with { assetBase: '/assets/' }
import projectsClientUrl from './client-projects.tsx' with { assetBase: '/assets/' }

const router = new Router()
router.use(assets())

router.route('/').get(async () => page(await renderer.render(
  <Layout title="Home" clientUrls={[clientUrl]}>
    <Hero />
  </Layout>
)))

router.route('/about').get(async () => page(await renderer.render(
  <Layout title="About" clientUrls={[clientUrl]} path="/about">
    <About />
  </Layout>
)))

router.route('/kyeosis').get(async () => page(await renderer.render(
  <Layout title="Kyeosis" clientUrls={[clientUrl]} path="/about">
    <Kyeosis />
  </Layout>
)))

router.route('/projects').get(async (req) => {
  const filter = new URL(req.url).searchParams.get('type') ?? 'All'
  return page(await renderer.render(
    <Layout title="Projects" clientUrls={[clientUrl, projectsClientUrl]} path="/projects">
      <ProjectsPage filter={filter} />
    </Layout>
  ))
})

router.route('/projects/:project').get(async (req, { project }) => {
  const filter = new URL(req.url).searchParams.get('type') ?? 'All'
  return page(await renderer.render(
    <Layout title="Projects" clientUrls={[clientUrl, projectsClientUrl]} path="/projects">
      <ProjectsPage filter={filter} project={project} />
    </Layout>
  ))
})

self.addEventListener('fetch', (e) => e.respondWith(router.handle(e.request)))
```

**Key difference from Waku:** The server explicitly passes `path` so the SSR-rendered Navbar can pre-render the correct active tab without JavaScript.

---

## 5. Layout Component

SSR-only. Renders the full HTML document with CSS links. Includes a `<div id="wave-bg">` placeholder for client hydration and the SSR Navbar.

```tsx
function Layout({ title, children, clientUrls = [], path = '/' }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>{title} — Tim Kye</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/projects.css" />
        {clientUrls.map(url => <script src={url} type="module" />)}
      </head>
      <body>
        <div id="wave-bg" />          {/* hydrated client-side */}
        <div class="app-shell">
          <main class="app-content">{children}</main>
          <Navbar path={path} />       {/* SSR + client-hydrated */}
        </div>
      </body>
    </html>
  )
}
```

---

## 6. Navbar

**SSR render:** Receives `path` prop to determine which tab is active. Renders static HTML with correct `active` class.

**Client hydration:** Mounted to `#navbar` element. Listens to `popstate` events to update active tab on client-side navigation. Uses `history.pushState` for navigation (no page reload).

```tsx
// server render
function Navbar({ path = '/' }) {
  const tabs = [
    { label: 'Main', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
  ]
  return (
    <nav id="navbar" class="navbar" data-path={path}>
      {tabs.map(tab => (
        <a href={tab.href} class={`nav-tab ${isActive(path, tab.href) ? 'active' : ''}`}>
          {tab.label}
        </a>
      ))}
    </nav>
  )
}
```

**Client Crank generator** (in `client.tsx`) hydrates `#navbar` and handles click events to update state via `history.pushState`.

---

## 7. WaveBackground

Pure client component — no SSR output. The `#wave-bg` div is empty in SSR HTML; the client hydrates it.

**Crank generator** replaces the React `useState/useEffect`:
```tsx
function *WaveBackground(this: Context) {
  let bars = generateBars(Math.ceil(window.innerWidth / 14))

  let timer: ReturnType<typeof setTimeout>
  const onResize = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      this.refresh(() => {
        bars = generateBars(Math.ceil(window.innerWidth / 14))
      })
    }, 150)
  }
  window.addEventListener('resize', onResize)

  for ({} of this) {
    yield (
      <div style="position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden">
        <div style="position:absolute;bottom:0;left:0;width:100%;display:flex;align-items:flex-end;height:65vh">
          {bars.map((bar, i) => (
            <div key={i} style={barStyle(bar)} />
          ))}
        </div>
      </div>
    )
  }

  clearTimeout(timer)
  window.removeEventListener('resize', onResize)
}
```

The seeded PRNG logic and CSS animation (`waveBar` keyframes from `app.css`) are preserved unchanged.

---

## 8. Projects Component

This is the most complex migration. The React version uses:
- `framer-motion`'s `layout` prop (animated grid reflow)
- `AnimatePresence` (exit animations)
- `useRouter().push()` (Waku navigation)

**Crank + vanilla `motion` approach:**

The `layout` animation (which animates elements' position changes during grid reflow) is React-specific. Replace with:
- Instant class toggle (`project-expanded`) triggers CSS grid changes
- Use `motion.animate()` from the vanilla `motion` package for **opacity** transitions (fade non-selected cards to opacity 0)
- Use CSS `transition` on the expanded card's `max-height` / `height` for the expand effect

**Navigation:** Replace `useRouter().push()` with `history.pushState()` + manual URL update (no full page reload). Since Projects is fully client-rendered after hydration, URL changes just trigger `this.refresh()` with new state.

**SSR initial render** (`ProjectsPage.tsx`): Renders a static HTML version of the grid with the correct filter applied (from URL params). This is replaced by the interactive client component on hydration.

```tsx
// SSR only — gives a visible first paint before JS loads
function ProjectsPage({ filter = 'All', project }) {
  const filtered = projects.filter(p => filter === 'All' || p.tags.includes(filter))
  return (
    <div id="projects-root" data-filter={filter} data-project={project ?? ''}>
      {/* static HTML project grid */}
    </div>
  )
}
```

The client reads `data-filter` and `data-project` from the DOM to initialize state without a server round-trip.

---

## 9. Manifest Conversion

The manifest uses React JSX (`className`, event props, `JSX.Element` types). Needs mechanical conversion:

| React | Crank |
|-------|-------|
| `className` | `class` |
| `JSX.Element` | `Child` from `@b9g/crank` |
| `<Link href=...>` | Adapted `<Link href=...>` (Crank version) |
| `style={{ key: val }}` | `style="key: val"` (string) or object (Crank supports both) |

The icon/body JSX in the manifest is static (no interactivity), so the conversion is straightforward.

---

## 10. CSS Strategy

**Keep as-is:** `public/css/reset.css`, `app.css`, `projects.css` — all existing styles work unchanged.

**Replace Tailwind utilities** used in components with either:
- Inline `style="..."` strings on elements where it's one-off (e.g., WaveBackground bars)
- New utility classes added to `app.css` for common patterns (e.g., `.fixed-inset-0`, `.flex-row-end`)

The existing CSS already covers all project grid/card styles. Most Tailwind usage is in WaveBackground (layout utilities) and Projects (minor layout), both of which will be client-rendered and can use inline styles.

---

## 11. About / Kyeosis Pages

These are mostly static. The one interactive element in `About` (clicking "Kyeotic" to navigate to `/kyeosis`) becomes a simple `<a href="/kyeosis">` link — no JS needed. The "easter egg" was a React client component toggle; with SSR routing, it's just a real navigation link.

---

## Summary of Key Decisions

| Concern | Decision |
|---------|----------|
| Build | Shovel (existing stub) |
| SSR | `@b9g/crank/html` for all pages |
| Routing | `@b9g/router` server + `history.pushState` client |
| Client hydration | Island architecture: Navbar, WaveBackground, Projects each hydrated separately |
| Animations | WaveBackground: CSS keyframes (unchanged) + Crank resize logic. Projects: `motion.animate()` for opacity, CSS for expand. No `layout` animation. |
| Tailwind | Removed. Inline styles + `app.css` additions |
| Manifest | Mechanical JSX conversion (`className` → `class`, etc.) |
| Active nav | Passed as `path` prop from server request; client updates on navigation |

---

## Implementation Order

1. `package.json` — add `motion`, `clsx`, update deps
2. `wrangler.jsonc` — configure for new structure
3. `components/Layout.tsx` — HTML shell
4. `components/Link.tsx` — smart link (simple, reusable)
5. `components/projects/manifest.tsx` — convert from React JSX
6. `pages/Hero.tsx`, `About.tsx`, `Kyeosis.tsx` — static pages
7. `components/Navbar.tsx` — SSR version
8. `pages/ProjectsPage.tsx` — SSR version of projects grid
9. `server.tsx` — wire all routes
10. `components/WaveBackground.tsx` — client Crank generator
11. `components/projects/Projects.tsx` — client interactive component
12. `client.tsx` — hydrate Navbar + WaveBackground
13. `client-projects.tsx` — hydrate Projects grid
14. CSS additions to `app.css` for any missing utility classes
