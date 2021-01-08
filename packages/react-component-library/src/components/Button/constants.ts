const BUTTON_SIZE = {
  SMALL: 'small',
  REGULAR: 'regular',
  LARGE: 'large',
  XLARGE: 'xlarge',
} as const

const BUTTON_VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const

const BUTTON_COLOR = {
  DANGER: 'danger',
} as const

const BUTTON_ICON_POSITION = {
  LEFT: 'left',
  RIGHT: 'right',
} as const

const BUTTON_BORDER_RADIUS = '4px'
const BUTTON_BORDER_RADIUS_SMALL = '3px'
const BUTTON_DISABLED_OPACITY = 0.4
const BUTTON_BLOCK_SPACING_Y = '1rem'
const BUTTON_FOCUS_WIDTH = '0.2rem'

export {
  BUTTON_SIZE,
  BUTTON_VARIANT,
  BUTTON_COLOR,
  BUTTON_ICON_POSITION,
  BUTTON_BORDER_RADIUS,
  BUTTON_BORDER_RADIUS_SMALL,
  BUTTON_DISABLED_OPACITY,
  BUTTON_BLOCK_SPACING_Y,
  BUTTON_FOCUS_WIDTH
}
