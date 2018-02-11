import React, { Component } from 'react'
import { TransitionMotion, spring, presets } from 'react-motion'

import { Toggle } from '../components/index.js'

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
      selectedProject: null,
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
    const { projects, filter, selectedProject } = this.state
    return projects
      .filter(
        p =>
          selectedProject
            ? selectedProject === p.name
            : filter === 'All' || p.tags.includes(filter)
      )
      .map(project => {
        return {
          data: project,
          key: project.name,
          style:
            project.name === selectedProject
              ? {
                  height: spring(150, presets.stiff),
                  width: spring(500, presets.stiff),
                  opacity: spring(1, presets.stiff)
                }
              : {
                  height: spring(60, presets.stiff),
                  width: spring(100, presets.stiff),
                  opacity: spring(1, presets.stiff)
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
    let { filter, projects, tags, selectedProject } = this.state
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
          <button onClick={() => this.setState({ selectedProject: null })}>
            Return to Projects
          </button>
        )}
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
                  <div
                    key={key}
                    style={style}
                    onClick={() =>
                      this.setState({ selectedProject: project.name })
                    }
                  >
                    {project.name === selectedProject ? (
                      <Project project={project} />
                    ) : (
                      <ProjectTile project={project} />
                    )}
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

const Project = ({ project: { title, icon, body } }) => (
  <div className="project open">
    {icon}
    {title}
    {body}
  </div>
)

const ProjectTile = ({ project: { title, icon } }) => (
  <div className="project">
    {icon}
    {title}
  </div>
)

const projectManifest = [
  {
    name: 'cerberus-node-client',
    title: 'cerberus-node-client',
    tags: ['Security', 'Open Source'],
    icon: <img src="/images/projects/cerberus_logo.svg" />,
    body: (
      <div>
        <p>
          <a src="http://engineering.nike.com/cerberus/">Cerberus</a> is a
          secrets management system developed at Nike that used AWS IAM Roles
          for authentication. I developed the node client while working there,
          and it was among the first projects to go through Nike's Open Source
          process.
        </p>
        <p>
          Cerberus is designed to be used by EC2 instances and AWS Lambdas.
          Getting a performant cold-start on AWS Lambdas can be challengeing,
          especially on Node where the provided AWS SDK can take 1-2 seconds to
          load. Like the AWS Thin Libraries the Cerberus node client makes
          signed HTTP requests to AWS's REST API to avoid using the slow-to-load
          SDK.
        </p>
      </div>
    )
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
    tags: ['Performance', 'Professional'],
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
