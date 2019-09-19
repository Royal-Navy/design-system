import React, { useState } from 'react'
import uuid from 'uuid'

import { SwitchType, OptionType } from '../../types/Switch'

const Switch: React.FC<SwitchType> = ({
  name = '',
  value = '',
  label = '',
  className = '',
  onChange = (previous, active) => {},
  options = [],
  size = 'regular',
}) => {
  let initial: OptionType | string = options.find(item => item.value === value)
  initial = (initial && initial.label) || null

  const [active, setActive] = useState(initial)

  const id = uuid()

  function getOption(name: string) {
    return options.find(item => item.label === name)
  }

  return (
    <fieldset
      className={`rn-switch rn-switch--${size} ${className}`}
      data-testid="wrapper"
    >
      {label && (
        <legend className="rn-switch__legend" data-testid="legend">
          {label}
        </legend>
      )}
      <div className="rn-switch__container">
        {options.map(({ label, value }) => (
          <label
            key={uuid()}
            className={`rn-switch__option ${
              active === label ? 'is-active' : ''
            }`}
            data-label={label}
            htmlFor={`${id}-${label}`}
            data-testid="option"
          >
            <input
              id={`${id}-${label}`}
              name={name || id}
              value={value}
              type="radio"
              className="rn-switch__radio"
              onClick={() => {
                const previous = active
                setActive(label)
                onChange(getOption(previous), getOption(label))
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
