import { ValueOf } from '../../helpers'

const CALENDAR_TABLE_VARIANT = {
  HIDE: 'hide',
  MONTHS: 'months',
  YEARS: 'years',
} as const

type CalendarTableVariant = ValueOf<typeof CALENDAR_TABLE_VARIANT>

const DATE_VALIDITY = {
  VALID: 'valid',
  INVALID: 'invalid',
  DISABLED: 'disabled',
} as const

type DateValidity = ValueOf<typeof DATE_VALIDITY>

export {
  CALENDAR_TABLE_VARIANT,
  DATE_VALIDITY,
  type CalendarTableVariant,
  type DateValidity,
}
