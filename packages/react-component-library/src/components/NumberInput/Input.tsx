import React, { useRef } from 'react'
import classNames from 'classnames'

interface InputProps {
  isDisabled?: boolean
  id?: string
  isCondensed: boolean
  label?: string
  name: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onInputBlur: (event: React.FormEvent<HTMLInputElement>) => void
  onInputFocus: () => void
  placeholder?: string
  value?: number
}

export const Input: React.FC<InputProps> = ({
  isDisabled = false,
  id,
  isCondensed,
  label,
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

  const inputClasses = classNames('rn-numberinput__input', {
    'rn-numberinput__input--condensed': isCondensed,
  })

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
        className={inputClasses}
        data-testid="number-input-input"
        disabled={isDisabled}
        id={id}
        name={name}
        onBlur={onInputBlur}
        onChange={onChange}
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
