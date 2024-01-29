import { ReactNode } from 'react'
import { Link as RouterLink } from '@remix-run/react'

export default function Link({
  href,
  children,
  ...props
}: {
  href: string
  children: ReactNode
}) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  const className = `underline underline-offset-2`
  return isExternal ? (
    <a href={href} className={className} {...props}>
      {children}
    </a>
  ) : (
    <RouterLink to={href} className={className} {...props}>
      {children}
    </RouterLink>
  )
}
