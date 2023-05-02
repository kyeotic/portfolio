import { tw } from 'tw'

export default function Hero() {
  return (
    <div id="jumbotron">
      <h1>
        My name is <span className="name">Tim Kye</span>
      </h1>
      <span className="subtitle">
        I like to work with <span className={tw(`text-[#f49e58]`)}>TS/JS</span>,{' '}
        <span className={tw(`text-[#a9d642]`)}>Kotlin</span>, and{' '}
        <span className={tw(`text-[#24b2c1]`)}>Clouds</span>
      </span>
    </div>
  )
}
