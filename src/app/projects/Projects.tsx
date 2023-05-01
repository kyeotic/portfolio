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
      <div className="project-grid">
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
          >
            {selectedProject.icon}
            <h3 className="project-title">{selectedProject.title}</h3>
            {selectedProject.body}
          </motion.div>
        )}
      </AnimatePresence>
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
