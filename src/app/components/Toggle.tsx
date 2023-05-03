import { tw } from 'tw'
import classnames from 'npm:classnames'

export default function Toggle({
  options,
  value,
  onChange,
  className,
}: {
  options: Array<{ value: string; label: string }>
  className?: string
  value?: string
  onChange: (val: string) => void
}): JSX.Element {
  const active = tw(`bg-white/65 font-black`)
  return (
    <div
      className={`${className ? ` ${className}` : ''} ${tw(
        `flex items-center justify-center flex-wrap`
      )}`}
    >
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={classnames(
            tw(`flex-initial my-2 mx-4 hover:bg-white/25`),
            { [active]: option.value === value }
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
