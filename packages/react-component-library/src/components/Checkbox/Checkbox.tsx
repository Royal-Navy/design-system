import React, { forwardRef } from 'react'
import classNames from 'classnames'
import { v4 as uuidv4 } from 'uuid'

import { PropsWithClassName } from '../../types/PropsWithClassName'

export interface CheckboxProps extends PropsWithClassName {
  id?: string
  isChecked?: boolean
  isDisabled?: boolean
  label: string
  name: string
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  value?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = '',
      id = uuidv4(),
      isChecked,
      isDisabled,
      label,
      name,
      onBlur,
      onChange,
      value,
      ...rest
    },
    ref
  ) => {
    const classes = classNames('rn-checkbox', className)

    return (
      <div className={classes} data-testid="container">
        <div className="rn-checkbox__outer-wrapper">
          <label
            className="rn-checkbox__label"
            htmlFor={id}
            data-testid="label"
          >
            <input
              ref={ref}
              id={id}
              className="rn-checkbox__checkbox"
              type="checkbox"
              name={name}
              value={value}
              defaultChecked={isChecked}
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
)

Checkbox.displayName = 'Checkbox'
