import React, { useEffect, useRef } from 'react'
import scrollTo from 'react-scroll-to-component'
import qs from 'qs'

import Projects from '../projects/Projects.js'
import AboutMe from './AboutMe.js'
import Kyeosis from './Kyeosis.js'

import './home.css'

const defaultQuery = {}

const getSection = props =>
  (props.match && props.match.params && props.match.params.section) || 'home'

export default function HomePage(props) {
  let sections = {}
  sections.intro = useRef()
  sections.about = useRef()
  sections.projects = useRef()
  sections.kyeosis = sections.about
  let section = getSection(props)
  useEffect(() => {
    scrollTo(sections[section].current, { align: 'top' })
  }, [section]) // eslint-disable-line react-hooks/exhaustive-deps

  let { location } = props
  let query = location.search
    ? qs.parse(location.search.replace('?', ''))
    : defaultQuery
  let project =
    location.pathname && location.pathname.startsWith('/projects/')
      ? location.pathname.split('/')[2]
      : null
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
        <Projects
          project={project}
          filter={query.type}
          ref={sections.projects}
        />
      </section>
    </>
  )
}
