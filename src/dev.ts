import { dev } from './runtime.ts'
import { cwd } from './path.ts'

dev({
  browserImportMapPath: cwd() + '/../import_map.json',
})
