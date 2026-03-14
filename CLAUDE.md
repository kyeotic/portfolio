# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Crank Reference

This is a Crank-based project. For full framework documentation and component authoring patterns, see: https://github.com/bikeshaving/crank/blob/main/docs/SKILL.md

## Commands

```bash
npm run dev              # Vite dev server with Cloudflare Workers plugin (local)
npm run preview          # Build + run via wrangler dev (full Workers environment)
npm run build            # Build client (dist/client/) and server (dist/server/)
npm run build:client     # Vite build for client only
npm run build:server     # Vite SSR build for server only
npm run deploy           # Build + deploy to Cloudflare Workers
npm run lint             # ESLint on src/
npm run wrangler:types   # Regenerate Wrangler/Workers type bindings
```

No test suite exists currently.

## Architecture

**Build system** — `@cloudflare/vite-plugin` integrates Vite with the Cloudflare Workers runtime for both dev and build. Client bundles go to `dist/client/`, server SSR bundle to `dist/server/`. Tailwind CSS is included via `@tailwindcss/vite`.

**SSR + Full-App Hydration** — The isomorphic root component (`src/app.tsx`) is rendered server-side via `@b9g/crank/html` and then re-hydrated client-side via `@b9g/crank/dom`. There is a single client entry point:

- `src/client/client.tsx` — mounts `<App />` into `#app-root`

**Worker entry** — `src/server/worker.ts` is the Cloudflare Workers entry point. It uses Hono to handle all routes: fetches `index.html` from the `ASSETS` binding, calls `render()` from `src/server/server.tsx` to produce the SSR HTML, and injects it into the `<!--app-html-->` placeholder.

**Routing** — Client-side navigation is managed by the `Router` component (`src/client/components/Router.tsx`) using `history.pushState`. Routes: `/`, `/about`, `/kyeosis`, `/projects`. No full page reloads between routes.

## Crank Patterns Used

**Generator components** are used for all stateful/interactive client components (e.g., `WaveBackground`, `Router`, `Projects`). State lives in generator-scoped variables; re-renders are triggered via `this.refresh()`.

```tsx
function* MyComponent(this: Context) {
  let count = 0;
  for ({ } of this) {
    yield <button onclick={() => { count++; this.refresh(); }}>{count}</button>;
  }
}
```

**Function components** are used for stateless/SSR components (e.g., `Navbar`, page components).

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

Tailwind CSS (v4, via `@tailwindcss/vite`) plus plain CSS in `public/css/`. Key conventions:
- `public/css/app.css` — global layout, fonts, wave animation keyframes
- `public/css/projects.css` — project grid and card styles
- Wave bars use CSS custom properties (`--max-scale`, `--duration`, `--delay`) set inline by `WaveBackground.tsx`

## Deployment

Cloudflare Workers via Wrangler (`wrangler.jsonc`). Static assets served from `dist/client/` via the `ASSETS` binding. Infrastructure is in `infra/` (Terraform).
