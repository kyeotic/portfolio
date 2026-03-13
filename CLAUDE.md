# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Crank Reference

This is a Crank-based project. For full framework documentation and component authoring patterns, see: https://github.com/bikeshaving/crank/blob/main/docs/SKILL.md

## Commands

```bash
npm run dev       # Vite dev server (client-side only, no Workers runtime)
npm run preview   # Build + run via wrangler dev (full Workers environment)
npm run build     # Vite build
npm run deploy    # Build + deploy to Cloudflare Workers
npm run lint      # ESLint on src/
```

No test suite exists currently.

## Architecture

Vite is used for local/dev mode as well as building for the Cloudflare Workers runtime

**SSR + Island Hydration** — Pages are fully server-rendered via Hono + Crank's HTML renderer (`@b9g/crank/html`). Interactive components are hydrated client-side from two entry points:

- `src/client.tsx` — hydrates `WaveBackground` into `#wave-bg`
- `src/client-projects.tsx` — hydrates `Projects` into `#projects-root`

**Routing** — Hono handles 5 routes in `src/server.tsx`. Within `/projects`, client-side navigation uses `history.pushState` (no full page reloads). The server passes `path` to `Layout` for active nav highlighting.

**Hydration handoff** — SSR pages set `data-filter` and `data-project` attributes on the hydration root so client components can pick up initial state from the DOM.

## Crank Patterns Used

**Generator components** are used for all stateful/interactive client components (e.g., `WaveBackground`, `Projects`). State lives in generator-scoped variables; re-renders are triggered via `this.refresh()`.

```tsx
function* MyComponent(this: Context) {
  let count = 0;
  for ({ } of this) {
    yield <button onclick={() => { count++; this.refresh(); }}>{count}</button>;
  }
}
```

**Function components** are used for stateless SSR components (e.g., `Navbar`, `Layout`, page components).

**Cleanup** is registered with `this.cleanup(fn)` for event listeners and timers (see `WaveBackground`).

## Adding a Project

Edit `src/components/projects/manifest.tsx`. Each entry:

```tsx
{
  name: 'slug',           // used in URL: /projects/slug
  title: 'Display Name',
  tags: ['Open Source'],  // filter categories shown as buttons
  icon: <img src="/images/projects/foo.png" />,
  body: <p>Description JSX</p>,
}
```

Available tags: `Open Source`, `DevOps`, `Rust`, `Web Apps`, `Publications`.

## Styling

Plain CSS in `public/css/` — no utility framework. Key conventions:
- `app.css` — global layout, fonts, wave animation keyframes
- `projects.css` — project grid and card styles
- Wave bars use CSS custom properties (`--max-scale`, `--duration`, `--delay`) set inline by `WaveBackground.tsx`
- Project cards are `150px × 225px` by default; expanded card takes full width

## Deployment

Cloudflare Workers via Wrangler. Static assets served from `public/`. Build output goes to `public/assets/`. Infrastructure is in `infra/` (Terraform).
