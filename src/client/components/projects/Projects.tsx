/** @jsxImportSource @b9g/crank */
import { Context } from '@b9g/crank'
import { animate } from 'motion'
import { clsx } from 'clsx'

import { projects as projectManifest, type Project } from './manifest.js'

const tags = getProjectTags(projectManifest)

function getScrollParent(el: HTMLElement | null): Element {
  while (el) {
    const { overflowY } = getComputedStyle(el)
    if (overflowY === 'auto' || overflowY === 'scroll') return el
    el = el.parentElement
  }
  return document.documentElement
}

function getFilterQuery(type: string): string {
  if (type === 'All') return ''
  return type ? `?type=${encodeURIComponent(type)}` : ''
}

function getProjectTags(projects: Project[]): string[] {
  return Array.from(
    projects.reduce(
      (tagSet, project) => {
        project.tags.forEach((t) => tagSet.add(t))
        return tagSet
      },
      new Set(['All']),
    ),
  )
}

export function* Projects(
  this: Context<typeof Projects, void>,
  _props: unknown,
  ctx: Context<typeof Projects, void>,
): Generator<Element> {
  const url = new URL(window.location.href)
  const pathParts = url.pathname.split('/').filter(Boolean)
  let filter = url.searchParams.get('type') ?? 'All'
  let selectedProjectName = pathParts[1] ?? ''
  let savedScrollTop: number | null = null

  console.log('Selected project:', selectedProjectName, 'Filter:', filter)

  // Animate card opacities after each render based on current selection state.
  let containerEl: HTMLDivElement | null = null
  let gridEl: HTMLDivElement | null = null
  const animateCards = (el: HTMLDivElement | null) => {
    gridEl = el
    if (!gridEl) return
    const cards = gridEl.querySelectorAll<HTMLElement>('.project')
    cards.forEach((card) => {
      const cardName = card.dataset.project
      const isSelected = selectedProjectName === cardName
      const targetOpacity = !selectedProjectName || isSelected ? 1 : 0
      animate(card, { opacity: targetOpacity }, { duration: 0.2 })
    })
  }

  const selectProject = (name: string) => {
    const container = containerEl!.querySelector<HTMLElement>(
      '.projects-container',
    )
    const scroller = getScrollParent(container)
    savedScrollTop =
      (scroller as HTMLElement & { scrollTop?: number }).scrollTop ?? 0
    history.pushState(null, '', `/projects/${name}${getFilterQuery(filter)}`)
    ctx.refresh(() => {
      selectedProjectName = name
    })
    // Scroll to top after expansion — runs after refresh
    requestAnimationFrame(() => {
      getScrollParent(
        containerEl!.querySelector<HTMLElement>('.projects-container'),
      ).scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  const deselectProject = () => {
    const restoreY = savedScrollTop
    savedScrollTop = null
    history.pushState(null, '', `/projects${getFilterQuery(filter)}`)
    ctx.refresh(() => {
      selectedProjectName = ''
    })
    if (restoreY !== null) {
      requestAnimationFrame(() => {
        getScrollParent(
          containerEl!.querySelector<HTMLElement>('.projects-container'),
        ).scrollTo({ top: restoreY, behavior: 'smooth' })
      })
    }
  }

  const setFilter = (newFilter: string) => {
    history.pushState(null, '', `/projects${getFilterQuery(newFilter)}`)
    ctx.refresh(() => {
      filter = newFilter
      selectedProjectName = ''
    })
  }

  for ({} of this) {
    const projects = projectManifest.filter(
      (p) => filter === 'All' || p.tags.includes(filter),
    )
    const selectedProject = projectManifest.find(
      (p) => p.name === selectedProjectName,
    )

    yield (
      <div
        ref={(ref: HTMLDivElement) => (containerEl = ref)}
        class="projects-container w-full relative min-h-screen mt-12"
      >
        <h2 class="text-4xl text-center font-bold py-4 px-8 w-full text-white bg-black/40">
          Projects
        </h2>

        {!selectedProjectName ? (
          <div class="project-tags">
            {tags.map((tag) => (
              <a
                key={tag}
                href={`/projects${getFilterQuery(tag)}`}
                class={clsx(
                  'btn',
                  'p-0.5',
                  'text-center',
                  'font-white',
                  'font-bold',
                  {
                    active: filter === tag,
                  },
                )}
                onclick={(e: MouseEvent) => {
                  e.preventDefault()
                  setFilter(tag)
                }}
              >
                {tag}
              </a>
            ))}
          </div>
        ) : (
          <div class="project-tags">
            <a
              class="btn"
              href={`/projects${getFilterQuery(filter)}`}
              onclick={(e: MouseEvent) => {
                e.preventDefault()
                deselectProject()
              }}
            >
              Return to Projects
            </a>
          </div>
        )}

        <div
          class="project-grid p-4 max-w-5xl mx-auto text-white"
          ref={animateCards}
        >
          {projects.map((project) => {
            const isSelected = selectedProject?.name === project.name
            return (
              <div
                key={project.name}
                data-project={project.name}
                class={clsx('project', { 'project-expanded': isSelected })}
                onclick={() => {
                  if (!isSelected) {
                    selectProject(project.name)
                  }
                }}
              >
                <div class="project-icon">{project.icon}</div>
                <h3 class="project-title">{project.title}</h3>
                {isSelected && <div class="project-body">{project.body}</div>}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
