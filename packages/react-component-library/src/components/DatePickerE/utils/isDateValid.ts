import { isValid } from 'date-fns'

type DateAny = Parameters<typeof isValid>[0]

/**
 * Version of isValid with a type predicate.
 */
export function isDateValid(value: DateAny): value is Date | number {
  return isValid(value)
}
