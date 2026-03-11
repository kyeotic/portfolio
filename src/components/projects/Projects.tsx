'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'waku'
import { clsx } from 'clsx'

import { projects as projectManifest, Project } from './manifest.js'
import { useHydrated } from '../useHydrated.js'

const tags = getProjectTags(projectManifest)

function getScrollParent(el: HTMLElement | null): Element {
  while (el) {
    const { overflowY } = getComputedStyle(el)
    if (overflowY === 'auto' || overflowY === 'scroll') return el
    el = el.parentElement
  }
  return document.documentElement
}

export default function Projects({
  filter = 'All',
  project: selectedProjectName,
}: {
  filter?: string
  project?: string
}) {
  const { push } = useRouter()
  const containerRef = useRef<HTMLDivElement>(null)
  const [savedScrollTop, setSavedScrollTop] = useState<number | null>(null)

  useEffect(() => {
    if (selectedProjectName) {
      const scroller = getScrollParent(containerRef.current)
      scroller.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [selectedProjectName])

  function selectProject(name: string) {
    const scroller = getScrollParent(containerRef.current)
    setSavedScrollTop(scroller.scrollTop)
    push(`/projects/${name}${getFilterQuery(filter)}`, { scroll: false })
  }

  function deselectProject() {
    const restoreY = savedScrollTop
    setSavedScrollTop(null)
    push(`/projects${getFilterQuery(filter)}`, { scroll: false })
    if (restoreY !== null) {
      const scroller = getScrollParent(containerRef.current)
      scroller.scrollTo({ top: restoreY, behavior: 'smooth' })
    }
  }

  const projects = projectManifest.filter(
    (p) => filter === 'All' || p.tags.includes(filter),
  )
  const selectedProject = projectManifest.find(
    (p) => p.name === selectedProjectName,
  )

  // Do not try to render framer on the server
  if (!useHydrated()) return null

  return (
    <div
      ref={containerRef}
      className={`projects-container w-full relative min-h-screen mt-12`}
    >
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
              deselectProject()
            }}
          >
            Return to Projects
          </a>
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => deselectProject()}
          />
        )}
      </AnimatePresence>

      <div className="project-grid p-4 max-w-5xl mx-auto text-white">
        {projects.map((project) => {
          const isSelected = selectedProject?.name === project.name
          return (
            <motion.div
              key={project.name}
              layout
              className={clsx('project', { 'project-expanded': isSelected })}
              animate={{
                opacity: !selectedProjectName || isSelected ? 1 : 0,
              }}
              onClick={() => {
                if (!isSelected) {
                  selectProject(project.name)
                }
              }}
            >
              <motion.div layout className="project-icon">
                {project.icon}
              </motion.div>
              <motion.h3 layout className="project-title">
                {project.title}
              </motion.h3>
              {isSelected && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {project.body}
                </motion.div>
              )}
            </motion.div>
          )
        })}
      </div>
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

function getFilterQuery(type: string): string {
  if (type === 'All') return ''
  return type ? `?type=${encodeURIComponent(type)}` : ''
}
