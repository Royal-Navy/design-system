import React, { useState } from 'react'
import uuid from 'uuid'

import { SwitchType, OptionType } from '../../types/Switch'

const Switch: React.FC<SwitchType> = ({
  label,
  name,
  onChange,
  options = [],
  value,
  className,
  size = 'regular',
}) => {
  let initial: OptionType | string = options.find(item => item.value === value)
  initial = (initial && initial.label) || null

  const [active, setActive] = useState(initial)

  const id = uuid()

  function getOption(optionLabel: string) {
    return options.find(item => item.label === optionLabel)
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
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <label
            key={uuid()}
            className={`rn-switch__option ${
              active === optionLabel ? 'is-active' : ''
            }`}
            data-label={optionLabel}
            htmlFor={`${id}-${optionLabel}`}
            data-testid="option"
          >
            <input
              id={`${id}-${optionLabel}`}
              name={name || id}
              value={optionValue}
              type="radio"
              className="rn-switch__radio"
              onClick={event => {
                setActive(optionLabel)
                onChange(event)
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
