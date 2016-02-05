import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ProjectGroup extends Component {
  render () {
    return (
    <div>
      <h4>{this.props.title}</h4>
      <ul className={"nav nav-stacked nav-project"}>
        {this.props.projects.map(project => {
          return (<li key={project.route}>
            <Link to={'projects/' + project.route} className={"navbar-link btn-block"}>
            {project.title}
            </Link>
            </li>
          )
        })}
      </ul>
    </div>
    )
  }
}

export default class ProjectList extends Component {
  render () {
    let projects = this.props.projects
    return (
    <div>
      <ProjectGroup projects={projects.filter(p => p.type === 'personal')} title={'Personal Projects'} />
      <ProjectGroup projects={projects.filter(p => p.type === 'professional')} title={'Professional Work'} />
      <ProjectGroup projects={projects.filter(p => p.type === 'publications')} title={'Publications'} />
    </div>
  )
  }
}
