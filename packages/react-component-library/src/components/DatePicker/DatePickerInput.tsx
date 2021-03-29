import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledInput } from './partials/StyledInput'
import { useInputValue } from './useInputValue'

export interface DatePickerInputProps extends ComponentWithClass {
  id: string
  isDisabled: boolean
  format: string
  from: Date
  onFocus: React.FocusEventHandler<HTMLInputElement>
  to: Date
}

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  from,
  to,
  format: datePickerFormat,
  isDisabled,
  ...rest
}) => {
  const { value } = useInputValue(from, to, datePickerFormat)

  return (
    <StyledInput
      aria-label="Choose date"
      data-testid="datepicker-input"
      disabled={isDisabled}
      readOnly
      type="text"
      value={value}
      {...rest}
    />
  )
}

DatePickerInput.displayName = 'DatePickerInput'
