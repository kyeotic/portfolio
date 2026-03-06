'use client'

import { useEffect, useRef, useState } from 'react'

import Projects from './projects/Projects.js'
import AboutMe from './projects/AboutMe.js'
import Kyeosis from './projects/Kyeosis.js'
import Hero from './projects/Hero.js'

interface RouteState {
  section: string
  project: string | undefined
  type: string | undefined
}

function parseLocation(): RouteState {
  const path = window.location.pathname
  const search = new URLSearchParams(window.location.search)
  const type = search.get('type') ?? undefined

  const projectMatch = path.match(/^\/projects\/(.+)$/)
  if (projectMatch)
    return { section: 'projects', project: projectMatch[1], type }
  if (path === '/projects')
    return { section: 'projects', project: undefined, type }
  if (path === '/kyeosis')
    return { section: 'kyeosis', project: undefined, type }
  if (path === '/about') return { section: 'about', project: undefined, type }
  return { section: 'home', project: undefined, type }
}

export default function HomePage() {
  const [route, setRoute] = useState<RouteState>({
    section: 'home',
    project: undefined,
    type: undefined,
  })

  const isInitial = useRef(true)

  const navigate = (path: string) => {
    window.history.pushState({}, '', path)
    setRoute(parseLocation())
  }

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    const initial = parseLocation()
    setRoute(initial)

    const onPopState = () => {
      setRoute(parseLocation())
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => {
    const smooth = !isInitial.current
    isInitial.current = false
    scrollToCenter(document.getElementById(route.section), { smooth })
  }, [route.section])

  const { section, project, type } = route

  return (
    <>
      <Section id="intro">
        <Hero />
      </Section>
      {section !== 'kyeosis' && (
        <Section id="about">
          <AboutMe navigate={navigate} />
        </Section>
      )}
      {section === 'kyeosis' && (
        <Section id="kyeosis">
          <Kyeosis navigate={navigate} />
        </Section>
      )}
      <Section id="projects">
        <Projects project={project} filter={type} navigate={navigate} />
      </Section>
    </>
  )
}

function Section({ id, children }: { id: string; children?: React.ReactNode }) {
  return (
    <section
      id={id}
      className={`min-h-screen w-full text-white max-w-full flex items-center justify-start`}
    >
      {children}
    </section>
  )
}

function scrollToCenter(
  el?: HTMLElement | null,
  { smooth = true }: { smooth?: boolean } = {},
) {
  if (!el) return
  el.scrollIntoView({
    behavior: smooth ? 'smooth' : 'auto',
    block: 'center',
    inline: 'center',
  })
}
