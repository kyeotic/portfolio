import React from 'react'
import { useRoutes } from 'raviger'

import Home from './home/HomePage.js'

const routes = {
  '/': () => <Home />,
  '/:section': ({ section }) => <Home section={section} />,
  '/projects/:project': ({ project }) => (
    <Home section="projects" project={project} />
  )
}

export default function App() {
  return useRoutes(routes)
}
