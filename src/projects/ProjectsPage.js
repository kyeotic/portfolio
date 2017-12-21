import React, { Component } from 'react'

import manifest from './manifest.js'
import { Page } from '../components/index.js'
import ProjectList from './ProjectList.js'
import Project from './Project.js'

export default class Projects extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = { project: this.getProject(props.match.params) }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ project: this.getProject(nextProps.match.params) })
  }

  getProject = params => {
    let project = !params.name
      ? manifest.projects[0]
      : manifest.projects.find(p => p.route === params.name)
    return project
  }

  render() {
    let project = this.state.project
    return (
      <Page title="projects">
        <div className={'row'}>
          <div className={'col-sm-2'}>
            <ProjectList projects={manifest.projects} />
          </div>

          <div id="projectsContainer" className={'col-sm-10'}>
            <Project project={project} />
          </div>
        </div>
      </Page>
    )
  }
}
