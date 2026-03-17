import { Context, Element } from '@b9g/crank'
import { animate } from 'motion'
import { clsx } from 'clsx'

import { projects as projectManifest, type Project } from './manifest.js'
import { createEvent } from '../../utils/events.js'

const tags = getProjectTags(projectManifest)
const onProjectSelect = createEvent<{ id: string }>('project.select')

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

  const onPopState = () => {
    const u = new URL(window.location.href)
    const parts = u.pathname.split('/').filter(Boolean)
    const newFilter = u.searchParams.get('type') ?? 'All'
    const newSelected = parts[1] ?? ''

    if (gridEl) {
      prevPositions.clear()
      gridEl.querySelectorAll<HTMLElement>('.project').forEach((card) => {
        const name = card.dataset.project
        if (name) prevPositions.set(name, card.getBoundingClientRect())
      })
    }

    if (newFilter !== filter) isFilterChange = true

    ctx.refresh(() => {
      filter = newFilter
      selectedProjectName = newSelected
    })
    requestAnimationFrame(() => animateCards())
  }

  window.addEventListener('popstate', onPopState)
  this.cleanup(() => window.removeEventListener('popstate', onPopState))

  let containerEl: HTMLDivElement | null = null
  let gridEl: HTMLDivElement | null = null
  let prevPositions = new Map<string, DOMRect>()
  let isFilterChange = false

  const animateCards = () => {
    if (!gridEl) return
    const wasFilterChange = isFilterChange
    isFilterChange = false
    gridEl.querySelectorAll<HTMLElement>('.project').forEach((card) => {
      const cardName = card.dataset.project
      const isSelected = selectedProjectName === cardName
      const targetOpacity = !selectedProjectName || isSelected ? 1 : 0

      if (cardName && prevPositions.has(cardName)) {
        // Existing card — FLIP to new position
        const prev = prevPositions.get(cardName)!
        const curr = card.getBoundingClientRect()
        const dx = prev.left - curr.left
        const dy = prev.top - curr.top
        if (Math.abs(dx) > 0.5 || Math.abs(dy) > 0.5) {
          animate(
            card,
            { x: [dx, 0], y: [dy, 0] },
            { type: 'spring', stiffness: 300, damping: 25 },
          )
        }
        animate(card, { opacity: targetOpacity }, { duration: 0.2 })
      } else if (wasFilterChange) {
        // Entering card — scale in
        animate(
          card,
          { scale: [0, 1], opacity: [0, targetOpacity] },
          { duration: 0.25 },
        )
      } else {
        // Exiting card or no position change — fade
        animate(card, { opacity: targetOpacity }, { duration: 0.2 })
      }
    })
    prevPositions.clear()
  }

  onProjectSelect.listen(ctx, (e) => {
    const { id } = e.detail
    if (id === selectedProjectName) {
      deselectProject()
    } else {
      selectProject(id)
    }
  })

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
    requestAnimationFrame(() => {
      animateCards()
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
    requestAnimationFrame(() => {
      animateCards()
      if (restoreY !== null) {
        getScrollParent(
          containerEl!.querySelector<HTMLElement>('.projects-container'),
        ).scrollTo({ top: restoreY, behavior: 'smooth' })
      }
    })
  }

  const setFilter = (newFilter: string) => {
    const overlays: HTMLElement[] = []

    if (gridEl) {
      // Capture positions of staying cards for FLIP
      prevPositions.clear()
      gridEl.querySelectorAll<HTMLElement>('.project').forEach((card) => {
        const name = card.dataset.project
        const project = projectManifest.find((p) => p.name === name)
        const isExiting =
          project && newFilter !== 'All' && !project.tags.includes(newFilter)
        if (isExiting) {
          // Clone exiting card as a fixed overlay so it can animate after DOM removal
          const rect = card.getBoundingClientRect()
          const clone = card.cloneNode(true) as HTMLElement
          clone.style.cssText = `position:fixed;left:${rect.left}px;top:${rect.top}px;width:${rect.width}px;height:${rect.height}px;margin:0;z-index:9999;pointer-events:none;`
          document.body.appendChild(clone)
          overlays.push(clone)
        } else if (name) {
          prevPositions.set(name, card.getBoundingClientRect())
        }
      })
    }

    isFilterChange = true
    history.pushState(null, '', `/projects${getFilterQuery(newFilter)}`)
    ctx.refresh(() => {
      filter = newFilter
      selectedProjectName = ''
    })

    requestAnimationFrame(() => {
      // FLIP staying cards and shrink overlays simultaneously
      animateCards()
      Promise.all(
        overlays.map((el) =>
          animate(el, { scale: 0, opacity: 0 }, { duration: 0.2 }),
        ),
      ).then(() => overlays.forEach((el) => el.remove()))
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
          ref={(el: HTMLDivElement) => {
            gridEl = el
          }}
        >
          {projects.map((project) => {
            const isSelected = selectedProject?.name === project.name
            return (
              <>
                <ProjectCard
                  project={project}
                  key={project.name}
                  isSelected={isSelected}
                  isHidden={!!selectedProjectName && !isSelected}
                />
              </>
            )
          })}
        </div>
      </div>
    )
  }
}

function* ProjectCard(
  this: Context<typeof ProjectCard, { project: Project }>,
  {
    project,
    isSelected = false,
    isHidden = false,
  }: { project: Project; isSelected?: boolean; isHidden?: boolean },
  ctx: Context<typeof ProjectCard, { project: Project }>,
): Generator<Element> {
  for ({ project, isSelected = false, isHidden = false } of this) {
    yield (
      <div
        class={clsx('project', {
          'project-expanded': isSelected,
        })}
        data-project={project.name}
        hidden={isHidden}
        onclick={() => onProjectSelect.dispatch(ctx, { id: project.name })}
      >
        <div class="project-icon">{project.icon}</div>
        <h3 class="project-title">{project.title}</h3>
        {isSelected && <div class="project-body">{project.body}</div>}
      </div>
    )
  }
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

function getScrollParent(el: HTMLElement | null): HTMLElement {
  while (el) {
    const { overflowY } = getComputedStyle(el)
    if (overflowY === 'auto' || overflowY === 'scroll') return el
    el = el.parentElement
  }
  return document.documentElement
}
