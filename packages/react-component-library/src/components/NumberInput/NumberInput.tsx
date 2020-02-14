import React, { useRef } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

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
  const inputRef = useRef(null)
  const { hasFocus, onInputBlur, onInputFocus } = useFocus(onBlur)

  const mutateValue = (newValue: number) => {
    onChange({
      target: {
        name,
        value: newValue,
      },
    })
  }

  const inputChange = (event: React.SyntheticEvent) => {
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

  const clickIncrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget
    target.blur()

    const newValue = value ? value + step : step
    if (!max || newValue <= max) {
      mutateValue(newValue)
    }
  }

  const clickDecrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    const target = event.currentTarget
    target.blur()

    const newValue = value ? value - step : -step
    if (!min || newValue >= min) mutateValue(newValue)
  }

  const EndAdornment = (
    <div className="rn-numberinput__controls">
      <button
        data-testid="number-input-increase"
        type="button"
        className="rn-numberinput__increase"
        onClick={clickIncrease}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7">
          <path
            fill="#6F798A"
            fillRule="evenodd"
            d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"
          />
        </svg>
      </button>
      <button
        data-testid="number-input-decrease"
        type="button"
        className="rn-numberinput__decrease"
        onClick={clickDecrease}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7">
          <path
            fill="#6F798A"
            fillRule="evenodd"
            d="M5.66 4.49L9.19.95a1 1 0 1 1 1.42 1.41L6.36 6.61a1 1 0 0 1-1.41 0L.71 2.36A1 1 0 1 1 2.12.95l3.54 3.54z"
          />
        </svg>
      </button>
    </div>
  )

  const hasContent = value !== null && value !== undefined
  const hasLabel = label && label.length

  const classes = classNames('rn-numberinput', className, {
    'has-focus': hasFocus,
    'has-content': hasContent,
  })

  const displayValue =
    value === null || value === undefined || Number.isNaN(value) ? '' : value

  return (
    <div className={classes} data-testid="number-input-container">
      <div className="rn-numberinput__outer-wrapper">
        {startAdornment && (
          <div
            className="rn-numberinput__start-adornment"
            data-testid="number-input-start-adornment"
          >
            {startAdornment}
          </div>
        )}
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
            onChange={inputChange}
            onFocus={onInputFocus}
            placeholder={placeholder}
            ref={inputRef}
            type="text"
            value={displayValue}
            {...rest}
          />
        </div>
        {EndAdornment}
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
