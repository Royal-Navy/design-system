import { isFinite, isNil } from 'lodash'

export function areCharactersValid(characters: string): boolean {
  return /^[0-9.]*$/.test(characters)
}

export function isValueValid(value: string): boolean {
  return /^\d*(\.\d*)?$/.test(value)
}

export function isWithinRange(
  max: number,
  min: number,
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

  return (
    (isFinite(parsedValue) && isWithinRange(max, min, parsedValue)) ||
    parsedValue === null
  )
}
