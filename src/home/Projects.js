import React, { Component } from 'react'
import { TransitionMotion, spring, presets } from 'react-motion'

import './projects.css'

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
      projects: projectManifest,
      tags: getProjectTags(projectManifest)
    }
  }

  // actual animation-related logic
  getDefaultStyles = () => {
    return this.state.projects.map(project => ({
      data: project,
      key: project.name,
      style: { height: 0, width: 0, opacity: 1 }
    }))
  }

  getStyles = () => {
    const { projects, filter } = this.state
    return projects
      .filter(p => filter === 'All' || p.tags.includes(filter))
      .map(project => {
        return {
          data: project,
          key: project.name,
          style: {
            height: spring(60, presets.gentle),
            width: spring(100, presets.gentle),
            opacity: spring(1, presets.gentle)
          }
        }
      })
  }

  willEnter() {
    return {
      height: 0,
      width: 0,
      opacity: 1
    }
  }

  willLeave() {
    return {
      height: spring(0),
      width: spring(0),
      opacity: spring(0)
    }
  }

  render() {
    let { filter, projects, tags } = this.state
    return (
      <div>
        {tags.map(tag => (
          <button key={tag} onClick={() => this.setState({ filter: tag })}>
            {tag}
          </button>
        ))}
        <TransitionMotion
          defaultStyles={this.getDefaultStyles()}
          styles={this.getStyles()}
          willLeave={this.willLeave}
          willEnter={this.willEnter}
        >
          {styles => (
            <div className="projects">
              {styles.map(({ key, style, data: project }) => {
                return (
                  <div className="project" key={key} style={style}>
                    {project.icon}
                    {project.title}
                  </div>
                )
              })}
            </div>
          )}
        </TransitionMotion>
      </div>
    )
  }
}

const projectManifest = [
  {
    name: 'cerberus-node-client',
    title: 'cerberus-node-client',
    tags: ['Security', 'Open Source'],
    icon: <img src="/images/projects/cerberus_logo.svg" />
  },
  {
    name: 'rocket',
    title: 'Rocket',
    tags: ['Professional', 'Front End'],
    icon: <img src="/images/projects/rocket.svg" />
  },
  {
    name: 'devportal',
    title: 'Niketech Developer Portal',
    tags: ['Security', 'Professional', 'Front End'],
    icon: <img src="/images/projects/code_icon.svg" />
  },
  {
    name: 'auth-toolkit',
    title: 'NGP Auth Toolkit',
    tags: ['Open Source', 'Security'],
    icon: <img src="/images/projects/oauth_logo.svg" />
  },
  {
    name: 'grey-market',
    title: 'Grey Market',
    tags: ['Professional', 'Front End'],
    icon: <img src="/images/projects/market_icon.svg" />
  },
  {
    name: 'cryonic',
    title: 'Cryonic',
    tags: ['Performance', 'Open Source'],
    icon: <img src="/images/projects/snow.svg" />
  },
  {
    name: 'dabber',
    title: 'dabber',
    tags: ['Open Source'],
    icon: <img src="/images/projects/dynamodb.svg" />
  },
  {
    name: 'aws-thin-libraries',
    title: 'AWS Thin Libraries',
    tags: ['Performance', 'Open Source'],
    icon: <img src="/images/projects/aws.svg" />
  },
  {
    name: 'mastering-knockoutjs',
    title: 'Mastering Knockout JS',
    tags: ['Publications'],
    icon: <img src="/images/projects/mastering_knockout_cover.jpg" />
  },
  {
    name: 't-plus-plus',
    title: 'T++ Blog',
    tags: ['Publications'],
    icon: <img src="/images/projects/blog_logo.jpg" />
  }
]
