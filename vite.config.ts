import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: '@b9g/crank',
  },
  plugins: [tailwindcss(), cloudflare()],
  build: {
    rollupOptions: {
      input: {
        client: 'src/client.tsx',
      },
    },
  },
})
