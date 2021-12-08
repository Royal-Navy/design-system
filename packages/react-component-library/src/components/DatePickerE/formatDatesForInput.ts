import { differenceInMinutes, format, isValid } from 'date-fns'

export function formatDatesForInput(
  startDate: Date,
  endDate: Date,
  datePickerFormat: string
) {
  if (
    isValid(startDate) &&
    isValid(endDate) &&
    differenceInMinutes(endDate, startDate) > 0
  ) {
    return `${format(startDate, datePickerFormat)} - ${format(
      endDate,
      datePickerFormat
    )}`
  }

  if (isValid(startDate)) {
    return format(startDate, datePickerFormat)
  }

  return ''
}
