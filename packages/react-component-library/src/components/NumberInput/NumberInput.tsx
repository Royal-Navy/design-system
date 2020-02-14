import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import { EndAdornment } from './EndAdornment'
import { Input } from './Input'
import { StartAdornment } from './StartAdornment'
import { useFocus } from './useFocus'

export interface NumberInputProps {
  autoFocus?: boolean
  className?: string
  isDisabled?: boolean
  footnote?: string
  id?: string
  label?: string
  max?: number
  min?: number
  name: string
  onBlur?: (event: React.FormEvent<Element>) => void
  onChange: (event: any) => void
  placeholder?: string
  step?: number
  value?: number
  startAdornment?: React.ReactNode | string
}

interface CalculateNewValue {
  currentValue?: number
  newInputValue: string
  max?: number
  min?: number
}

export function calculateNewValue({
  currentValue,
  newInputValue = '',
  max,
  min,
}: CalculateNewValue): number {
  const newValue = newInputValue.length > 0 ? parseInt(newInputValue, 10) : null

  if (
    Number.isNaN(newValue) ||
    (min && newValue < min) ||
    (max && newValue > max)
  ) {
    return currentValue
  }

  return newValue
}

export const NumberInput: React.FC<NumberInputProps> = ({
  className,
  isDisabled = false,
  footnote,
  id = uuid(),
  label,
  max,
  min,
  name,
  onBlur,
  onChange,
  placeholder = '',
  step = 1,
  value,
  startAdornment,
  ...rest
}) => {
  const { hasFocus, onInputBlur, onInputFocus } = useFocus(onBlur)

  const hasContent = value !== null && value !== undefined

  const classes = classNames('rn-numberinput', className, {
    'has-focus': hasFocus,
    'has-content': hasContent,
  })

  return (
    <div className={classes} data-testid="number-input-container">
      <div className="rn-numberinput__outer-wrapper">
        <StartAdornment>{startAdornment}</StartAdornment>

        <Input
          isDisabled={isDisabled}
          id={id}
          label={label}
          max={max}
          min={min}
          name={name}
          onChange={onChange}
          onInputBlur={onInputBlur}
          onInputFocus={onInputFocus}
          placeholder={placeholder}
          value={value}
          {...rest}
        />

        <EndAdornment
          max={max}
          min={min}
          name={name}
          onChange={onChange}
          step={step}
          value={value}
        />
      </div>
      {footnote && (
        <small
          className="rn-numberinput__footnote"
          data-testid="number-input-footnote"
        >
          {footnote}
        </small>
      )}
    </div>
  )
}

NumberInput.displayName = 'NumberInput'
