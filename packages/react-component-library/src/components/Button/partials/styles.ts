import { color, fontSize } from '@royalnavy/design-tokens'

import { BUTTON_VARIANT } from '../constants'
import { COMPONENT_SIZE } from '../../Forms'

type ButtonStyle = {
  backgroundColor: string
  color: string
  boxShadow: string
  textDecoration: string
}

type OptionalButtonStyle = {
  backgroundColor?: string
  color?: string
  boxShadow?: string
  textDecoration?: string
}

const defaultDisabledStyle: ButtonStyle = {
  backgroundColor: color('neutral', '000'),
  boxShadow: `0 0 0 1px ${color('neutral', '200')}`,
  color: color('neutral', '300'),
  textDecoration: 'none',
}

export type ButtonStyles = {
  default: ButtonStyle
  hover?: OptionalButtonStyle
  focus?: OptionalButtonStyle
  active?: OptionalButtonStyle
  disabled: ButtonStyle

  horizontalPadding?: string
}

export const STYLES_MAP: { [key: string]: ButtonStyles } = {
  [BUTTON_VARIANT.PRIMARY]: {
    default: {
      backgroundColor: color('action', '600'),
      color: color('neutral', 'white'),
      boxShadow: `0 0 0 1px ${color('action', '600')}`,
      textDecoration: 'none',
    },
    hover: {
      backgroundColor: color('action', '700'),
      boxShadow: `0 0 0 2px ${color('action', '900')}`,
    },
    focus: {
      backgroundColor: color('action', '600'),
      boxShadow: `0 0 0 3px ${color('action', '900')}`,
    },
    active: {
      backgroundColor: color('action', '900'),
      boxShadow: `0 0 0 3px ${color('action', '900')}`,
    },
    disabled: defaultDisabledStyle,
  },
  [BUTTON_VARIANT.SECONDARY]: {
    default: {
      backgroundColor: color('action', '100'),
      color: color('action', '800'),
      boxShadow: `0 0 0 1px ${color('action', '600')}`,
      textDecoration: 'none',
    },
    hover: {
      backgroundColor: color('action', '200'),
      boxShadow: `0 0 0 2px ${color('action', '700')}`,
    },
    focus: {
      boxShadow: `0 0 0 3px ${color('action', '700')}`,
    },
    active: {
      backgroundColor: color('action', '300'),
      color: color('action', '900'),
      boxShadow: `0 0 0 3px ${color('action', '700')}`,
    },
    disabled: defaultDisabledStyle,
  },
  [BUTTON_VARIANT.TERTIARY]: {
    default: {
      backgroundColor: color('neutral', 'white'),
      color: color('action', '600'),
      boxShadow: `0 0 0 1px ${color('action', '600')}`,
      textDecoration: 'none',
    },
    hover: {
      backgroundColor: color('action', '200'),
      boxShadow: `0 0 0 2px ${color('action', '700')}`,
    },
    focus: {
      color: color('action', '800'),
      boxShadow: `0 0 0 3px ${color('action', '700')}`,
    },
    active: {
      backgroundColor: color('action', '300'),
      boxShadow: `0 0 0 3px ${color('action', '700')}`,
      color: color('action', '900'),
    },
    disabled: defaultDisabledStyle,
  },
  [BUTTON_VARIANT.DANGER]: {
    default: {
      color: color('neutral', 'white'),
      backgroundColor: color('danger', '700'),
      textDecoration: 'none',
      boxShadow: `0 0 0 1px ${color('danger', '700')}`,
    },
    hover: {
      backgroundColor: color('danger', '800'),
      boxShadow: `0 0 0 2px ${color('danger', '900')}`,
    },
    focus: {
      backgroundColor: color('danger', '700'),
      boxShadow: `0 0 0 3px ${color('danger', '900')}`,
    },
    active: {
      backgroundColor: color('danger', '900'),
      boxShadow: `0 0 0 3px ${color('danger', '900')}`,
    },

    disabled: defaultDisabledStyle,
  },
  [BUTTON_VARIANT.NO_CONTAINER]: {
    default: {
      backgroundColor: 'transparent',
      color: color('action', '600'),
      textDecoration: 'none',
      boxShadow: '0',
    },
    hover: {
      color: color('action', '800'),
      textDecoration: 'underline',
    },
    focus: {
      backgroundColor: color('action', '100'),
      color: color('action', '800'),
      textDecoration: 'underline',
    },
    active: { color: color('action', '900') },
    disabled: { ...defaultDisabledStyle },
    horizontalPadding: '0',
  },
}

export const SIZE_MAP = {
  [COMPONENT_SIZE.FORMS]: {
    height: '42px',
    fontSize: fontSize('m'),
    borderRadius: '8px',
  },
  [COMPONENT_SIZE.SMALL]: {
    height: '33px',
    fontSize: fontSize('base'),
    borderRadius: '8px',
  },
}
