import get from 'lodash/get'

import * as animationTokens from './tokens/animation.json'
import * as breakpointsTokens from './tokens/breakpoints.json'
import * as coloursTokens from './tokens/colours.json'
import * as shadowsTokens from './tokens/shadows.json'
import * as spacingTokens from './tokens/spacing.json'
import * as typographyTokens from './tokens/typography.json'
import * as zindexTokens from './tokens/zindex.json'

import {
  AnimationTiming,
  BreakpointSize,
  Breakpoint,
  ColourGroup,
  ColourShade,
  ShadowWeight,
  Spacing,
  TypographySize,
  ZIndexGroup
} from './types'

export function getAnimation(
  index: AnimationTiming
): string | undefined {
  return get(animationTokens, `timing[${index}].value`)
}

export function getBreakpoint(
  size: BreakpointSize
): Breakpoint | undefined {
  const breakpoint = get(breakpointsTokens, `breakpoint[${size}].breakpoint.value`)
  const baseFontSize = get(breakpointsTokens, `breakpoint[${size}].baseFontSize.value`)

  return {
    breakpoint,
    baseFontSize,
  }
}

export function getColour(
  group: ColourGroup,
  weight: ColourShade
): string | undefined {
  return get(coloursTokens, `color[${group}][${weight}].value`)
}

export function getShadow(
  weight: ShadowWeight
): string | undefined {
  return get(shadowsTokens, `shadow[${weight}].value`)
}

export function getSpacing(
  spacing: Spacing
): string | undefined {
  return get(spacingTokens, `spacing[${spacing}].value`)
}

export function getTypography(
  size: TypographySize
): string | undefined {
  return get(typographyTokens, `typography[${size}].value`)
}

export function getZIndex(
  group: ZIndexGroup,
  offset: number
): number | undefined {
  return Number(get(zindexTokens, `zindex[${group}].value`)) + offset
}

// ...
