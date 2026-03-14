import { type Child } from '@b9g/crank'

export function H2({ children }: { children: Child }) {
  return <h2 class={`text-4xl mt-4`}>{children}</h2>
}

export function BodyText({ children }: { children: Child }) {
  return <p class={`mt-4 max-w-screen-md`}>{children}</p>
}
