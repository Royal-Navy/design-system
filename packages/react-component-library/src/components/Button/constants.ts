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
  RIGHT: 'right'
} as const

export { BUTTON_SIZE, BUTTON_VARIANT, BUTTON_COLOR, BUTTON_ICON_POSITION }
