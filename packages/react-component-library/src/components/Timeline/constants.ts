import { selectors } from '@royalnavy/design-tokens'

const ACCESSIBLE_DATE_FORMAT = 'do MMMM y'

const DATE_DAY_FORMAT = 'dd'
const DATE_MONTH_FORMAT = 'MMMM yyyy'
const DATE_WEEK_FORMAT = 'dd/MM'

const TIMELINE_BLOCK_SIZE = {
  SINGLE_HOUR: 1,
  QUARTER_DAY: 6,
  HALF_DAY: 12,
} as const

const DEFAULTS = {
  UNIT_WIDTH: 30,
  RANGE_IN_MONTHS: 3,
  HOURS_BLOCK_SIZE: TIMELINE_BLOCK_SIZE.QUARTER_DAY,
} as const

const DISPLAY_THRESHOLDS = {
  DAY: 20,
  HOUR: 30,
  WEEK: 50,
}

const NO_DATA_MESSAGE = 'No data available'

const WEEK_START = 1 // Monday

const { color } = selectors

const TIMELINE_BORDER_COLOR = color('neutral', '100')
const TIMELINE_BG_COLOR = color('neutral', '000')
const TIMELINE_ALT_BG_COLOR = color('neutral', 'white')
const TIMELINE_ROW_HEADER_WIDTH = 270

export {
  ACCESSIBLE_DATE_FORMAT,
  DATE_DAY_FORMAT,
  DATE_MONTH_FORMAT,
  DATE_WEEK_FORMAT,
  DEFAULTS,
  DISPLAY_THRESHOLDS,
  NO_DATA_MESSAGE,
  TIMELINE_BLOCK_SIZE,
  WEEK_START,
  TIMELINE_BORDER_COLOR,
  TIMELINE_BG_COLOR,
  TIMELINE_ALT_BG_COLOR,
  TIMELINE_ROW_HEADER_WIDTH,
}
