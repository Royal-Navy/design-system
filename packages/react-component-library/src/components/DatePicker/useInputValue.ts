import { useEffect, useState } from 'react'
import { differenceInMinutes, format } from 'date-fns'
import { getId } from '../../helpers'

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

export function useInputValue(
  from: Date,
  to: Date,
  datePickerFormat: string,
  hasFocus: boolean
): {
  displayValue: string
  inputKey: string
  keyedValue: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  revert: () => void
} {
  const [displayValue, setDisplayValue] = useState<string>(
    transformDates(from, to, datePickerFormat)
  )
  const [keyedValue, setKeyedValue] = useState<string>()
  const [inputKey, setInputKey] = useState<string>(getId('date-picker-input'))

  function revert() {
    setKeyedValue(null)
  }

  useEffect(() => {
    revert()
    setDisplayValue(transformDates(from, to, datePickerFormat))

    if (!hasFocus) {
      setInputKey(getId('date-picker-input'))
    }
  }, [from, to])

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setKeyedValue(e.target.value)
  }

  return {
    displayValue,
    inputKey,
    keyedValue,
    onChange,
    revert,
  }
}
