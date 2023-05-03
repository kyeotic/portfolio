import { serve } from 'https://deno.land/std@0.176.0/http/server.ts'
import { type Context, createServer } from 'ultra/server.ts'
import Root from './root.tsx'

// Twind
import { createHeadInsertionTransformStream } from 'ultra/stream.ts'
import { stringify, tw } from './twind/twind.ts'

// React Router
import { StaticRouter } from 'react-router-dom/server'

const server = await createServer({
  importMapPath: import.meta.resolve('../importMap.json'),
  browserEntrypoint: import.meta.resolve('./client.tsx'),
})

function ServerApp({ context }: { context: Context }) {
  const requestUrl = new URL(context.req.url)

  return (
    <StaticRouter location={new URL(context.req.url).pathname}>
      <Root />
    </StaticRouter>
  )
}

server.get('*', async (context) => {
  /**
   * Render the request
   */
  let result = await server.render(<ServerApp context={context} />)

  // Inject the style tag into the head of the streamed response
  const stylesInject = createHeadInsertionTransformStream(() => {
    if (Array.isArray(tw.target)) {
      return Promise.resolve(stringify(tw.target))
    }

    throw new Error('Expected tw.target to be an instance of an Array')
  })

  result = result.pipeThrough(stylesInject)

  return context.body(result, 200, {
    'content-type': 'text/html; charset=utf-8',
  })
})
if (import.meta.main) {
  serve(server.fetch)
}
export default server
