'use client'

import { Link, useRouter } from 'waku'

type Tab = 'main' | 'about' | 'projects'

const TAB_LABELS: Record<Tab, string> = {
  main: 'Main',
  about: 'About',
  projects: 'Projects',
}

const TAB_HREF: Record<Tab, string> = {
  main: '/',
  about: '/about',
  projects: '/projects',
}

function pathToTab(path: string): Tab {
  if (path === '/about' || path === '/kyeosis') return 'about'
  if (path.startsWith('/projects')) return 'projects'
  return 'main'
}

export default function Navbar() {
  const { path } = useRouter()
  const tab = pathToTab(path)

  return (
    <nav className="flex shrink-0 border-t border-white/20 bg-black/50 backdrop-blur-sm">
      {(Object.keys(TAB_LABELS) as Tab[]).map((t) => (
        <Link
          key={t}
          to={TAB_HREF[t]}
          className={`flex-1 py-3 text-center text-sm font-semibold uppercase tracking-widest transition-colors duration-150 ${
            tab === t
              ? 'text-white border-t-2 border-pink-400 -mt-px'
              : 'text-white/50 hover:text-white/80'
          }`}
        >
          {TAB_LABELS[t]}
        </Link>
      ))}
    </nav>
  )
}
