import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

const ALERT_VARIANT = {
  DANGER: 'danger',
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
} as const

const ALERT_BACKGROUND_COLOR = color('neutral', 'white')
const ALERT_BORDER_COLOR = color('neutral', '100')
const ALERT_STATE_COLOR = color('action', '500')
const ALERT_TITLE_COLOR = color('neutral', '600')
const ALERT_ICON_COLOR = color('action', '500')
const ALERT_CLOSE_COLOR = color('neutral', '400')
const ALERT_CLOSE_COLOR_HOVER = color('neutral', '500')
const ALERT_CLOSE_BACKGROUND_COLOR = color('neutral', 'white')
const ALERT_CLOSE_BACKGROUND_COLOR_HOVER = color('neutral', '000')
const ALERT_DESCRIPTION_COLOR = color('neutral', '400')
const ALERT_FOOTER_BORDER_COLOR = color('neutral', '000')

// Danger
const DANGER_ALERT_BACKGROUND_COLOR = color('danger', '000')
const DANGER_ALERT_STATE_COLOR = color('danger', '500')
const DANGER_ALERT_TITLE_COLOR = color('danger', '800')
const DANGER_ALERT_ICON_COLOR = color('danger', '500')

// Success
const SUCCESS_ALERT_BACKGROUND_COLOR = color('success', '000')
const SUCCESS_ALERT_STATE_COLOR = color('success', '500')
const SUCCESS_ALERT_TITLE_COLOR = color('success', '900')
const SUCCESS_ALERT_ICON_COLOR = color('success', '600')

// Warning
const WARNING_ALERT_BACKGROUND_COLOR = color('warning', '000')
const WARNING_ALERT_STATE_COLOR = color('warning', '500')
const WARNING_ALERT_TITLE_COLOR = color('warning', '900')
const WARNING_ALERT_ICON_COLOR = color('warning', '600')

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
