import {
  color as getColor,
  fontSize,
  TypographySize,
} from '@royalnavy/design-tokens'
import logger from '../../utils/logger'

const DEFAULT_HEADER_COLOR = getColor('neutral', '600')
const DEFAULT_BODY_COLOR = getColor('neutral', '400')

const LINE_HEIGHT = '24px'
const LINE_HEIGHT_L = '48px'
const LINE_HEIGHT_XL = '72px'

export type TextVariant = 'body' | 'display' | 'small'

export const allowedElements = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  p: 'p',
  span: 'span',
  code: 'code',
} as const

export type TextElement = (typeof allowedElements)[keyof typeof allowedElements]

type TextStyle = {
  fontSize: TypographySize
  lineHeight: string
  color: string
}

type TypographyStyle = Record<TextElement, TextStyle>

type TextStyling = Record<TextVariant, Partial<TypographyStyle>>

const allowedTextStyling: TextStyling = {
  display: {
    h1: {
      fontSize: 'display-xl',
      lineHeight: LINE_HEIGHT_XL,
      color: DEFAULT_HEADER_COLOR,
    },
    h2: {
      fontSize: 'display-l',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_HEADER_COLOR,
    },
    p: {
      fontSize: 'display',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_BODY_COLOR,
    },
    code: {
      fontSize: 'display',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_BODY_COLOR,
    },
  },
  body: {
    h1: {
      fontSize: 'xxl',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_HEADER_COLOR,
    },
    h2: {
      fontSize: 'xl',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_HEADER_COLOR,
    },
    h3: {
      fontSize: 'l',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_HEADER_COLOR,
    },
    h4: {
      fontSize: 'm',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_HEADER_COLOR,
    },
    h5: {
      fontSize: 'base',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_HEADER_COLOR,
    },
    h6: {
      fontSize: 's',
      lineHeight: LINE_HEIGHT_L,
      color: DEFAULT_HEADER_COLOR,
    },
    p: { fontSize: 'm', lineHeight: LINE_HEIGHT, color: DEFAULT_BODY_COLOR },
    code: {
      fontSize: 'base',
      lineHeight: LINE_HEIGHT,
      color: DEFAULT_BODY_COLOR,
    },
    span: { fontSize: 'm', lineHeight: LINE_HEIGHT, color: DEFAULT_BODY_COLOR },
  },
  small: {
    p: { fontSize: 's', lineHeight: LINE_HEIGHT, color: DEFAULT_BODY_COLOR },
    span: { fontSize: 's', lineHeight: LINE_HEIGHT, color: DEFAULT_BODY_COLOR },
    code: { fontSize: 's', lineHeight: LINE_HEIGHT, color: DEFAULT_BODY_COLOR },
  },
}

type TextStyleResult = {
  fontSize: string
  lineHeight: string
  defaultColor: string
  element: string
  display?: string
}

function createTextStyleResult(
  el: TextElement,
  style: TextStyle
): TextStyleResult {
  const { lineHeight, color } = style
  return {
    fontSize: fontSize(style.fontSize),
    lineHeight,
    defaultColor: color,
    element: el,
    display: el === 'code' ? 'inline' : undefined,
  }
}

export const getTextStyles = (
  el: TextElement,
  variant: TextVariant = 'body'
) => {
  const matchedVariant = allowedTextStyling[variant]

  if (!matchedVariant) {
    throw new Error(`Unknown text element ${el}`)
  }

  const matchedElement = matchedVariant[el]

  if (!matchedElement) {
    logger.error(`'${el}' does not support variant of type '${variant}'`)
    return createTextStyleResult('p', allowedTextStyling.body.p!)
  }

  return createTextStyleResult(el, matchedElement)
}
