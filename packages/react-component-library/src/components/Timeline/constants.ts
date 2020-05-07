const DATE_DAY_FORMAT = 'dd'
const DATE_MONTH_FORMAT = 'MMMM yyyy'
const DATE_WEEK_FORMAT = 'dd/MM'

const DEFAULTS = {
  DAY_WIDTH: 30,
  RANGE_IN_MONTHS: 3,
} as const

const NO_DATA_MESSAGE = 'No data available'

const WEEK_START = 1 // Monday

export {
  DATE_DAY_FORMAT,
  DATE_MONTH_FORMAT,
  DATE_WEEK_FORMAT,
  DEFAULTS,
  NO_DATA_MESSAGE,
  WEEK_START
}
