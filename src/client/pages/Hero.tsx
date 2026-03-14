/** @jsxImportSource @b9g/crank */

export function Hero() {
  return (
    <div class="h-full flex items-center justify-center">
      <HeroContent />
    </div>
  )
}

function HeroContent() {
  return (
    <div class="font-light leading-snug w-11/12 max-w-3xl bg-black/40 p-8 md:p-12 text-white text-[7vw] sm:text-[5vw] md:text-[4vw] lg:text-[3.5vw]">
      <div class="flex justify-center mb-6">
        <img
          src="/logo.svg"
          alt="Tim Kye logo"
          class="w-28 md:w-36 rounded"
        />
      </div>
      <h1 class="mb-2">
        My name is{' '}
        <span class="font-semibold" style={{ color: 'rgb(255, 41, 187)' }}>
          Tim Kye
        </span>
      </h1>

      <p>
        I like to work with <span class="text-[#f49e58]">TS/JS</span>,{' '}
        <span class="text-[#a9d642]">Kotlin</span>, and{' '}
        <span class="text-[#24b2c1]">Clouds</span>
      </p>
    </div>
  )
}
