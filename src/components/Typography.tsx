import { type ReactNode } from 'react'

export function H2({ children }: { children: ReactNode }) {
  return <h2 className={`text-4xl mt-4`}>{children}</h2>
}

export function BodyText({ children }: { children: ReactNode }) {
  return <p className={`mt-4 max-w-screen-md`}>{children}</p>
}
