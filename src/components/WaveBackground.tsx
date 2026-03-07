'use client'

import { useState, useEffect } from 'react'

const BAR_COUNT = 16
const BAR_CONFIG = {
  maxScale: { min: 0.35, max: 0.95 },
  duration: { min: 3.4, max: 6.4 },
  delay: { max: 3.5 },
}

type Bar = { maxScale: number; duration: number; delay: number }

// Mulberry32 seeded PRNG
function seededRng(seed: number) {
  let s = seed
  return () => {
    s |= 0; s = s + 0x6d2b79f5 | 0
    let t = Math.imul(s ^ s >>> 15, 1 | s)
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t
    return ((t ^ t >>> 14) >>> 0) / 4294967296
  }
}

const SEED = 42

function generateBars(): Bar[] {
  const rng = seededRng(SEED)
  const rand = (min: number, max: number) => min + rng() * (max - min)
  const now = Date.now() / 1000

  return Array.from({ length: BAR_COUNT }, () => {
    const duration = rand(BAR_CONFIG.duration.min, BAR_CONFIG.duration.max)
    return {
      maxScale: rand(BAR_CONFIG.maxScale.min, BAR_CONFIG.maxScale.max),
      duration,
      delay: -(now % (2 * duration)),
    }
  })
}

export default function WaveBackground() {
  const [bars, setBars] = useState<Bar[] | null>(null)

  useEffect(() => {
    setBars(generateBars())
  }, [])

  if (!bars) return null

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full flex items-end" style={{ height: '65vh' }}>
        {bars.map((bar, i) => (
          <div
            key={i}
            className="flex-1"
            style={
              {
                height: '100%',
                background:
                  'linear-gradient(to top, rgba(255,41,187,0.9) 0%, rgba(150,0,240,0.6) 40%, rgba(100,0,200,0.15) 75%, transparent 100%)',
                filter: 'blur(22px)',
                transformOrigin: 'bottom center',
                '--min-scale': bar.maxScale * 0.2,
                '--max-scale': bar.maxScale,
                animation: `waveBar ${bar.duration}s ease-in-out ${bar.delay}s infinite alternate both`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>
    </div>
  )
}
