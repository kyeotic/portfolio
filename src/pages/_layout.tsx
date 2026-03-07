import '../styles.css'
import type { ReactNode } from 'react'

type RootLayoutProps = { children: ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="h-dvh overflow-hidden">
      <title>Tim Kye | Portfolio</title>
      <meta name="description" content="Tim Kye's portfolio — full stack developer" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/app.css" />
      <link rel="stylesheet" href="/css/projects.css" />
      <main className="h-full">{children}</main>
    </div>
  )
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
