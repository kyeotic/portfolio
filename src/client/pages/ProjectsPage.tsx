/** @jsxImportSource @b9g/crank */
import { projects } from '../components/projects/manifest.js'

export function ProjectsPage({
  filter = 'All',
  project,
}: {
  filter?: string
  project?: string
}) {
  const filtered = projects.filter(
    (p) => filter === 'All' || p.tags.includes(filter),
  )

  return (
    <div id="projects-root" data-filter={filter} data-project={project ?? ''}>
      <div class="projects-container w-full relative min-h-screen mt-12">
        <h2 class="text-4xl text-center font-bold py-4 px-8 w-full text-white bg-black/40">
          Projects
        </h2>
        <div class="project-grid p-4 max-w-5xl mx-auto text-white">
          {filtered.map((p) => (
            <div class="project">
              <div class="project-icon">{p.icon}</div>
              <h3 class="project-title">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
