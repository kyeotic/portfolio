import hydrate from 'ultra/hydrate.js'
import Root from './root.tsx'

// React Router
import { BrowserRouter } from 'react-router-dom'

function ClientApp() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )
}

hydrate(document, <ClientApp />)
