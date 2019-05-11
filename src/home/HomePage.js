import React, { Component } from 'react'
import scrollTo from 'react-scroll-to-component'
import qs from 'qs'

import Projects from '../projects/Projects.js'
import AboutMe from './AboutMe.js'

import './home.css'

const defaultQuery = {}

const getSection = props =>
  (props.match && props.match.params && props.match.params.section) || 'home'

export default class HomePage extends Component {
  constructor(...props) {
    super(...props)
    this.sections = {}
  }

  componentDidMount() {
    this.scrollToSection(getSection(this.props))
  }

  componentWillReceiveProps(nextProps) {
    let nextSection = getSection(nextProps)
    if (getSection(this.props) !== nextSection) {
      this.scrollToSection(nextSection)
    }
  }

  scrollToSection = section => {
    scrollTo(this.sections[section], { align: 'top' })
  }

  render() {
    let { location } = this.props
    let query = location.search
      ? qs.parse(location.search.replace('?', ''))
      : defaultQuery
    let project =
      location.pathname && location.pathname.startsWith('/projects/')
        ? location.pathname.split('/')[2]
        : null
    return [
      <section
        id="intro"
        key="intro"
        ref={section => {
          this.sections.home = section
        }}
      >
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
      <section
        key="about"
        id="about"
        ref={section => {
          this.sections.about = section
        }}
      >
        <AboutMe />
      </section>,
      <section id="projects" key="projects">
        <h2>Projects</h2>
        <Projects
          project={project}
          filter={query.type}
          ref={section => {
            this.sections.projects = section
          }}
        />
      </section>
    ]
  }
}
