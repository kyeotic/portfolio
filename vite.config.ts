import { defineConfig } from 'vite'
import { cloudflare } from '@cloudflare/vite-plugin'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
    jsxImportSource: '@b9g/crank',
  },
  plugins: [cloudflare()],
  build: {
    rollupOptions: {
      input: {
        client: 'src/client.tsx',
        'client-projects': 'src/client-projects.tsx',
      },
      output: {
        dir: 'public',
        entryFileNames: 'assets/[name].js',
      },
    },
  },
})
