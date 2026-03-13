/** @jsxImportSource @b9g/crank */
import type { Child } from '@b9g/crank'
import { Navbar } from './Navbar.js'

interface LayoutProps {
  title: string
  children: Child
  clientUrls?: string[]
  path?: string
}

export function Layout({
  title,
  children,
  clientUrls = [],
  path = '/',
}: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <title>{title} — Tim Kye</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/reset.css" />
        <link rel="stylesheet" href="/css/app.css" />
        <link rel="stylesheet" href="/css/projects.css" />
        {clientUrls.map((url) => (
          <script src={url} type="module" />
        ))}
      </head>
      <body>
        <div id="wave-bg" />
        <div class="app-shell">
          <main class="app-content">{children}</main>
          <Navbar path={path} />
        </div>
      </body>
    </html>
  )
}
