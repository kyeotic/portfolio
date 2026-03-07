'use client'

import { useState, useEffect } from 'react'

const BAR_COUNT = 16
const BAR_CONFIG = {
  maxScale: { min: 0.35, max: 0.95 },
  duration: { min: 3.4, max: 6.4 },
  delay: { max: 3.5 },
}

type Bar = { maxScale: number; duration: number; delay: number }

function rand(min: number, max: number) {
  return min + Math.random() * (max - min)
}

function generateBars(): Bar[] {
  return Array.from({ length: BAR_COUNT }, () => ({
    maxScale: rand(BAR_CONFIG.maxScale.min, BAR_CONFIG.maxScale.max),
    duration: rand(BAR_CONFIG.duration.min, BAR_CONFIG.duration.max),
    delay: rand(0, BAR_CONFIG.delay.max),
  }))
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
