'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'waku'
import { clsx } from 'clsx'

import { projects as projectManifest, Project } from './manifest.js'
import { useHydrated } from '../useHydrated.js'

const tags = getProjectTags(projectManifest)

export default function Projects({
  filter = 'All',
  project: selectedProjectName,
}: {
  filter?: string
  project?: string
}) {
  const { push } = useRouter()
  const projects = projectManifest.filter(
    (p) => filter === 'All' || p.tags.includes(filter),
  )
  const selectedProject = projectManifest.find(
    (p) => p.name === selectedProjectName,
  )

  // Do not try to render framer on the server
  if (!useHydrated()) return null

  return (
    <div className={`projects-container w-full relative min-h-screen mt-12`}>
      <h2
        className={`text-4xl text-center font-bold py-4 px-8 w-full text-white bg-black/40`}
      >
        Projects
      </h2>
      {!selectedProjectName ? (
        <div className="project-tags">
          {tags.map((tag) => (
            <a
              key={tag}
              href={`/projects${getFilterQuery(tag)}`}
              className={`btn ${
                filter === tag ? 'active' : ''
              } ${`p-0.5 text-center font-white font-bold`}`}
              onClick={(e) => {
                e.preventDefault()
                push(`/projects${getFilterQuery(tag)}`)
              }}
            >
              {tag}
            </a>
          ))}
        </div>
      ) : (
        <div className="project-tags">
          <a
            className="btn"
            href={`/projects${getFilterQuery(filter)}`}
            onClick={(e) => {
              e.preventDefault()
              push(`/projects${getFilterQuery(filter)}`)
            }}
          >
            Return to Projects
          </a>
        </div>
      )}
      <div
        className={clsx('project-grid p-4 max-w-5xl mx-auto text-white', {
          hidden: !!selectedProjectName,
        })}
      >
        <AnimatePresence>
          {projects.map((project) => (
            <motion.div
              initial={false}
              key={project.name}
              layoutId={project.name}
              animate={{ opacity: selectedProject ? 0 : 1 }}
              onClick={() =>
                push(`/projects/${project.name}${getFilterQuery(filter)}`)
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
          <div
            className="fixed inset-0 z-10"
            onClick={() => push(`/projects${getFilterQuery(filter)}`)}
          />
        )}
        {selectedProject && (
          <motion.div
            className="project-selected text-white z-20"
            layoutId={selectedProject.name}
            onClick={(e) => e.stopPropagation()}
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
    projects.reduce(
      (tags, project) => {
        project.tags.filter((t) => t !== 'Rust').forEach((t) => tags.add(t))
        return tags
      },
      new Set(['All']),
    ),
  )
}

function getFilterQuery(type: string) {
  if (type === 'All') return ''
  return type ? `?type=${encodeURIComponent(type)}` : ''
}
