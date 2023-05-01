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
  return (
    <div className={`toggle-container${className ? ` ${className}` : ''}`}>
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`btn toggle-btn${option.value === value ? ' active' : ''}`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
