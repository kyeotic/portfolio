/** @jsxImportSource @b9g/crank */
import { renderer } from '@b9g/crank/html'
import { Hono } from 'hono'

import { Layout } from './components/Layout.js'
import { Hero } from './pages/Hero.js'
import { About } from './pages/About.js'
import { Kyeosis } from './pages/Kyeosis.js'
import { ProjectsPage } from './pages/ProjectsPage.js'

const clientUrl = '/assets/client.js'

const app = new Hono()

app.get('/', async (c) =>
  c.html(
    '<!DOCTYPE html>' +
      (await renderer.render(
        <Layout title="Home" clientUrls={[clientUrl]} path="/">
          <Hero />
        </Layout>,
      )),
  ),
)

app.get('/about', async (c) =>
  c.html(
    '<!DOCTYPE html>' +
      (await renderer.render(
        <Layout title="About" clientUrls={[clientUrl]} path="/about">
          <About />
        </Layout>,
      )),
  ),
)

app.get('/kyeosis', async (c) =>
  c.html(
    '<!DOCTYPE html>' +
      (await renderer.render(
        <Layout title="Kyeosis" clientUrls={[clientUrl]} path="/kyeosis">
          <Kyeosis />
        </Layout>,
      )),
  ),
)

app.get('/projects', async (c) => {
  const filter = c.req.query('type') ?? 'All'
  return c.html(
    '<!DOCTYPE html>' +
      (await renderer.render(
        <Layout
          title="Projects"
          clientUrls={[clientUrl]}
          path="/projects"
        >
          <ProjectsPage filter={filter} />
        </Layout>,
      )),
  )
})

app.get('/projects/:project', async (c) => {
  const project = c.req.param('project')
  const filter = c.req.query('type') ?? 'All'
  return c.html(
    '<!DOCTYPE html>' +
      (await renderer.render(
        <Layout
          title="Projects"
          clientUrls={[clientUrl]}
          path="/projects"
        >
          <ProjectsPage filter={filter} project={project} />
        </Layout>,
      )),
  )
})

export default app
