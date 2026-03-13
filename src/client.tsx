/** @jsxImportSource @b9g/crank */
import './styles.css'
import { renderer } from '@b9g/crank/dom'
import { WaveBackground } from './components/WaveBackground.js'
import { Projects } from './components/projects/Projects.js'

renderer.hydrate(<WaveBackground />, document.getElementById('wave-bg')!)

const projectsRoot = document.getElementById('projects-root')
if (projectsRoot && projectsRoot.parentElement) {
  renderer.render(<Projects />, projectsRoot.parentElement)
}
