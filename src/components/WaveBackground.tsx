/** @jsxImportSource @b9g/crank */

import { Context } from '@b9g/crank'

const BAR_WIDTH_PX = 14 // target width per bar for consistent density
const BAR_CONFIG = {
  maxScale: { min: 0.35, max: 0.95 },
  duration: { min: 3.4, max: 6.4 },
}

type Bar = { maxScale: number; duration: number; delay: number }

// Mulberry32 seeded PRNG
function seededRng(seed: number) {
  let s = seed
  return () => {
    s |= 0
    s = (s + 0x6d2b79f5) | 0
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const SEED = 42
const rng = seededRng(SEED)
const rand = (min: number, max: number) => min + rng() * (max - min)

function generateBars(count: number): Bar[] {
  const now = Date.now() / 1000

  return Array.from({ length: count }, () => {
    const duration = rand(BAR_CONFIG.duration.min, BAR_CONFIG.duration.max)
    return {
      maxScale: rand(BAR_CONFIG.maxScale.min, BAR_CONFIG.maxScale.max),
      duration,
      delay: -(now % (2 * duration)),
    }
  })
}

function barStyle(bar: Bar): string {
  return [
    'flex:1',
    'height:100%',
    'background:linear-gradient(to top, rgba(255,41,187,0.9) 0%, rgba(150,0,240,0.6) 40%, rgba(100,0,200,0.15) 75%, transparent 100%)',
    'filter:blur(22px)',
    'transform-origin:bottom center',
    `--min-scale:${bar.maxScale * 0.2}`,
    `--max-scale:${bar.maxScale}`,
    `animation:waveBar ${bar.duration}s ease-in-out ${bar.delay}s infinite alternate both`,
  ].join(';')
}

export function* WaveBackground(this: Context) {
  let bars = generateBars(Math.ceil(window.innerWidth / BAR_WIDTH_PX))

  let timer: ReturnType<typeof setTimeout> | undefined = undefined
  const onResize = () => {
    clearTimeout(timer)
    timer = setTimeout(() => {
      this.refresh(() => {
        bars = generateBars(Math.ceil(window.innerWidth / BAR_WIDTH_PX))
      })
    }, 150)
  }
  window.addEventListener('resize', onResize)

  for ({} of this) {
    yield (
      <div style="position:fixed;inset:0;z-index:-1;pointer-events:none;overflow:hidden">
        <div style="position:absolute;bottom:0;left:0;width:100%;display:flex;align-items:flex-end;height:65vh">
          {bars.map((bar, i) => (
            <div key={i} style={barStyle(bar)} />
          ))}
        </div>
      </div>
    )
  }

  clearTimeout(timer)
  window.removeEventListener('resize', onResize)
}
