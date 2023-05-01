import { useRoutes } from 'react-router-dom'

import Home from './home/HomePage.tsx'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/projects/:project',
    element: <Home />,
  },
  {
    path: '/:section',
    element: <Home />,
  },
]

export default function App() {
  return useRoutes(routes)
}
