import {
  themeColor,
  fontSize,
  shadow,
  spacing,
  color,
  colorByMode,
  Theme,
} from '@royalnavy/design-tokens'
import { styled, css } from 'styled-components'

import {
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
} from '../constants'
import {
  BadgeColorType,
  BadgeColorVariantType,
  BadgeSizeType,
  BadgeVariantType,
} from '../types'

interface StyledBadgeProps {
  $color: BadgeColorType
  $colorVariant: BadgeColorVariantType
  $size: BadgeSizeType
  $variant: BadgeVariantType
}

const StyledBadgeSizeMap = {
  [BADGE_SIZE.XSMALL]: css`
    font-size: ${fontSize('xs')};
    font-weight: 700;
    line-height: 1.4;
    padding: ${spacing('px')} ${spacing('2')};
  `,
  [BADGE_SIZE.SMALL]: css`
    font-size: ${fontSize('s')};
    font-weight: 700;
    line-height: 1.4;
    padding: ${spacing('1')} ${spacing('2')};
  `,
  [BADGE_SIZE.REGULAR]: css`
    font-size: ${fontSize('base')};
    font-weight: 600;
    line-height: 1.3;
    padding: ${spacing('1')} ${spacing('2')};
  `,
  [BADGE_SIZE.LARGE]: css`
    font-size: ${fontSize('base')};
    font-weight: 600;
    line-height: 1.3;
    padding: ${spacing('2')} ${spacing('3')};
  `,
  [BADGE_SIZE.XLARGE]: css`
    font-size: ${fontSize('m')};
    font-weight: 600;
    line-height: 1.3;
    padding: ${spacing('2')} ${spacing('3')};
  `,
}

const StyledBadgePillMap = {
  [BADGE_SIZE.XSMALL]: css`
    padding: ${spacing('px')} ${spacing('2')};
  `,
  [BADGE_SIZE.SMALL]: css`
    padding: ${spacing('1')} ${spacing('3')};
  `,
  [BADGE_SIZE.REGULAR]: css`
    padding: ${spacing('1')} ${spacing('4')};
  `,
  [BADGE_SIZE.LARGE]: css`
    padding: ${spacing('2')} ${spacing('4')};
  `,
  [BADGE_SIZE.XLARGE]: css`
    padding: ${spacing('2')} ${spacing('4')};
  `,
}

const StyledBadgeColorVariantMap = {
  [BADGE_COLOR.NEUTRAL]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('neutral', '100')};
      color: ${themeColor('neutral', '400')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('neutral', '500')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.ACTION]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('action', '100')};
      color: ${themeColor('action', '700')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('action', '600')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUCCESS]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('success', '100')};
      color: ${({ theme }) =>
        colorByMode('success', '800', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('success', '800')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.WARNING]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('warning', '000')};
      color: ${({ theme }) =>
        colorByMode('warning', '800', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('warning', '300')};
      color: ${themeColor('warning', '800')};
      text-shadow: ${shadow('0')};
    `,
  },
  [BADGE_COLOR.DANGER]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('danger', '100')};
      color: ${({ theme }) =>
        colorByMode('danger', '800', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('danger', '700')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPA]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('supa', '000')};
      color: ${({ theme }) =>
        colorByMode('supa', '600', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('supa', '600')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPB]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('supb', '100')};
      color: ${({ theme }) =>
        colorByMode('supb', '600', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('supb', '600')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPC]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('supc', '100')};
      color: ${({ theme }) =>
        colorByMode('supc', '800', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('supc', '700')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPD]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('supd', '100')};
      color: ${({ theme }) =>
        colorByMode('supd', '800', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('supd', '700')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPE]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('supe', '200')};
      color: ${({ theme }) =>
        colorByMode('supe', '800', '900', theme as Theme)};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('supe', '800')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPF]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${themeColor('supf', '200')};
      color: ${({ theme }) =>
        colorByMode('supf', '800', '900', theme as Theme)};
      text-shadow: ${shadow('1')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${themeColor('supf', '700')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
}

export const StyledBadge = styled.span<StyledBadgeProps>`
  display: inline-block;
  vertical-align: middle;
  white-space: nowrap;
  border-radius: ${({ $variant }) =>
    $variant === BADGE_VARIANT.PILL ? '100px' : '2px'};

  ${({ $color, $colorVariant, $size, $variant }) => css`
    ${StyledBadgeSizeMap[$size]}
    ${StyledBadgeColorVariantMap[$color][$colorVariant]}
    ${$variant === BADGE_VARIANT.PILL && StyledBadgePillMap[$size]}
  `}
`
