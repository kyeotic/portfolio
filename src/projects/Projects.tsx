import { forwardRef } from 'react'

import { Link } from '../components/index.tsx'
import projectManifest from './manifest.tsx'

const tags = getProjectTags(projectManifest)

export default forwardRef(function Projects(
  { filter = 'All', project: selectedProject },
  ref
) {
  const projects = projectManifest.filter((p) =>
    selectedProject
      ? selectedProject === p.name
      : filter === 'All' || p.tags.includes(filter)
  )

  let colWidth = 150
  return (
    <div className="projects-container" ref={ref}>
      {!selectedProject ? (
        <div className="project-tags">
          {tags.map((tag) => (
            <Link
              key={tag}
              to={`/projects${getFilterQuery(tag)}`}
              className={`btn ${filter === tag ? 'active' : ''}`}
            >
              {tag}
            </Link>
          ))}
        </div>
      ) : (
        <div className="project-tags">
          <Link className="btn" to={`/projects${getFilterQuery(filter)}`}>
            Return to Projects
          </Link>
        </div>
      )}
      {/* <Grid
        springConfig={presets.gentle}
        layout={layout.simple}
        columnWidth={colWidth}
        itemHeight={225}
        gutterWidth={5}
        gutterHeight={5}
        className="projects"
      >
        {projects.map((project) => (
          <div
            key={project.name}
            onClick={() =>
              navigate(`/projects/${project.name}${getFilterQuery(filter)}`)
            }
            className={`project ${selectedProject ? 'open' : ''}`}
            style={{
              width: selectedProject ? undefined : `${colWidth}px`,
            }}
          >
            {project.icon}
            <h3 className="project-title">{project.title}</h3>
            {selectedProject ? project.body : null}
          </div>
        ))}
      </Grid> */}
    </div>
  )
})

function getProjectTags(projects) {
  return Array.from(
    projects.reduce((tags, project) => {
      project.tags.forEach((t) => tags.add(t))
      return tags
    }, new Set(['All']))
  )
}

function getFilterQuery(type) {
  if (type === 'All') type = null
  return type ? `?type=${encodeURIComponent(type)}` : ''
}
