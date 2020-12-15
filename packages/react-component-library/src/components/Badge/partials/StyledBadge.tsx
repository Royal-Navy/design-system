import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

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

const { color, fontSize, shadow, spacing } = selectors

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
      background-color: ${color('neutral', '100')};
      color: ${color('neutral', '400')};
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
      background-color: ${color('action', '100')};
      color: ${color('action', '700')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('action', '600')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUCCESS]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('success', '100')};
      color: ${color('success', '800')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('success', '800')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.WARNING]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('warning', '000')};
      color: ${color('warning', '800')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('warning', '300')};
      color: ${color('warning', '800')};
      text-shadow: ${shadow('0')};
    `,
  },
  [BADGE_COLOR.DANGER]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('danger', '100')};
      color: ${color('danger', '800')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('danger', '700')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPA]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('supa', '000')};
      color: ${color('supa', '600')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('supa', '600')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPB]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('supb', '100')};
      color: ${color('supb', '600')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('supb', '600')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPC]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('supc', '100')};
      color: ${color('supc', '800')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('supc', '700')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPD]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('supd', '100')};
      color: ${color('supd', '800')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('supd', '700')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPE]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('supe', '200')};
      color: ${color('supe', '800')};
      text-shadow: ${shadow('0')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('supe', '800')};
      color: ${color('neutral', 'white')};
      text-shadow: ${shadow('1')};
    `,
  },
  [BADGE_COLOR.SUPF]: {
    [BADGE_COLOR_VARIANT.FADED]: css`
      background-color: ${color('supf', '200')};
      color: ${color('supf', '800')};
      text-shadow: ${shadow('1')};
    `,
    [BADGE_COLOR_VARIANT.SOLID]: css`
      background-color: ${color('supf', '700')};
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
    ${StyledBadgeColorVariantMap[$color][$colorVariant]}}
    ${$variant === BADGE_VARIANT.PILL && StyledBadgePillMap[$size]}
  `}
`
