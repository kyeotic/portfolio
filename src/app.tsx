import { WaveBackground } from './client/components/WaveBackground.js'
import { Router } from './client/components/Router.js'
import { Navbar } from './client/components/Navbar.js'

export function App() {
  return (
    <>
      <WaveBackground />
      <div class="app-shell">
        <main class="app-content">
          <Router />
        </main>
        <Navbar />
      </div>
    </>
  )
}
