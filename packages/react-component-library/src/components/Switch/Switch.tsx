import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { getKey } from '../../helpers'
import { SWITCH_SIZE } from '.'

function getActiveOption(options: SwitchOptionProps[], value: string) {
  const initial: SwitchOptionProps | string = options.find(
    (item) => item.value === value
  )

  return (initial && initial.label) || null
}

export interface SwitchOptionProps {
  label: string
  value: string
}

export interface SwitchProps {
  name?: string
  value?: string
  label?: string
  className?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>, value?: string) => void
  options: SwitchOptionProps[]
  size?:
    | typeof SWITCH_SIZE.LARGE
    | typeof SWITCH_SIZE.SMALL
    | typeof SWITCH_SIZE.REGULAR
}

export const Switch: React.FC<SwitchProps> = ({
  className,
  label,
  name,
  onChange,
  options = [],
  size = SWITCH_SIZE.REGULAR,
  value,
}) => {
  const [active, setActive] = useState(null)

  useEffect(() => {
    setActive(getActiveOption(options, value))
  }, [value])

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
            key={getKey('switch-option', optionLabel)}
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
              onClick={(event) => {
                setActive(optionLabel)
                onChange(event, optionValue)
              }}
            />
          </label>
        ))}
      </div>
    </fieldset>
  )
}

Switch.displayName = 'Switch'
