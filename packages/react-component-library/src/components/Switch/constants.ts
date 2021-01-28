import { selectors } from '@royalnavy/design-tokens'

const { color } = selectors

const SWITCH_SIZE = {
  LARGE: 'large',
  REGULAR: 'regular',
  SMALL: 'small',
} as const

const SWITCH_BACKGROUND_COLOR = color('neutral', '000')
const SWITCH_BORDER_COLOR = color('neutral', '200')

export {
  SWITCH_SIZE,
  SWITCH_BACKGROUND_COLOR,
  SWITCH_BORDER_COLOR,
}
