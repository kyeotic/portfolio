import hydrate from 'ultra/hydrate.js'
import Root from './src/root.tsx'

// React Router
import { BrowserRouter } from 'react-router-dom'

function ClientApp() {
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  )
}

// Bad redirects can send us here with an ugly url
// if (window.location && window.location.pathname === '/index.html') {
//   navigate('/', { replace: true })
// }

hydrate(document, <ClientApp />)
