# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Framework**: Waku (React Server Components framework)
- **Runtime**: Cloudflare Workers
- **Styling**: Tailwind CSS v4 + static CSS files in `public/css/`
- **Animations**: Framer Motion
- **Deployment**: Cloudflare Workers (`wrangler deploy`)

## Common Commands

```bash
# Development
npm run dev

# Build only
npm run build

# Local preview (production build + wrangler dev)
npm run preview

# Start wrangler dev against built output
npm run start

# Deploy to Cloudflare Workers
npm run deploy

# Generate Cloudflare binding types
npm run cf-typegen
```

## Architecture

### Runtime & Build

Waku builds the app (via Vite) and outputs to `dist/`. Cloudflare Workers serves the app via the Waku Cloudflare adapter. `src/waku.server.tsx` is the Workers entry point, using Waku's `fsRouter` and Cloudflare adapter.

Config files:
- `waku.config.ts` — Vite/Waku configuration (Tailwind, React compiler, Cloudflare plugin)
- `wrangler.jsonc` — Cloudflare Workers configuration (entry point, static assets, compat flags)

### Routing

File-system based routing via Waku's `fsRouter`. Files in `src/pages/` become routes:

- `src/pages/_layout.tsx` — Root layout
- `src/pages/index.tsx` — `/` (Hero)
- `src/pages/about.tsx` — `/about`
- `src/pages/kyeosis.tsx` — `/kyeosis`
- `src/pages/projects/index.tsx` — `/projects` (filterable grid, `?type=...`)
- `src/pages/projects/[project].tsx` — `/projects/:project` (project detail)

Navigation uses Waku's `Link` component and `useRouter()` hook.

### Content / Projects

Project data is defined statically in `src/projects/manifest.tsx` as a `Project[]` array. Each project has a `name` (URL slug), `title`, `tags`, `icon` (JSX), and `body` (JSX). To add or edit a project, modify this file.

### Components

- `src/pages/` — Route-level page components
- `src/components/` — Shared utilities: `Link.tsx`, `Panel.tsx`, `Toggle.tsx`, `Typography.tsx`, `WaveBackground.tsx`, etc.
- `src/projects/` — Project manifest and project-specific components

### Styling

Tailwind CSS v4 configured via `@tailwindcss/vite` plugin. Additional global styles are in `public/css/` (`reset.css`, `app.css`, `projects.css`).
