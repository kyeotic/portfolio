import { ForwardedRef, forwardRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from '@remix-run/react'
import { tw } from 'tw'

import { projects as projectManifest, Project } from './manifest.tsx'
import { useHydrated } from '../components/useHydrated.ts'

const tags = getProjectTags(projectManifest)

export default function Projects({
  filter = 'All',
  project: selectedProjectName,
}: {
  filter?: string
  project?: string
}) {
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
    <div
      className={tw(`projects-container w-full relative min-h-screen mt-12`)}
    >
      <h2
        className={tw(
          `text-4xl text-center font-bold py-4 px-8 w-full text-white bg-black/40`
        )}
      >
        Projects
      </h2>
      {!selectedProjectName ? (
        <div className="project-tags">
          {tags.map((tag) => (
            <Link
              key={tag}
              to={`/projects${getFilterQuery(tag)}`}
              className={`btn ${filter === tag ? 'active' : ''} ${tw(
                `p-0.5 text-center font-white font-bold`
              )}`}
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
      <div className={tw(`project-grid p-4`)}>
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
}

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
