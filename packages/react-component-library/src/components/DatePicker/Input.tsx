import React, { forwardRef } from 'react'

import { TriangleDown } from '../../icons'

export interface InputProps extends ComponentWithClass {
  ref: React.Ref<any>
  id?: string
  label?: string
  name?: string
  value?: string
  onBlur?: (event: React.FormEvent<Element>) => void
  onFocus?: (event: React.FormEvent<Element>) => void
  disabled?: boolean
}

export const Input = forwardRef((props: InputProps, ref?: React.Ref<any>) => {
  const { className, id, label, name, value, onBlur, onFocus, disabled } = props

  return (
    <div className={className} ref={ref} data-testid="datepicker-input-wrapper">
      <div className="rn-date-picker__outer-wrapper">
        <div className="rn-date-picker__input-wrapper">
          <label
            className="rn-date-picker__label"
            htmlFor={id}
            data-testid="datepicker-label"
          >
            {label}
          </label>
          <input
            className="rn-date-picker__input"
            type="text"
            id={id}
            name={name}
            value={value}
            onBlur={onBlur}
            onFocus={onFocus}
            disabled={disabled}
            data-testid="datepicker-input"
          />
        </div>
        <div className="rn-date-picker__end-adornment">
          <div className="rn-date-picker__indicator-separator" />
          <TriangleDown />
        </div>
      </div>
    </div>
  )
})

Input.displayName = 'Input'
