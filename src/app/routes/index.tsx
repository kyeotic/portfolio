import { useEffect, useRef } from 'react'
import { useParams, useSearchParams } from '@remix-run/react'

import Projects from '../projects/Projects.tsx'
import AboutMe from '../projects/AboutMe.tsx'
import Kyeosis from '../projects/Kyeosis.tsx'
import Hero from '../projects/Hero.tsx'
import { tw } from 'tw'

export default function HomePage() {
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
