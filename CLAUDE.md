# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack

- **Framework**: Remix (v2) with Deno runtime
- **Styling**: Tailwind CSS + static CSS files in `public/css/`
- **Animations**: Framer Motion
- **Deployment**: Deno Deploy (`deployctl`)
- **Infrastructure**: Terraform (AWS Route53 DNS, S3 backend for state)

## Common Commands

```bash
# Development (builds once then watches both Remix and Deno in parallel)
npm run dev

# Build only
npm run build

# Production server
npm run start

# Lint (uses Deno linter, ignores node_modules/build/public/build)
npm run lint

# Format (uses Deno formatter)
npm run format

# Type check
npm run typecheck

# Deploy to Deno Deploy
npm run deploy
```

## Architecture

### Runtime & Build

The app uses a hybrid Node/Deno setup: Remix's compiler (`npm` tooling) builds the app, and Deno runs the server. `server.ts` is the Deno entry point, using `@remix-run/deno` to serve static files and the Remix handler. The compiled output goes to `build/index.js`.

The `deno.json` configures the import map (`.vscode/resolve_npm_imports.json`) so Deno can resolve npm packages. TypeScript is checked via Deno's checker rather than `tsc`.

### Routing

All routes re-export from `app/routes/index.tsx` (the actual `HomePage` component). The route files `$.tsx`, `$section.tsx`, and `projects.$project.tsx` all simply re-export `./index.tsx`. Navigation is handled client-side by reading `useParams()` — the `section` and `project` URL params drive which content is shown and which section is scrolled into view.

### Content / Projects

Project data is defined statically in `app/projects/manifest.tsx` as a `Project[]` array. Each project has a `name` (used as the URL slug), `title`, `tags`, `icon` (JSX), and `body` (JSX). To add or edit a project, modify this file.

### Components

- `app/projects/` — Section-level page components (`Hero`, `AboutMe`, `Kyeosis`, `Projects`)
- `app/components/` — Shared utilities: `Link.tsx` (auto-detects external vs internal links), `Panel.tsx`, `Toggle.tsx`, `Typography.tsx`, `useHydrated.ts`
- `app/projects/Projects.tsx` — Renders the filterable project grid with Framer Motion animations; skips SSR rendering (`useHydrated` guard) because Framer Motion is client-only

### Styling

Tailwind is configured in `tailwind.config.ts` scanning `app/**/*.{js,jsx,ts,tsx}`. Additional global styles are in `public/css/` (`reset.css`, `app.css`, `projects.css`) and imported via `root.tsx` links.

### Infrastructure

`infra/` contains Terraform for AWS Route53 DNS records pointing to Deno Deploy. State is stored in S3 (`terraform-remote-<account-id>` bucket). The `infra/deploy` script initializes the backend; apply must be run manually. `infra/watcher.tf` deploys an uptime-monitoring Lambda via the `tf-domain-heartbeat` module.
