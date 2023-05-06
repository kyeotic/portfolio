import { tw } from 'tw'

export default function Hero() {
  return (
    <div
      className={tw(
        `font-light leading-normal w-11/12 bg-black/40 p-8 text-[5vmax] md:text-[4vmax]`
      )}
    >
      <h1>
        My name is{' '}
        <span
          className={tw(`font-light`)}
          style={{ color: 'rgb(255, 41, 187)' }}
        >
          Tim Kye
        </span>
      </h1>
      <span>
        I like to work with <span className={tw(`text-[#f49e58]`)}>TS/JS</span>,{' '}
        <span className={tw(`text-[#a9d642]`)}>Kotlin</span>, and{' '}
        <span className={tw(`text-[#24b2c1]`)}>Clouds</span>
      </span>
    </div>
  )
}
