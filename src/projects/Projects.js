import React, { Component } from 'react'
import { presets } from 'react-motion'
import { SpringGrid, makeResponsive, layout } from 'react-stonecutter'

import projectManifest from './manifest.js'
import { Toggle, Link } from '../components/index.js'
import history from '../util/history.js'

import './projects.css'

const Grid = makeResponsive(SpringGrid, {
  maxWidth: 1920
})

const getProjectTags = projects =>
  Array.from(
    projects.reduce((tags, project) => {
      project.tags.forEach(t => tags.add(t))
      return tags
    }, new Set(['All']))
  )

export default class Projects extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      projects: projectManifest,
      tags: getProjectTags(projectManifest)
    }
  }

  // <Toggle
  //           className="project-tags"
  //           options={tags.map(t => ({ value: t, label: t }))}
  //           value={filter}
  //           onChange={newFilter => this.setState({ filter: newFilter })}
  //         />

  handleSelectProject = project => {
    history.push(`/projects/${project}`)
  }

  render() {
    let { filter, project: selectedProject } = this.props
    filter = filter || 'All'

    let { projects, tags } = this.state
    projects = projects.filter(
      p =>
        selectedProject
          ? selectedProject === p.name
          : filter === 'All' || p.tags.includes(filter)
    )
    let colWidth = 150
    return (
      <div className="projects-container">
        {!selectedProject ? (
          <div className="project-tags">
            {tags.map(tag => (
              <Link
                key={tag}
                to={`/projects?type=${tag}`}
                className={`btn ${filter === tag ? 'active' : ''}`}
              >
                {tag}
              </Link>
            ))}
          </div>
        ) : (
          <div className="project-tags">
            <Link className="btn" to={`/`}>
              Return to Projects
            </Link>
          </div>
        )}
        <Grid
          springConfig={presets.gentle}
          layout={layout.simple}
          columnWidth={colWidth}
          itemHeight={225}
          gutterWidth={5}
          gutterHeight={5}
          className="projects"
        >
          {projects.map(project => (
            <div
              key={project.name}
              onClick={() => this.handleSelectProject(project.name)}
              className={`project ${selectedProject ? 'open' : ''}`}
              style={{
                width: selectedProject ? undefined : `${colWidth}px`
              }}
            >
              {project.icon}
              <h3 className="project-title">{project.title}</h3>
              {selectedProject ? project.body : null}
            </div>
          ))}
        </Grid>
      </div>
    )
  }
}
