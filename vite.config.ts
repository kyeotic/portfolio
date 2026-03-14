import { defineConfig } from 'vite'
import tailwind from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwind()],

  build: {
    outDir: 'dist/client',
  },

  ssr: {
    target: 'webworker',
  },
})
