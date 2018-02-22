import React, { Component } from 'react'
import { presets } from 'react-motion'

import {
  SpringGrid,
  measureItems,
  makeResponsive,
  layout
} from 'react-stonecutter'

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
    let colWidth = selectedProject ? 500 : 150
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
        <Grid
          springConfig={presets.gentle}
          layout={layout.simple}
          itemHeight={200}
          columnWidth={colWidth}
          gutterWidth={5}
          gutterHeight={5}
          className="projects"
        >
          {projects.map(project => (
            <div
              key={project.name}
              onClick={() => this.setState({ selectedProject: project.name })}
              style={{ width: `${colWidth}px` }}
            >
              {project.name === selectedProject ? (
                <Project project={project} />
              ) : (
                <ProjectTile project={project} />
              )}
            </div>
          ))}
        </Grid>
      </div>
    )
  }
}

const Project = ({ project: { title, icon, body } }) => (
  <div className="project open">
    {icon}
    <h3>{title}</h3>
    {body}
  </div>
)

const ProjectTile = ({ project: { title, icon } }) => (
  <div className="project">
    {icon}
    <span className="project-title">{title}</span>
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
    icon: <img alt="" src="/images/projects/rocket.svg" />
  },
  {
    name: 'devportal',
    title: 'Niketech Developer Portal',
    tags: ['Security', 'Professional', 'Front End'],
    icon: <img alt="" src="/images/projects/code_icon.svg" />
  },
  {
    name: 'auth-toolkit',
    title: 'NGP Auth Toolkit',
    tags: ['Open Source', 'Security'],
    icon: <img alt="" src="/images/projects/oauth_logo.svg" />
  },
  {
    name: 'grey-market',
    title: 'Grey Market',
    tags: ['Professional', 'Front End'],
    icon: <img alt="" src="/images/projects/market_icon.svg" />
  },
  {
    name: 'cryonic',
    title: 'Cryonic',
    tags: ['Performance', 'Professional'],
    icon: <img alt="" src="/images/projects/snow.svg" />
  },
  {
    name: 'dabber',
    title: 'dabber',
    tags: ['Open Source'],
    icon: <img alt="" src="/images/projects/dynamodb.svg" />
  },
  {
    name: 'aws-thin-libraries',
    title: 'AWS Thin Libraries',
    tags: ['Performance', 'Open Source'],
    icon: <img alt="" src="/images/projects/aws.svg" />
  },
  {
    name: 'mastering-knockoutjs',
    title: 'Mastering Knockout JS',
    tags: ['Publications'],
    icon: <img alt="" src="/images/projects/mastering_knockout_cover.jpg" />
  },
  {
    name: 't-plus-plus',
    title: 'T++ Blog',
    tags: ['Publications'],
    icon: <img alt="" src="/images/projects/blog_logo.jpg" />
  }
]
