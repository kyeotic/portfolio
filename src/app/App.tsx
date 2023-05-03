import { useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

import Projects from './sections/Projects.tsx'
import AboutMe from './sections/AboutMe.tsx'
import Kyeosis from './sections/Kyeosis.tsx'
import Hero from './sections/Hero.tsx'
import { tw } from 'tw'

export default function App() {
  let { section, project } = useParams()
  const [searchParams] = useSearchParams()

  const type = searchParams.get('type') ?? undefined
  section = project ? 'projects' : section || 'home'

  useEffect(() => {
    if (!section) return
    scrollToCenter(document.getElementById(section))
  }, [section])

  return (
    <>
      <Section id="intro">
        <Hero />
      </Section>
      {section !== 'kyeosis' && (
        <Section id="about">
          <AboutMe />
        </Section>
      )}
      {section === 'kyeosis' && (
        <Section id="kyeosis">
          <Kyeosis />
        </Section>
      )}
      <Section id="projects">
        <Projects project={project} filter={type} />
      </Section>
    </>
  )
}

function Section({ id, children }: { id: string; children?: JSX.Element }) {
  return (
    <section
      id={id}
      className={tw(
        `min-h-screen w-full text-white max-w-full text-white flex items-center justify-start`
      )}
    >
      {children}
    </section>
  )
}

function scrollToCenter(
  el?: HTMLElement | null,
  { smooth = true }: { smooth?: boolean } = {}
) {
  if (!el) return
  el.scrollIntoView({
    behavior: smooth ? 'smooth' : 'auto',
    block: 'center',
    inline: 'center',
  })
}
