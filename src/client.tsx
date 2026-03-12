/** @jsxImportSource @b9g/crank */
import { renderer } from '@b9g/crank/dom'
import { WaveBackground } from './components/WaveBackground.js'

renderer.hydrate(<WaveBackground />, document.getElementById('wave-bg')!)
