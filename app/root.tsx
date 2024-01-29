import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/deno'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import * as React from 'react'

import styles from './tailwind.css'

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: 'stylesheet', href: cssBundleHref }] : []),
  { rel: 'stylesheet', href: styles },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'manifest', href: '/manifest.json' },
  { rel: 'shortcut icon', href: '/favicon.ico' },
  { rel: 'stylesheet', href: '/css/reset.css' },
  { rel: 'stylesheet', href: '/css/app.css' },
  { rel: 'stylesheet', href: '/css/projects.css' },
]

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        {/* <ScrollRestoration /> */}
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
