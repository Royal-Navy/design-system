import React from 'react'
import uuid from 'uuid'

interface CheckboxProps {
  className?: string
  id?: string
  label: string
  isDisabled?: boolean
  value?: string
  name: string
  isChecked?: boolean
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  className = '',
  id = uuid(),
  label,
  isDisabled = false,
  value,
  name,
  isChecked = false,
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
            checked={isChecked}
            onChange={onChange}
            onBlur={onBlur}
            disabled={isDisabled}
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
