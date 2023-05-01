import * as serverEntry from './app/entry.server.tsx'
import * as route0 from './app/root.tsx'
import * as route1 from './app/routes/index.tsx'

export const entry = { module: serverEntry }
export const routes = {
  root: {
    id: 'root',
    module: route0,
    file: './app/root.tsx',
  },
  'routes/projects/$project': {
    id: 'routes/projects/$project',
    path: 'projects/:project',
    parentId: 'root',
    module: route1,
    file: './app/routes/index.tsx',
  },
  'routes/$section': {
    id: 'routes/$section',
    path: ':section',
    parentId: 'root',
    module: route1,
    file: './app/routes/index.tsx',
  },
  'routes/index': {
    id: 'routes/index',
    index: true,
    parentId: 'root',
    module: route1,
    file: './app/routes/index.tsx',
  },
}
export const assets = {
  entry: { imports: [], module: '/entry.client.js' },
  routes: {
    root: {
      id: 'root',
      imports: [],
      module: '/root.js',
      hasAction: 'action' in route0,
      hasLoader: 'loader' in route0,
      hasCatchBoundary: 'CatchBoundary' in route0,
      hasErrorBoundary: 'ErrorBoundary' in route0,
    },
    'routes/projects/$project': {
      id: 'routes/projects/$project',
      path: 'projects/:project',
      parentId: 'root',
      imports: [],
      module: '/routes/projects/$project.js',
      hasAction: 'action' in route1,
      hasLoader: 'loader' in route1,
      hasCatchBoundary: 'CatchBoundary' in route1,
      hasErrorBoundary: 'ErrorBoundary' in route1,
    },
    'routes/$section': {
      id: 'routes/$section',
      path: ':section',
      parentId: 'root',
      imports: [],
      module: '/routes/$section.js',
      hasAction: 'action' in route1,
      hasLoader: 'loader' in route1,
      hasCatchBoundary: 'CatchBoundary' in route1,
      hasErrorBoundary: 'ErrorBoundary' in route1,
    },
    'routes/index': {
      id: 'routes/index',
      index: true,
      parentId: 'root',
      imports: [],
      module: '/routes/index.js',
      hasAction: 'action' in route1,
      hasLoader: 'loader' in route1,
      hasCatchBoundary: 'CatchBoundary' in route1,
      hasErrorBoundary: 'ErrorBoundary' in route1,
    },
  },
}
export const future = { v2_errorBoundary: true }
