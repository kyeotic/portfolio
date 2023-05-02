import { type LinksFunction, type MetaFunction } from '@remix-run/deno'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import TwindStyle from '../twind/TwindStyle.tsx'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'Tim Kye',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'shortcut icon', href: '/favicon.ico' },
    { rel: 'stylesheet', href: '/css/reset.css' },
    { rel: 'stylesheet', href: '/css/app.css' },
    { rel: 'stylesheet', href: '/css/projects.css' },
    { rel: 'stylesheet', href: '/css/vestigial.css' },
  ]
}

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Tim Kye - Portfolio" />
        <TwindStyle />
        <Links />
      </head>
      <body>
        <Outlet />
        {/* This is causing weird behavior on navigation */}
        {/* <ScrollRestoration /> */}
        <Scripts />
        <LiveReload port={Number(window.location.port)} />
      </body>
    </html>
  )
}
