import React, { useEffect, useRef } from 'react'
import scrollTo from 'react-scroll-to-component'
import { useQueryParams } from 'raviger'

import Projects from '../projects/Projects.js'
import AboutMe from './AboutMe.js'
import Kyeosis from './Kyeosis.js'

import './home.css'

export default function HomePage({ section, project }) {
  const [{ type }] = useQueryParams()
  const sections = {}
  sections.home = useRef()
  sections.about = useRef()
  sections.projects = useRef()
  sections.kyeosis = sections.about
  section = section || 'home'
  useEffect(() => {
    scrollTo(sections[section].current, { align: 'top' })
  }, [section]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <section id="intro" ref={sections.intro}>
        <div id="jumbotron">
          <h1>
            My name is <span className="name">Tim Kye</span>
          </h1>
          <span className="subtitle">
            I like to work with <span className="subtitle-react">React</span>,{' '}
            <span className="subtitle-node">Node</span>, and{' '}
            <span className="subtitle-aws">AWS</span>
          </span>
        </div>
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
