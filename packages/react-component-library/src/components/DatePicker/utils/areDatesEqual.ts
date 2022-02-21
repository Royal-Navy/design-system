import { isEqual } from 'date-fns'

import { isDateValid } from './isDateValid'

export function areDatesEqual(
  dateLeft: Date | null = null,
  dateRight: Date | null = null
): boolean {
  const isDateLeftValid = isDateValid(dateLeft)
  const isDateRightValid = isDateValid(dateRight)

  const bothNull = dateLeft == null && dateRight == null
  const bothInvalid =
    dateLeft && dateRight && !isDateLeftValid && !isDateRightValid
  const bothEqual =
    isDateLeftValid && isDateRightValid && isEqual(dateLeft, dateRight)

  return bothNull || bothInvalid || bothEqual
}
