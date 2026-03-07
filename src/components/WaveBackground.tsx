'use client'

// Each bar has its own max height and animation timing for independent movement
const BARS: Array<{ maxScale: number; duration: number; delay: number }> = [
  { maxScale: 0.42, duration: 4.2, delay: 0.0 },
  { maxScale: 0.68, duration: 5.6, delay: 1.2 },
  { maxScale: 0.38, duration: 3.8, delay: 2.1 },
  { maxScale: 0.78, duration: 6.4, delay: 0.5 },
  { maxScale: 0.55, duration: 4.6, delay: 2.8 },
  { maxScale: 0.88, duration: 5.2, delay: 1.4 },
  { maxScale: 0.44, duration: 3.6, delay: 3.5 },
  { maxScale: 0.72, duration: 6.0, delay: 0.7 },
  { maxScale: 0.95, duration: 4.0, delay: 2.4 },
  { maxScale: 0.52, duration: 5.4, delay: 1.7 },
  { maxScale: 0.82, duration: 3.4, delay: 3.1 },
  { maxScale: 0.62, duration: 6.2, delay: 0.9 },
  { maxScale: 0.40, duration: 4.4, delay: 2.6 },
  { maxScale: 0.74, duration: 5.0, delay: 1.9 },
  { maxScale: 0.58, duration: 5.8, delay: 0.3 },
  { maxScale: 0.48, duration: 3.8, delay: 3.3 },
]

export default function WaveBackground() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full flex items-end" style={{ height: '65vh' }}>
        {BARS.map((bar, i) => (
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
