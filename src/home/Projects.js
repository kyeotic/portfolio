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
              className={`project ${selectedProject ? 'open' : ''}`}
              style={{
                width: selectedProject ? undefined : `${colWidth}px`,
                transition: 'width 1s ease'
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

const projectManifest = [
  {
    name: 'cerberus-node-client',
    title: 'Cerberus Node Client',
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
        <p>
          This client is on{' '}
          <a href="https://www.npmjs.com/package/cerberus-node-client">npm</a>,
          the source is on{' '}
          <a href="https://github.com/Nike-Inc/cerberus-node-client">Github</a>.
        </p>
      </div>
    )
  },
  {
    name: 'rocket',
    title: 'Rocket',
    tags: ['Professional', 'Front End'],
    icon: <img alt="" src="/images/projects/rocket.svg" />,
    body: (
      <div>
        <p>
          Rocket is a project bootstrapper. Nike is a big shop with thousands of
          engineers. Experimentation is strongly encouraged, and new projects
          spin up every week (sometimes to fail less than a month later). Rocket
          is designed on a plugin system that lets its user select a Blueprint
          and choose what modules get included. Are you starting a new
          serverless project? Do you need CloudFormation or Terraform? CircleCI
          or Jenkins? Rocket makes getting off the ground quick, even with
          constantly shifting "Best Practices", patterns, and technology stacks.
        </p>
        <p>
          Rocket was my team's first Typescript project, which we chose to help
          with the tangled interactions between plugins. Its plugins are
          described with <a href="http://json-schema.org/">JSON Schema</a>,
          which dynamically creates the UI forms and validation for each
          Blueprint, and they use <a href="http://yeoman.io/">Yeoman</a> for
          composing and generating the output.
        </p>
        <p>
          Rocket was a team effort, but I was largely responsible for the design
          and implementation of the plugin system and dynamic JSON schema UI
          that powered it.
        </p>
      </div>
    )
  },
  {
    name: 'devportal',
    title: 'Niketech Developer Portal',
    tags: ['Security', 'Professional', 'Front End'],
    icon: <img alt="" src="/images/projects/code_icon.svg" />,
    body: (
      <div>
        <p>
          Like the Facebook or Twitter developer portals the Niketech Developer
          Portal is a tool for discovering APIs, viewing documentation, and
          manaing oAuth applications.
        </p>
        <p>
          APIs can be created, managed, and versioned. Documentation can be
          supplied using a combination of markdown READMEs and interactive
          endpoint documenation using{' '}
          <a href="https://www.openapis.org/">OpenAPI 3 (formerly Swagger)</a>{' '}
          or <a href="https://apiblueprint.org/">API Blueprint</a>. Details can
          also be provided for API, such as host, SLAs, and maintainer contact
          emails.
        </p>
        <p>
          The portal also offered self-service oAuth application management,
          which was a managed abstraction over PingFederate and Okta. It guided
          you through client creation, setup, and implementation.
        </p>
      </div>
    )
  },
  {
    name: 'auth-toolkit',
    title: 'NGP Auth Toolkit',
    tags: ['Professional', 'Security'],
    icon: <img alt="" src="/images/projects/oauth_logo.svg" />,
    body: (
      <div>
        <p />
      </div>
    )
  },
  {
    name: 'grey-market',
    title: 'Grey Market',
    tags: ['Professional', 'Front End'],
    icon: <img alt="" src="/images/projects/market_icon.svg" />,
    body: (
      <div>
        <p />
      </div>
    )
  },
  {
    name: 'cryonic',
    title: 'Cryonic',
    tags: ['Performance', 'Professional'],
    icon: <img alt="" src="/images/projects/snow.svg" />,
    body: (
      <div>
        <p>
          Cryonic is a tool for measuring NodeJS AWS Lambda cold-start
          performance. It hooks into the module loader, times everything, and
          generates a flame graph like{' '}
          <a href="https://github.com/aws/aws-sdk-js/issues/1469#issuecomment-322820847">
            this one
          </a>{' '}
          (this was actually generated with Cryonic).{' '}
        </p>
        <p>
          If you aren't familiar with AWS Lambdas the need for this may not be
          clear. AWS Lambdas are special containers that each handle a single
          concurrent request, which makes their scaling policy dead simple: if
          there is not an available container to handle a request, make a new
          one. They are discarded if they are idle for too long, so "cold
          starts" like this are common unless you have a perfectly flat request
          rate. Freshly started containers have to load all their code before
          they can run, in contrast to typical servers that startup once and
          then run forever. This means their is an unusual focus on how quickly
          the container can start. Cryonic was built to help identify
          bottlenecks in this process.
        </p>
        <p>
          Unlike the AWS Thin Libraries, which I also developed at Nike, I was
          not allowed to release Cryonic as Open Source.
        </p>
      </div>
    )
  },
  {
    name: 'coral-commons',
    title: 'Coral Commons',
    tags: ['Open Source', 'Front End'],
    icon: <img alt="" src="/images/projects/ic_cc.png" />,
    body: (
      <div>
        <p>
          I used to live in a condo project with a very proactive and positive
          community. After our first community meeting I discovered they were
          keeping contact and other information in spreadsheets, so I offered to
          help them out. It was also a good opportunity to play with{' '}
          <a href="https://github.com/rackt/redux">Redux</a>,{' '}
          <a href="https://www.firebase.com/">Firebase</a>, and the{' '}
          <a href="https://github.com/firebase/blaze_compiler">
            blaze compiler
          </a>.
        </p>
        <p>
          The app has display and entry screens for Residents and Houses, and
          mapping between the two. "Verified" accounts can read any data, and
          write to Residents or Houses that they have been linked to. The HOA
          board members have write access to everything.
        </p>
        <p>
          There is also a bulletin board that anyone can post to, which supports
          Markdown (<a href="http://commonmark.org/">CommonMark</a> flavored).
          The site was designed with Bootsrap so that it can be easily used on
          phones, which is how I expected the majority of the community the use
          the site.
        </p>
        <p>
          You can check out the{' '}
          <a href="https://github.com/tyrsius/coral-commons">source code</a> on
          GitHub.
        </p>
      </div>
    )
  },
  {
    name: 'dabber',
    title: 'dabber',
    tags: ['Open Source'],
    icon: <img alt="" src="/images/projects/dynamodb.svg" />,
    body: (
      <div>
        <p />
      </div>
    )
  },
  {
    name: 'aws-thin-libraries',
    title: 'AWS Thin Libraries',
    tags: ['Performance', 'Open Source'],
    icon: <img alt="" src="/images/projects/aws.svg" />,
    body: (
      <div>
        <p>
          AWS Lambdas are "serverless" runtimes that offer low-cost,
          automatically scaling infrastructure. These benefits come at the cost
          of ephemeral instances which often have to start and load their entire
          package before handling a request, which can result in very slow
          responses if your containers cannot start very, <em>very</em> quickly.
          This problem is exacerbated by the{' '}
          <a href="https://github.com/aws/aws-sdk-js/issues/1469#issuecomment-322820847">
            slow startup speed of the Official AWS SDK.
          </a>
        </p>
        <p>
          Enter the AWS Thin Libraries: paired down versions of the{' '}
          <a href="https://github.com/Nike-Inc/aws-thin-dynamo-node">Dynamo</a>,{' '}
          <a href="https://github.com/Nike-Inc/aws-thin-s3-node">S3</a>, and{' '}
          <a href="https://github.com/Nike-Inc/aws-thin-ses-node">SES</a>{' '}
          clients optimzed for start-up speed. The performance gains on these
          are substantial, ranging from 300ms-1500ms depending on the size of
          the lambda and how you loaded the client. While less important for
          lambdas that triggered by S3 or Dynamo events, these are indispensable
          if your lambda is handling requests from your user-facing REST API.
          Since lambdas are billed by their execution time if you can cut off
          500ms you could be saving 50% on your bill, which is still valuable to
          those S3 triggered lambdas if they fire a million times a month.
        </p>
      </div>
    )
  },
  {
    name: 'mastering-knockoutjs',
    title: 'Mastering Knockout JS',
    tags: ['Publications'],
    icon: <img alt="" src="/images/projects/mastering_knockout_cover.jpg" />,
    body: (
      <div>
        <p />
      </div>
    )
  },
  {
    name: 't-plus-plus',
    title: 'T++ Blog',
    tags: ['Publications'],
    icon: <img alt="" src="/images/projects/blog_logo.jpg" />,
    body: (
      <div>
        <p />
      </div>
    )
  }
]
