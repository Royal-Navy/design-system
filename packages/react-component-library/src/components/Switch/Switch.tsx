import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { getKey } from '../../helpers'
import { SwitchType, OptionType } from '../../types/Switch'

function getActiveOption(options: OptionType[], value: string) {
  const initial: OptionType | string = options.find(
    item => item.value === value
  )

  return (initial && initial.label) || null
}

export const Switch: React.FC<SwitchType> = ({
  className,
  label,
  name,
  onChange,
  options = [],
  size = 'regular',
  value,
}) => {
  const [active, setActive] = useState(getActiveOption(options, value))
  const id = uuidv4()

  return (
    <fieldset
      className={`rn-switch rn-switch--${size} ${className}`}
      data-testid="switch-wrapper"
    >
      {label && (
        <legend className="rn-switch__legend" data-testid="switch-legend">
          {label}
        </legend>
      )}
      <div className="rn-switch__container">
        {options.map(({ label: optionLabel, value: optionValue }) => (
          <label
            key={getKey('switch-option', label)}
            className={`rn-switch__option ${
              active === optionLabel ? 'is-active' : ''
            }`}
            htmlFor={`${id}-${optionLabel}`}
            data-testid="switch-option"
          >
            {optionLabel}
            <input
              data-testid="switch-input"
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
