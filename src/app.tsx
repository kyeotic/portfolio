import { WaveBackground } from './client/components/WaveBackground.js'
import { Router } from './client/components/Router.js'

export function App() {
  return (
    <>
      <WaveBackground />
      <div class="app-shell">
        <Router />
      </div>
    </>
  )
}
