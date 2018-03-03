import React from 'react'
import Projects from '../projects/Projects.js'
import AboutMe from './AboutMe.js'
import qs from 'qs'

import './home.css'

const defaultQuery = {}

export default ({ match, location }) => {
  let query = location.search
    ? qs.parse(location.search.replace('?', ''))
    : defaultQuery
  let project =
    location.pathname && location.pathname.startsWith('/projects/')
      ? location.pathname.split('/')[2]
      : null
  return [
    <section id="intro" key="intro">
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
    </section>,
    <AboutMe key="about" />,
    <section id="projects" key="projects">
      <h2>Projects</h2>
      <Projects project={project} filter={query.type} />
    </section>
  ]
}
