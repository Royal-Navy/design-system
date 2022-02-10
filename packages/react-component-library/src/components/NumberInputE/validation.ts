import { isFinite, isNil } from 'lodash'

const OPTIONAL_NEGATIVE_REGEX = /^-?\d*(\.\d*)?$/
const NON_NEGATIVE_REGEX = /^\d*(\.\d*)?$/

export function isValueValid(
  value: string,
  isNegativeAllowed: boolean
): boolean {
  const regex = isNegativeAllowed ? OPTIONAL_NEGATIVE_REGEX : NON_NEGATIVE_REGEX
  return regex.test(value)
}

export function isWithinRange(
  max: number | undefined,
  min: number | undefined,
  newValue: number
): boolean {
  const isNotBelowMin = isNil(min) || newValue >= min
  const isNotAboveMax = isNil(max) || newValue <= max

  return isNotBelowMin && isNotAboveMax
}

export function canCommit(
  newValue: string,
  min: number | undefined,
  max: number | undefined
): boolean {
  const parsedValue = parseFloat(newValue)

  if (newValue === '-' || parsedValue === null) {
    return true
  }

  return isFinite(parsedValue) && isWithinRange(max, min, parsedValue)
}
