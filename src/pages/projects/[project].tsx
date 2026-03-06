import HomePage from '../../components/HomePage.js'

export default function Page() {
  return <HomePage />
}

export const getConfig = async () => {
  return {
    render: 'dynamic',
  } as const
}
