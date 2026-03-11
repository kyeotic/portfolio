import Hero from '../components/projects/Hero.js'

export default function Page() {
  return (
    <div className="h-full flex items-center justify-center">
      <Hero />
    </div>
  )
}

function Hero() {
  return (
    <div className="font-light leading-snug w-11/12 max-w-3xl bg-black/40 p-8 md:p-12 text-white text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw]">
      <h1 className="mb-2">
        My name is{' '}
        <span className="font-semibold" style={{ color: 'rgb(255, 41, 187)' }}>
          Tim Kye
          <img
            src="/logo.svg"
            alt="Tim Kye logo"
            className="inline-block ml-6 w-28 md:w-36 rounded"
          />
        </span>
      </h1>

      <p>
        I like to work with <span className="text-[#f49e58]">TS/JS</span>,{' '}
        <span className="text-[#a9d642]">Kotlin</span>, and{' '}
        <span className="text-[#24b2c1]">Clouds</span>
      </p>
    </div>
  )
}

export const getConfig = async () => {
  return {
    render: 'static',
  } as const
}
