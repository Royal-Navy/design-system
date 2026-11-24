import { themeColor } from '@royalnavy/design-tokens'

const ALERT_VARIANT = {
  DANGER: 'danger',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const

const ALERT_BACKGROUND_COLOR = themeColor('neutral', 'white')
const ALERT_BORDER_COLOR = themeColor('neutral', '100')
const ALERT_STATE_COLOR = themeColor('action', '500')
const ALERT_TITLE_COLOR = themeColor('neutral', '600')
const ALERT_ICON_COLOR = themeColor('action', '500')
const ALERT_CLOSE_COLOR = themeColor('neutral', '400')
const ALERT_CLOSE_COLOR_HOVER = themeColor('neutral', '500')
const ALERT_CLOSE_BACKGROUND_COLOR = themeColor('neutral', 'white')
const ALERT_CLOSE_BACKGROUND_COLOR_HOVER = themeColor('neutral', '000')
const ALERT_DESCRIPTION_COLOR = themeColor('neutral', '400')
const ALERT_FOOTER_BORDER_COLOR = themeColor('neutral', '000')

// Danger
const DANGER_ALERT_BACKGROUND_COLOR = themeColor('danger', '000')
const DANGER_ALERT_STATE_COLOR = themeColor('danger', '500')
const DANGER_ALERT_TITLE_COLOR = themeColor('danger', '800')
const DANGER_ALERT_ICON_COLOR = themeColor('danger', '500')

// Success
const SUCCESS_ALERT_BACKGROUND_COLOR = themeColor('success', '000')
const SUCCESS_ALERT_STATE_COLOR = themeColor('success', '500')
const SUCCESS_ALERT_TITLE_COLOR = themeColor('success', '900')
const SUCCESS_ALERT_ICON_COLOR = themeColor('success', '600')

// Warning
const WARNING_ALERT_BACKGROUND_COLOR = themeColor('warning', '000')
const WARNING_ALERT_STATE_COLOR = themeColor('warning', '500')
const WARNING_ALERT_TITLE_COLOR = themeColor('warning', '900')
const WARNING_ALERT_ICON_COLOR = themeColor('warning', '600')

export {
  ALERT_VARIANT,
  ALERT_BACKGROUND_COLOR,
  ALERT_BORDER_COLOR,
  ALERT_STATE_COLOR,
  ALERT_TITLE_COLOR,
  ALERT_ICON_COLOR,
  ALERT_CLOSE_COLOR,
  ALERT_CLOSE_COLOR_HOVER,
  ALERT_CLOSE_BACKGROUND_COLOR,
  ALERT_CLOSE_BACKGROUND_COLOR_HOVER,
  ALERT_DESCRIPTION_COLOR,
  ALERT_FOOTER_BORDER_COLOR,
  DANGER_ALERT_BACKGROUND_COLOR,
  DANGER_ALERT_STATE_COLOR,
  DANGER_ALERT_TITLE_COLOR,
  DANGER_ALERT_ICON_COLOR,
  SUCCESS_ALERT_BACKGROUND_COLOR,
  SUCCESS_ALERT_STATE_COLOR,
  SUCCESS_ALERT_TITLE_COLOR,
  SUCCESS_ALERT_ICON_COLOR,
  WARNING_ALERT_BACKGROUND_COLOR,
  WARNING_ALERT_STATE_COLOR,
  WARNING_ALERT_TITLE_COLOR,
  WARNING_ALERT_ICON_COLOR,
}
