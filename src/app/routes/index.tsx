import { useEffect, useRef } from 'react'
import { useParams, useSearchParams } from '@remix-run/react'

import Projects from '../projects/Projects.tsx'
import AboutMe from '../projects/AboutMe.tsx'
import Kyeosis from '../projects/Kyeosis.tsx'
import Hero from '../projects/Hero.tsx'

export default function HomePage() {
  let { section, project } = useParams()
  const [searchParams] = useSearchParams()
  const type = searchParams.get('type') ?? undefined
  const sections = {} as any
  sections.home = useRef()
  sections.about = useRef()
  sections.projects = useRef()
  sections.kyeosis = sections.about
  section = project ? 'projects' : section || 'home'
  useEffect(() => {
    if (!section) return
    scrollToCenter(sections[section].current)
  }, [section]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section id="intro" ref={sections.intro}>
        <Hero />
      </section>
      <section id="about" ref={sections.about}>
        {section === 'kyeosis' ? <Kyeosis /> : <AboutMe />}
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <Projects project={project} filter={type} ref={sections.projects} />
      </section>
    </>
  )
}

export function scrollToCenter(
  el: HTMLElement,
  { smooth = true }: { smooth?: boolean } = {}
) {
  if (!el) return
  el.scrollIntoView({
    behavior: smooth ? 'smooth' : 'auto',
    block: 'center',
    inline: 'center',
  })
}
