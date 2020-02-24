import React, { useRef } from 'react'

interface InputProps {
  isDisabled?: boolean
  id?: string
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
