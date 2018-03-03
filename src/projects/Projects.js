import React, { Component } from 'react'
import { presets } from 'react-motion'

import projectManifest from './manifest.js'

import { SpringGrid, makeResponsive, layout } from 'react-stonecutter'

import { Toggle } from '../components/index.js'

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
      filter: 'All',
      selectedProject: null,
      projects: projectManifest,
      tags: getProjectTags(projectManifest)
    }
  }

  render() {
    let { filter, projects, tags, selectedProject } = this.state
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
          <Toggle
            className="project-tags"
            options={tags.map(t => ({ value: t, label: t }))}
            value={filter}
            onChange={newFilter => this.setState({ filter: newFilter })}
          />
        ) : (
          <div className="project-tags">
            <button
              className="btn"
              onClick={() => this.setState({ selectedProject: null })}
            >
              Return to Projects
            </button>
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
              onClick={() => this.setState({ selectedProject: project.name })}
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
