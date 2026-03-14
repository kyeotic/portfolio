import { type Child } from '@b9g/crank'

export default function Panel({ children }: { children: Child }) {
  return <div class={`w-full text-white p-8 bg-black/40`}>{children}</div>
}
