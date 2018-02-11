import React from 'react'

import './toggle.css'

export default ({ options, value, onChange, className }) => (
  <div className={`toggle-container${className ? ` ${className}` : ''}`}>
    {options.map(option => (
      <button
        key={option.value}
        onClick={() => onChange(option.value)}
        className={`toggle-btn${option.value === value ? ' active' : ''}`}
      >
        {option.label}
      </button>
    ))}
  </div>
)
