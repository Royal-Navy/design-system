import { differenceInMinutes, format } from 'date-fns'

import { isDateValid } from '.'

export function formatDatesForInput(
  startDate: Date | null,
  endDate: Date | null,
  datePickerFormat: string
) {
  if (
    isDateValid(startDate) &&
    isDateValid(endDate) &&
    differenceInMinutes(endDate, startDate) > 0
  ) {
    return `${format(startDate, datePickerFormat)} - ${format(
      endDate,
      datePickerFormat
    )}`
  }

  if (isDateValid(startDate)) {
    return format(startDate, datePickerFormat)
  }

  return ''
}
