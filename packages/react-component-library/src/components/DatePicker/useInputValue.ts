import { useEffect, useState } from 'react'
import { differenceInMinutes, format } from 'date-fns'

import { getId } from '../../helpers'

export function transformDates(
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

export function useInputValue(
  from: Date,
  to: Date,
  datePickerFormat: string,
  hasFocus: boolean,
  revertKeyedValue: () => void
): {
  displayValue: string
  inputKey: string
} {
  const [displayValue, setDisplayValue] = useState<string>(
    transformDates(from, to, datePickerFormat)
  )
  const [inputKey, setInputKey] = useState<string>(getId('date-picker-input'))

  useEffect(() => {
    revertKeyedValue()
    setDisplayValue(transformDates(from, to, datePickerFormat))

    if (!hasFocus) {
      setInputKey(getId('date-picker-input'))
    }
  }, [from, to, datePickerFormat, hasFocus, revertKeyedValue])

  return {
    displayValue,
    inputKey,
  }
}
