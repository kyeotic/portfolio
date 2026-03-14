import { Hono } from 'hono'

type App = { Bindings: Env }
const app = new Hono<App>()

app.get('*', async (c) => {
  const url = new URL(c.req.url)

  // serve static assets
  if (url.pathname.startsWith('/assets/')) {
    return c.env.ASSETS.fetch(c.req.raw)
  }

  const { render } = await import('./server.js')

  const { html } = await render()

  let template = await c.env.ASSETS.fetch(new Request('/index.html')).then(
    (r) => r.text(),
  )

  template = template.replace('<!--app-html-->', html)

  return c.html(template)
})

export default app
