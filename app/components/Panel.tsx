import { type ReactNode } from 'react'

export default function Panel({ children }: { children: ReactNode }) {
  return <div className={`w-full text-white p-8 bg-black/40`}>{children}</div>
}
