import React from 'react'
import uuid from 'uuid'

interface CheckboxProps {
  className?: string
  id?: string
  label: string
  disabled?: boolean
  value?: string | boolean
  name: string
  checked?: boolean
  onChange?: (event: React.SyntheticEvent) => void
  onBlur?: (event: React.SyntheticEvent) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  className = '',
  id = uuid(),
  label,
  disabled = false,
  value,
  name,
  checked = false,
  onChange,
  onBlur,
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
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
