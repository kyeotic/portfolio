import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import crankPlugin from 'eslint-plugin-crank'

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: {
      crank: crankPlugin,
    },
    rules: {
      ...crankPlugin.configs.recommended.rules,
    },
  },
)
