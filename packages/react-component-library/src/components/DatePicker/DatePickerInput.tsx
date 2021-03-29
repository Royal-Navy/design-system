import React from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import { format } from 'date-fns'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledInput } from './partials/StyledInput'

export interface DatePickerInputProps extends ComponentWithClass {
  id: string
  isDisabled: boolean
  format: string
  from: Date
  onFocus: React.FocusEventHandler<HTMLInputElement>
  to: Date
}

function transformDates(
  startDate: Date,
  endDate: Date,
  datePickerFormat: string
) {
  if (startDate && endDate && differenceInMinutes(endDate, startDate) > 0) {
    return `${format(startDate, datePickerFormat)} - ${format(
      endDate,
      datePickerFormat
    )}`
  }

  if (startDate) {
    return format(startDate, datePickerFormat)
  }

  return ''
}

export const DatePickerInput: React.FC<DatePickerInputProps> = ({
  from,
  to,
  format: datePickerFormat,
  isDisabled,
  ...rest
}) => {
  return (
    <StyledInput
      aria-label="Choose date"
      data-testid="datepicker-input"
      disabled={isDisabled}
      readOnly
      type="text"
      value={transformDates(from, to, datePickerFormat)}
      {...rest}
    />
  )
}

DatePickerInput.displayName = 'DatePickerInput'
