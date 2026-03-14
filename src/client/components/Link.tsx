import { type Child } from '@b9g/crank'

export default function Link({
  href,
  children,
  ...props
}: {
  href: string
  children: Child
  [key: string]: unknown
}) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:')
  const cls = `underline underline-offset-2`
  return isExternal ? (
    <a href={href} class={cls} {...props}>
      {children}
    </a>
  ) : (
    <a href={href} class={cls} {...props}>
      {children}
    </a>
  )
}
