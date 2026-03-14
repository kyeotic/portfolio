function isActive(path: string, href: string): boolean {
  if (href === '/') return path === '/'
  return path.startsWith(href)
}

export function Navbar({ path = '/' }: { path?: string }) {
  const tabs = [
    { label: 'Main', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
  ]
  return (
    <nav id="navbar" class="navbar" data-path={path}>
      {tabs.map((tab) => (
        <a
          href={tab.href}
          class={`nav-tab ${isActive(path, tab.href) ? 'active' : ''}`}
        >
          {tab.label}
        </a>
      ))}
    </nav>
  )
}
