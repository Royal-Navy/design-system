import React, { Children, useState } from 'react'

interface SwitchProps {
  label: string
  className?: string
  onChange?: (active: number) => void
  options: []
}

const Switch: React.FC<SwitchProps> = ({
  label = '',
  className = '',
  onChange = active => {},
  options = [],
}) => {
  const [active, setActive] = useState(null)

  return (
    <label className={`rn-switch ${className}`}>
      <div className="rn-switch__container">
        {options.map(item => (
          <button
            className={`rn-switch__btn ${active === id ? 'is-active' : ''}`}
            onClick={() => {
              //
            }}
          >
            Example
          </button>
        ))}
      </div>
      <span className="rn-switch__label">{label}</span>
    </label>
  )
}

Switch.displayName = 'Switch'

export default Switch
