import logger from '../../utils/logger'

export function fixProgressValue(value: number, defaultValue = 0): number {
  const numericValue = Number(value)

  if (Number.isNaN(numericValue)) {
    logger.error('Invalid number')
    return defaultValue
  }

  if (numericValue < 0) {
    logger.error(`Value '${numericValue}' cannot be negative`)
    return 0
  }

  if (numericValue > 100) {
    logger.error(`Value '${numericValue}' cannot be greater than 100`)
    return 100
  }

  return numericValue
}
