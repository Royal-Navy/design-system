import React, { FormEvent, useRef } from 'react'

import { calculateNewValue } from './NumberInput'

interface InputProps {
  isDisabled?: boolean
  id?: string
  label?: string
  max?: number
  min?: number
  name: string
  onChange: (event: any) => void
  onInputBlur: (event: FormEvent) => void
  onInputFocus: () => void
  placeholder?: string
  value?: number
}

export const Input: React.FC<InputProps> = ({
  isDisabled = false,
  id,
  label,
  max,
  min,
  name,
  onChange,
  onInputBlur,
  onInputFocus,
  placeholder = '',
  value,
  ...rest
}) => {
  const hasLabel = label && label.length
  const inputRef = useRef(null)
  const displayValue =
    value === null || value === undefined || Number.isNaN(value) ? '' : value

  const onInputChange = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const target = event.currentTarget as HTMLInputElement
    const newValue = calculateNewValue({
      currentValue: value,
      newInputValue: target.value,
      min,
      max,
    })

    onChange({
      target: {
        name,
        value: newValue,
      },
    })
  }

  return (
    <div
      className="rn-numberinput__input-wrapper"
      data-testid="number-input-wrapper"
    >
      {hasLabel && (
        <label
          className="rn-numberinput__label"
          data-testid="number-input-label"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      <input
        className="rn-numberinput__input"
        data-testid="number-input-input"
        disabled={isDisabled}
        id={id}
        name={name}
        onBlur={onInputBlur}
        onChange={onInputChange}
        onFocus={onInputFocus}
        placeholder={placeholder}
        ref={inputRef}
        type="text"
        value={displayValue}
        {...rest}
      />
    </div>
  )
}

Input.displayName = 'Input'
