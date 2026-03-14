import { Context } from '@b9g/crank'

import { Hero } from '../pages/Hero.js'
import { About } from '../pages/About.js'
import { Kyeosis } from '../pages/Kyeosis.js'
import { Projects } from './projects/Projects.js'
import { Navbar } from './Navbar.js'

const pageTitles: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/kyeosis': 'Kyeosis',
  '/projects': 'Projects',
}

function getTitle(pathname: string): string {
  const base = pathname.startsWith('/projects')
    ? 'Projects'
    : (pageTitles[pathname] ?? 'Home')
  return `${base} — Tim Kye`
}

function Page({ pathname }: { pathname: string }) {
  if (pathname === '/about') return <About />
  if (pathname === '/kyeosis') return <Kyeosis />
  if (pathname.startsWith('/projects')) return <Projects />
  return <Hero />
}

export function* Router(this: Context) {
  let pathname = location.pathname

  const navigate = (href: string) =>
    this.refresh(() => {
      const url = new URL(href, location.href)
      pathname = url.pathname
      history.pushState({}, '', href)
      document.title = getTitle(pathname)
    })

  const onClick = (e: Event) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('a[href]')
    if (!a) return
    const href = a.getAttribute('href')!
    if (
      !href ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('#')
    )
      return
    if (a.target === '_blank') return
    // Let Projects manage its own internal navigation
    const targetPath = new URL(href, location.href).pathname
    if (pathname.startsWith('/projects') && targetPath.startsWith('/projects'))
      return
    e.preventDefault()
    navigate(href)
  }

  const onPopstate = () => {
    pathname = location.pathname
    this.refresh()
  }

  document.addEventListener('click', onClick)
  window.addEventListener('popstate', onPopstate)
  this.cleanup(() => {
    document.removeEventListener('click', onClick)
    window.removeEventListener('popstate', onPopstate)
  })

  for ({} of this) {
    yield (
      <div class="app-shell">
        <main class="app-content">
          <Page pathname={pathname} />
        </main>
        <Navbar path={pathname} />
      </div>
    )
  }
}
