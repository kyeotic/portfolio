import React from 'react'
import { Link } from 'react-router-dom'

const ProjectGroup = ({ title, projects }) => (
  <div>
    <h4>{title}</h4>
    <ul className={'nav nav-stacked nav-project'}>
      {projects.map(project => {
        return (
          <li key={project.route}>
            <Link
              to={'/projects/' + project.route}
              className={'navbar-link btn-block'}
            >
              {project.title}
            </Link>
          </li>
        )
      })}
    </ul>
  </div>
)

export default ({ projects }) => (
  <div>
    <ProjectGroup
      projects={projects.filter(p => p.type === 'personal')}
      title={'Personal Projects'}
    />
    <ProjectGroup
      projects={projects.filter(p => p.type === 'professional')}
      title={'Professional Work'}
    />
    <ProjectGroup
      projects={projects.filter(p => p.type === 'publications')}
      title={'Publications'}
    />
  </div>
)
