export default function Hero() {
  return (
    <div
      className={`font-light leading-normal w-11/12 bg-black/40 p-8 text-[5vmax] md:text-[4vmax]`}
    >
      <h1>
        My name is{' '}
        <span className={`font-light`} style={{ color: 'rgb(255, 41, 187)' }}>
          Tim Kye
        </span>
      </h1>
      <span>
        I like to work with <span className={`text-[#f49e58]`}>TS/JS</span>,{' '}
        <span className={`text-[#a9d642]`}>Kotlin</span>, and{' '}
        <span className={`text-[#24b2c1]`}>Clouds</span>
      </span>
    </div>
  )
}
