import React, { Component } from 'react'
import Sidebar from 'react-sidebar'

import MediaQuery from 'react-responsive'

import manifest from './manifest.js'
import { Page, Mobile } from '../components/index.js'
import ProjectList from './ProjectList.js'
import Project from './Project.js'

export default class Projects extends Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      project: this.getProject(props.match.params),
      isMenuOpen: false
    }
  }

  setMenuOpen = isMenuOpen => {
    this.setState({
      isMenuOpen: isMenuOpen
    })
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
    let { project, isMenuOpen } = this.state

    return (
      <Page title="projects">
        <MediaQuery maxWidth={767}>
          {isMobile => (
            <Sidebar
              styles={{
                root: {
                  position: 'relative',
                  width: '100%',
                  height: '100%'
                },
                sidebar: {
                  backgroundColor: '#fff'
                }
              }}
              docked={!isMobile}
              open={isMenuOpen}
              onSetOpen={this.setMenuOpen}
              transitions={isMobile}
              shadow={false}
              sidebar={<ProjectList projects={manifest.projects} />}
            >
              <div style={isMobile ? null : { paddingLeft: '10px' }}>
                {isMobile ? (
                  <button
                    className="btn btn-link pull-left"
                    onClick={() => this.setMenuOpen(true)}
                  >
                    <i className="icon-menu" />
                  </button>
                ) : null}
                <Project project={project} />
              </div>
            </Sidebar>
          )}
        </MediaQuery>
      </Page>
    )
  }
}
