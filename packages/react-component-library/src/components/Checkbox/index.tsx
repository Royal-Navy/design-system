import React from 'react'
import uuid from 'uuid'

interface CheckboxProps {
  checked?: boolean
  className?: string
  disabled?: boolean
  errorMessage?: string
  id?: string
  label: string
  name: string
  value?: string
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  className = '',
  disabled = false,
  errorMessage,
  id = uuid(),
  label,
  name,
  onBlur,
  onChange,
  value,
  ...rest
}) => {
  return (
    <div className={`rn-checkbox ${className}`} data-testid="container">
      <div className="rn-checkbox__outer-wrapper">
        <label className="rn-checkbox__label" htmlFor={id} data-testid="label">
          <input
            id={id}
            className="rn-checkbox__checkbox"
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            {...rest}
            data-testid="checkbox"
          />
          <span className="rn-checkbox__checkmark" />
          {label}
        </label>
      </div>
      {errorMessage && (
        <div className="rn-form__invalid-feedback" data-testid="error">
          {errorMessage}
        </div>
      )}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
