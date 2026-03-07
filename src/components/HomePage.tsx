'use client'

import { useEffect, useState } from 'react'

import Hero from './projects/Hero.js'
import AboutMe from './projects/AboutMe.js'
import Projects from './projects/Projects.js'

type Tab = 'main' | 'about' | 'projects'

function parseTab(): Tab {
  const path = window.location.pathname
  if (path === '/about') return 'about'
  if (path.startsWith('/projects')) return 'projects'
  return 'main'
}

function parseProject(): string | undefined {
  const match = window.location.pathname.match(/^\/projects\/(.+)$/)
  return match ? match[1] : undefined
}

function parseFilter(): string {
  return new URLSearchParams(window.location.search).get('type') ?? 'All'
}

const TAB_LABELS: Record<Tab, string> = {
  main: 'Main',
  about: 'About',
  projects: 'Projects',
}

export default function HomePage() {
  const [tab, setTab] = useState<Tab>('main')
  const [project, setProject] = useState<string | undefined>(undefined)
  const [filter, setFilter] = useState<string>('All')

  const syncFromUrl = () => {
    setTab(parseTab())
    setProject(parseProject())
    setFilter(parseFilter())
  }

  useEffect(() => {
    syncFromUrl()
    window.addEventListener('popstate', syncFromUrl)
    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [])

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    syncFromUrl()
  }

  const switchTab = (newTab: Tab) => {
    const path = newTab === 'main' ? '/' : `/${newTab}`
    navigate(path)
  }

  return (
    <div className="flex flex-col h-dvh">
      {/* Content area */}
      <div className="flex-1 overflow-hidden min-h-0">
        {tab === 'main' && (
          <div className="h-full flex items-center justify-center">
            <Hero />
          </div>
        )}
        {tab === 'about' && (
          <div className="h-full overflow-y-auto">
            <AboutMe navigate={navigate} />
          </div>
        )}
        {tab === 'projects' && (
          <div className="h-full overflow-y-auto">
            <Projects project={project} filter={filter} navigate={navigate} />
          </div>
        )}
      </div>

      {/* Tab bar */}
      <nav className="flex shrink-0 border-t border-white/20 bg-black/50 backdrop-blur-sm">
        {(Object.keys(TAB_LABELS) as Tab[]).map((t) => (
          <button
            key={t}
            onClick={() => switchTab(t)}
            className={`flex-1 py-3 text-sm font-semibold uppercase tracking-widest transition-colors duration-150 ${
              tab === t
                ? 'text-white border-t-2 border-pink-400 -mt-px'
                : 'text-white/50 hover:text-white/80'
            }`}
          >
            {TAB_LABELS[t]}
          </button>
        ))}
      </nav>
    </div>
  )
}
