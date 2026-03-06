# Migration Plan: Remix+Deno → Waku+Cloudflare

## What the New Framework Is

The `portfolio/` template uses **Waku** (a React Server Components framework) deployed to Cloudflare Workers. It's meaningfully different from Remix — pages are RSC by default, interactivity requires `'use client'` directives.

---

## Step 1: Install Dependencies ✅

In `portfolio/`, add `framer-motion` (used by `Projects.tsx`):
```bash
cd portfolio && npm install framer-motion
```

---

## Step 2: Copy Static Assets ✅

- `public/images/projects/` → `portfolio/public/images/projects/`
- `public/css/reset.css`, `app.css`, `projects.css` → `portfolio/public/css/`
- `public/favicon.ico` → `portfolio/public/favicon.ico`

---

## Step 3: Update Layout (`portfolio/src/pages/_layout.tsx`) ✅

Replaced the Waku template header/footer with the portfolio's global structure:
- Removed `<Header>` and `<Footer>` components
- Added `import '../styles.css'` to keep Tailwind v4 processing via Vite
- Added `<link>` tags for `/css/reset.css`, `/css/app.css`, `/css/projects.css`
- Set favicon (`/favicon.ico`), description meta
- Note: Google Fonts (`Open Sans`) is loaded via `@import` inside `app.css` — no extra link tag needed

---

## Step 4: Port Framework-Agnostic Components ✅

Copied into `portfolio/src/components/`:

| Old | New | Changes |
|---|---|---|
| `app/components/Panel.tsx` | `src/components/Panel.tsx` | None |
| `app/components/Typography.tsx` | `src/components/Typography.tsx` | None |
| `app/components/useHydrated.ts` | `src/components/useHydrated.ts` | None |
| `app/projects/Hero.tsx` | `src/components/projects/Hero.tsx` | None |

---

## Step 5: Adapt Framework-Coupled Components ✅

**`Link.tsx`**: Replaced `@remix-run/react`'s `RouterLink` with Waku's `Link` from `'waku'` for internal links. External/mailto links remain plain `<a>`.

**`manifest.tsx`**: Updated `Link` import path to `'../Link.tsx'`. Updated Portfolio project description to mention Waku/Cloudflare.

**`Kyeosis.tsx`**: Added `'use client'`. Replaced `import { Link } from '@remix-run/react'` with a plain `<a onClick>` that calls the `navigate` prop.

**`AboutMe.tsx`**: Added `'use client'`. Replaced `useNavigate()` with a `navigate` prop; the kyeosis easter egg calls `navigate()` directly with `window.location.pathname` check.

**`Projects.tsx`**: Added `'use client'`. Replaced `useNavigate` and Remix's `Link` with a `navigate` prop + `<a href onClick={e.preventDefault(); navigate(...)}>` pattern.

---

## Step 6: Routing Architecture Decision ✅

**Chose Option A — single client page.**

- `src/pages/index.tsx` is a thin RSC wrapper that renders `<HomePage />`
- `src/components/HomePage.tsx` is `'use client'` and owns all routing state
- `parseLocation()` reads `window.location.pathname` + `window.location.search`
- `navigate(path)` calls `window.history.pushState` then re-parses location
- `popstate` listener handles browser back/forward
- `navigate` callback is passed as a prop to `AboutMe`, `Kyeosis`, and `Projects`

All internal link clicks call `e.preventDefault()` + `navigate()` so no page reloads occur.

Option B (proper Waku pages) remains a potential future refactor.

---

## Step 7: Main Page ✅

- `portfolio/src/pages/index.tsx` — thin RSC wrapper, `render: 'dynamic'`
- `portfolio/src/components/HomePage.tsx` — `'use client'` component with full routing logic, scroll-to-section behavior, and section/project/type state

---

## Step 8: Clean Up Template Files ✅

Deleted:
- `src/components/counter.tsx`
- `src/components/header.tsx`
- `src/components/footer.tsx`
- `src/pages/about.tsx`

---

## Status

**Build: ✅ passing** (`npm run build` in `portfolio/` succeeds cleanly)

### Remaining / Next Steps

- **Verify in browser** — run `npm run dev` and test navigation, scroll behavior, project modal, tag filtering, and the kyeosis easter egg
- **SPA fallback for direct URL access** — navigating directly to `/about`, `/kyeosis`, `/projects/:name` will 404 since only `/` is a Waku page. Needs either:
  - Option B refactor (proper Waku dynamic pages), or
  - A Cloudflare Worker catch-all that rewrites all paths to `/`
- **Option B refactor** — migrate to proper Waku pages (`[section].tsx`, `projects/[project].tsx`) once content is verified working

---

## Key Risk Areas

1. **Waku dynamic routing API**: The `[param].tsx` syntax for dynamic segments is confirmed in Waku, but the exact shape of how params are received by page components needs verification against Waku's alpha docs before implementing Option B.

2. **Framer Motion + RSC**: `framer-motion` requires `'use client'` — resolved via `'use client'` on `Projects.tsx` and the `useHydrated` guard.

3. **CSS animated gradient**: `app.css` sets `body::before` with a CSS animation for the background. Survives the layout port unchanged since the file is served statically.
