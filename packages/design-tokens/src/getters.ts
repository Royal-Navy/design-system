import get from 'lodash/get'
import { css } from 'styled-components'

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
  ZIndexGroup,
  StyledComponentsInterpolation,
} from './types'

export function getBreakpoint(size: BreakpointSize): Breakpoint | undefined {
  const breakpoint = get(
    breakpointsTokens,
    `breakpoint[${size}].breakpoint.value`
  )

  const baseFontSize = get(
    breakpointsTokens,
    `breakpoint[${size}].baseFontSize.value`
  )

  return {
    breakpoint,
    baseFontSize,
  }
}

export function getMediaQuery(options: {
  gte: BreakpointSize
  lt?: BreakpointSize
  media?: string
}): (
  strings: TemplateStringsArray,
  ...interpolations: StyledComponentsInterpolation[]
) => string {
  const { gte, lt, media } = {
    media: 'only screen and',
    ...options,
  }

  const breakpointGTE = get(
    breakpointsTokens,
    `breakpoint[${gte}].breakpoint.value`
  )

  const breakpointLT = get(
    breakpointsTokens,
    `breakpoint[${lt}].breakpoint.value`
  )

  const baseFontSize = get(
    breakpointsTokens,
    `breakpoint[${gte}].baseFontSize.value`
  )

  return function (
    strings: TemplateStringsArray,
    ...interpolations: StyledComponentsInterpolation[]
  ): string {
    if (breakpointGTE && !breakpointLT) {
      return css`
        @media ${media} (min-width: ${breakpointGTE}) {
          ${css(strings, ...interpolations)}
        }
      `.join('') // Join prevents commas e.g. `padding: ,1.25rem,`
    }

    if (breakpointGTE && breakpointLT) {
      return css`
        @media ${media} (min-width: ${breakpointGTE}) and (max-width: ${breakpointLT}) {
          ${css(strings, ...interpolations)}
        }
      `.join('')
    }

    throw new Error(`Invalid breakpoints: gte: ${gte} - lt: ${lt}`)
  }
}

export function getColour(
  group: ColourGroup,
  weight: ColourShade
): string | undefined {
  return get(coloursTokens, `color[${group}][${weight}].value`)
}

export function getZIndex(
  group: ZIndexGroup,
  offset: number
): number | undefined {
  return Number(get(zindexTokens, `zindex[${group}].value`)) + offset
}

export function getShadow(weight: ShadowWeight): string | undefined {
  return get(shadowsTokens, `shadow[${weight}].value`)
}

export function getSpacing(spacing: Spacing): string | undefined {
  return get(spacingTokens, `spacing[${spacing}].value`)
}

export function getTypography(size: TypographySize): string | undefined {
  return get(typographyTokens, `typography[${size}].value`)
}

export function getAnimation(index: AnimationTiming): string | undefined {
  return get(animationTokens, `timing[${index}].value`)
}
