import React from 'react'
import uuid from 'uuid'

import FieldProps from '../../types/FieldProps'
import FormProps from '../../types/FormProps'

interface CheckboxProps {
  className?: string
  id?: string
  label: string
  disabled?: boolean
  field: FieldProps
  form: FormProps
}

const Checkbox: React.FC<CheckboxProps> = ({
  className = '',
  id = uuid(),
  label,
  disabled = false,
  field: { value, name, onChange, onBlur },
  form: { errors = {}, touched = {} },
  ...rest
}) => {
  const hasError = touched[name] && errors[name]

  const classes = `rn-checkbox
    ${hasError ? 'rn-checkbox--is-invalid' : ''}
    ${className}
  `

  return (
    <div className={classes} data-testid="container">
      <div className="rn-checkbox__outer-wrapper">
        <label className="rn-checkbox__label" htmlFor={id} data-testid="label">
          <input
            id={id}
            className="rn-checkbox__checkbox"
            type="checkbox"
            name={name}
            value={value}
            checked={!!value}
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
      {hasError && (
        <div className="rn-checkbox__invalid-feedback" data-testid="error">
          {errors[name]}
        </div>
      )}
    </div>
  )
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
