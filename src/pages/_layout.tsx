import '../styles.css'
import type { ReactNode } from 'react'
import WaveBackground from '../components/WaveBackground.js'
import Navbar from '../components/Navbar.js'

type RootLayoutProps = { children: ReactNode }

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col h-dvh">
      <title>Tim Kye | Portfolio</title>
      <meta name="description" content="Tim Kye's portfolio — full stack developer" />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="stylesheet" href="/css/app.css" />
      <link rel="stylesheet" href="/css/projects.css" />
      <WaveBackground />
      <div className="flex-1 overflow-hidden min-h-0">
        <main className="h-full">{children}</main>
      </div>
      <Navbar />
    </div>
  )
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
