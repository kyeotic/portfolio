import { ForwardedRef, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from '@remix-run/react'
import { projects as projectManifest, Project } from './manifest.tsx'
import { useHydrated } from '../components/useHydrated.ts'

const tags = getProjectTags(projectManifest)

export default forwardRef(function Projects(
  {
    filter = 'All',
    project: selectedProjectName,
  }: { filter?: string; project?: string },
  ref: ForwardedRef<HTMLDivElement>
) {
  const navigate = useNavigate()
  const projects = projectManifest.filter(
    (p) => filter === 'All' || p.tags.includes(filter)
  )
  const selectedProject = projectManifest.find(
    (p) => p.name === selectedProjectName
  )

  // Do not try to render framer on the server
  if (!useHydrated()) return null

  let colWidth = 150
  return (
    <div className="projects-container" ref={ref}>
      {!selectedProjectName ? (
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
      {/* <span>
        {JSON.stringify(
          {
            projects,
            colWidth,
          },
          null,
          2
        )}
      </span> */}
      <div className="project-grid">
        {/* {items.map((item) => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)}>
            <motion.h5>{item.subtitle}</motion.h5>
            <motion.h2>{item.title}</motion.h2>
          </motion.div>
        ))} */}
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              initial={false}
              key={project.name}
              layoutId={project.name}
              animate={{ opacity: selectedProject ? 0 : 1 }}
              onClick={() =>
                navigate(`/projects/${project.name}${getFilterQuery(filter)}`)
              }
              className="project"
            >
              {project.icon}
              <h3 className="project-title">{project.title}</h3>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="project-selected"
            layoutId={selectedProject.name}
            onClick={() => navigate(`/projects${getFilterQuery(filter)}`)}
            // style={{
            //   width: selectedProject ? undefined : `${colWidth}px`,
            // }}
          >
            {selectedProject.icon}
            <h3 className="project-title">{selectedProject.title}</h3>
            {selectedProject.body}
          </motion.div>
        )}
      </AnimatePresence>
      {/* <div className="project-grid">
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
      </div> */}
    </div>
  )
})

function getProjectTags(projects: Project[]) {
  return Array.from(
    projects.reduce((tags, project) => {
      project.tags.forEach((t) => tags.add(t))
      return tags
    }, new Set(['All']))
  )
}

function getFilterQuery(type: string) {
  if (type === 'All') return ''
  return type ? `?type=${encodeURIComponent(type)}` : ''
}
