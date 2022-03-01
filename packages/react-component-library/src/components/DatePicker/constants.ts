const LOCALE = {
  UK: 'en-GB',
}

const WEEKDAY_TITLES = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

const DATE_VALIDITY = {
  VALID: 'valid',
  INVALID: 'invalid',
  DISABLED: 'disabled',
} as const

export { DATE_VALIDITY, LOCALE, WEEKDAY_TITLES }
