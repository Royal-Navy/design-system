import React, { useState } from 'react'

interface Option {
  name: string
  value: string
}

interface SwitchProps {
  label: string
  className?: string
  onChange?: (previous: Option, active: Option) => void
  options: Option[]
}

const Switch: React.FC<SwitchProps> = ({
  label = '',
  className = '',
  onChange = (previous, active) => {},
  options = [],
}) => {
  const [active, setActive] = useState(null)

  function getOption(name: string) {
    return options.find(item => item.name === name)
  }

  return (
    <fieldset className={`rn-switch ${className}`}>
      <legend className="rn-switch__label">{label}</legend>
      <div className="rn-switch__container">
        {options.map(({ name, value }) => (
          <input
            name={label}
            data-name={name}
            value={value}
            type="radio"
            className={`rn-switch__option ${
              active === name ? 'is-active' : ''
            }`}
            onClick={() => {
              const previous = active
              setActive(name)
              onChange(getOption(previous), getOption(name))
            }}
          />
        ))}
      </div>
    </fieldset>
  )
}

Switch.displayName = 'Switch'

export default Switch
