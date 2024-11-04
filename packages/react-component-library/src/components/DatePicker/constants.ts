import { ValueOf } from '../../helpers'

const CALENDAR_TABLE_VIEW = {
  HIDE: 'hide',
  MONTHS: 'months',
  YEARS: 'years',
} as const

type CalendarTableView = ValueOf<typeof CALENDAR_TABLE_VIEW>

const DATE_VALIDITY = {
  VALID: 'valid',
  INVALID: 'invalid',
  DISABLED: 'disabled',
} as const

type DateValidity = ValueOf<typeof DATE_VALIDITY>

export {
  CALENDAR_TABLE_VIEW,
  DATE_VALIDITY,
  type CalendarTableView,
  type DateValidity,
}
