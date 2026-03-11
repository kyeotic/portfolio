import Projects from '../../components/projects/Projects.js'

export default function Page({ query }: { query?: string }) {
  const filter = new URLSearchParams(query ?? '').get('type') ?? 'All'

  return (
    <div className="h-full overflow-y-auto">
      <Projects filter={filter} />
    </div>
  )
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const
}
