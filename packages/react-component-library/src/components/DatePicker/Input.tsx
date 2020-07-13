import React, { forwardRef } from 'react'

import { TriangleDown } from '../../icons'
import { PropsWithClassName } from '../../types/PropsWithClassName'

export interface InputProps extends PropsWithClassName {
  ref: React.Ref<any>
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

export const Input = forwardRef((props: InputProps, ref?: React.Ref<any>) => {
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
            disabled={isDisabled}
            data-testid="datepicker-input"
            readOnly
          />
        </div>
        <button
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
})

Input.displayName = 'Input'
