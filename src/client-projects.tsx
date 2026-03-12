/** @jsxImportSource @b9g/crank */
import { renderer } from '@b9g/crank/dom'
import { Projects } from './components/projects/Projects.js'

const root = document.getElementById('projects-root')
if (root && root.parentElement) {
  renderer.render(<Projects />, root.parentElement)
}
