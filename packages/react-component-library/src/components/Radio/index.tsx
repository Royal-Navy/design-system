import React from 'react'
import uuid from 'uuid'

interface RadioProps {
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

const Radio: React.FC<RadioProps> = ({
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
    <div className={`rn-radio ${className}`} data-testid="container">
      <div className="rn-radio__outer-wrapper">
        <label className="rn-radio__label" htmlFor={id} data-testid="label">
          <input
            id={id}
            className="rn-radio__radio"
            type="radio"
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            {...rest}
            data-testid="radio"
          />
          <span className="rn-radio__checkmark" />
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

Radio.displayName = 'Radio'

export default Radio
