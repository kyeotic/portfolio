import { stringify } from './twind.ts'

export default function TwindStyle() {
  return <style id="__twind">{stringify()}</style>
}
