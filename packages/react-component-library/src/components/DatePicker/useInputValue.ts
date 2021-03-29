import { useEffect, useState } from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import { format } from 'date-fns'

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
  datePickerFormat: string
): {
  value: string
} {
  const [value, setValue] = useState<string>(
    transformDates(from, to, datePickerFormat)
  )

  useEffect(() => {
    setValue(transformDates(from, to, datePickerFormat))
  }, [from, to])

  return {
    value,
  }
}
