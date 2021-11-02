import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { getId } from '../../helpers'
import { StyledInput } from './partials/StyledInput'
import { StyledLabel } from './partials/StyledLabel'
import { useInputValue } from '../../hooks/useInputValue'

export interface InputProps extends ComponentWithClass {
  hasFocus: boolean
  id?: string
  isDisabled: boolean
  label?: string
  name: string
  onBlur: (event: React.FormEvent) => void
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: React.FormEvent) => void
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  type?: string
  value?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      hasFocus,
      id = getId('text-input'),
      isDisabled,
      label,
      onChange,
      value,
      ...rest
    },
    ref
  ) => {
    const { committedValue, hasValue, onValueChange } = useInputValue(value)

    return (
      <>
        <StyledLabel
          $hasContent={hasValue}
          $hasFocus={hasFocus}
          htmlFor={id}
          data-testid="text-input-label"
        >
          {label}
        </StyledLabel>
        <StyledInput
          $hasLabel
          ref={ref}
          data-testid="text-input-input"
          disabled={isDisabled}
          id={id}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onValueChange(e)
            if (onChange) {
              onChange(e)
            }
          }}
          value={committedValue}
          {...rest}
        />
      </>
    )
  }
)

Input.displayName = 'ComponentName'
