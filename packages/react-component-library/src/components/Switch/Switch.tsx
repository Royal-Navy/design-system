import React, { useState } from 'react'

import { SwitchType } from '../../types/Switch'

const Switch: React.FC<SwitchType> = ({
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
