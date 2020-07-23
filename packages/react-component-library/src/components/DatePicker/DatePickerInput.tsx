import React, { forwardRef } from 'react'

import { TriangleDown } from '../../icons'

export interface DatePickerInputProps extends ComponentWithClass {
  ref: React.Ref<HTMLDivElement>
  id?: string
  label?: string
  name?: string
  value?: string
  onBlur?: (event: React.FormEvent<Element>) => void
  onFocus?: (event: React.FormEvent<Element>) => void
  isDisabled?: boolean
  isOpen: boolean
  onClose?: () => void
}

export const DatePickerInput = forwardRef(
  (props: DatePickerInputProps, ref?: React.Ref<HTMLDivElement>) => {
    const {
      className,
      id,
      label,
      name,
      value,
      onBlur,
      onFocus,
      isDisabled,
      isOpen,
      onClose,
    } = props

    return (
      <div
        className={className}
        ref={ref}
        data-testid="datepicker-input-wrapper"
      >
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
              disabled={isDisabled}
              readOnly
              aria-label="Choose date"
              data-testid="datepicker-input"
            />
          </div>
          <button
            type="button"
            className="rn-date-picker__end-adornment"
            onClick={isOpen ? onClose : onFocus}
            data-testid="datepicker-input-button"
          >
            <div className="rn-date-picker__indicator-separator" />
            <TriangleDown />
          </button>
        </div>
      </div>
    )
  }
)

DatePickerInput.displayName = 'DatePickerInput'
