/** @jsxImportSource @b9g/crank */
import './styles.css'
import { renderer } from '@b9g/crank/dom'
import { WaveBackground } from './components/WaveBackground.js'
import { Router } from './components/Router.js'

renderer.hydrate(<WaveBackground />, document.getElementById('wave-bg')!)
renderer.hydrate(<Router />, document.querySelector('.app-shell')!)
