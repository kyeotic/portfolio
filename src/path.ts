import * as path from 'https://deno.land/std@0.154.0/path/mod.ts'

export function cwd() {
  return path.resolve(Deno.cwd(), 'src')
}
