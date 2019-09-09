import React, { useState } from 'react'
import uuid from 'uuid'

import { SwitchType } from '../../types/Switch'

const Switch: React.FC<SwitchType> = ({
  label = '',
  className = '',
  onChange = (previous, active) => {},
  options = [],
  size = 'regular',
}) => {
  const [active, setActive] = useState(null)
  const id = uuid()

  function getOption(name: string) {
    return options.find(item => item.name === name)
  }

  return (
    <fieldset className={`rn-switch rn-switch--${size} ${className}`}>
      {label && <legend className="rn-switch__legend">{label}</legend>}
      <div className="rn-switch__container">
        {options.map(({ name, value }) => (
          <label
            key={uuid()}
            className={`rn-switch__option ${
              active === name ? 'is-active' : ''
            }`}
            data-name={name}
            htmlFor={`switch-${id}-${name}`}
          >
            <input
              id={`switch-${id}-${name}`}
              name={label || id}
              value={value}
              type="radio"
              className="rn-switch__radio"
              onClick={() => {
                const previous = active
                setActive(name)
                onChange(getOption(previous), getOption(name))
              }}
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

Switch.displayName = 'Switch'

export default Switch
