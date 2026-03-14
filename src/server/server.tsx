import { renderer } from '@b9g/crank/html'

import { App } from '../app.tsx'

export async function render() {
  const html = await renderer.render(<App />)
  return { html }
}
