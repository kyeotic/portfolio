import { ReactNode } from 'react'
import { Link as WakuLink } from 'waku'

export default function Link({
  href,
  children,
  ...props
}: {
  href: string
  children: ReactNode
  [key: string]: unknown
}) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  const className = `underline underline-offset-2`
  return isExternal ? (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ) : (
    <WakuLink to={href} className={className} {...(props as Record<string, unknown>)}>
      {children}
    </WakuLink>
  )
}
