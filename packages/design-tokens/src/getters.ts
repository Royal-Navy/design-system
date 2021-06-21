import get from 'lodash/get'
import { css } from 'styled-components'

import defaultTheme from './themes/light'
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
  Theme,
} from './types'

function getTheme(theme?: Theme): Theme {
  return theme?.coloursTokens ? theme : defaultTheme
}

export function getBreakpoint(
  size: BreakpointSize,
  theme?: Theme
): Breakpoint | undefined {
  const { breakpointsTokens } = getTheme(theme)

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

export function getMediaQuery(
  options: {
    gte: BreakpointSize
    lt?: BreakpointSize
    media?: string
  },
  theme?: Theme
): (
  strings: TemplateStringsArray,
  ...interpolations: StyledComponentsInterpolation[]
) => string {
  const { gte, lt, media } = {
    media: 'only screen and',
    ...options,
  }

  const { breakpointsTokens } = getTheme(theme)

  const breakpointGTE = get(
    breakpointsTokens,
    `breakpoint[${gte}].breakpoint.value`
  )

  const breakpointLT = get(
    breakpointsTokens,
    `breakpoint[${lt}].breakpoint.value`
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

export function getAnimation(
  index: AnimationTiming,
  theme?: Theme
): string | undefined {
  return get(getTheme(theme).animationTokens, `timing[${index}].value`)
}

export function getColour(
  group: ColourGroup,
  weight: ColourShade,
  theme?: Theme
): string | undefined {
  return get(getTheme(theme).coloursTokens, `color[${group}][${weight}].value`)
}

export function getTypography(
  size: TypographySize,
  theme?: Theme
): string | undefined {
  return get(getTheme(theme).typographyTokens, `typography[${size}].value`)
}

export function getShadow(
  weight: ShadowWeight,
  theme?: Theme
): string | undefined {
  return get(getTheme(theme).shadowsTokens, `shadow[${weight}].value`)
}

export function getSpacing(
  spacing: Spacing,
  theme?: Theme
): string | undefined {
  return get(getTheme(theme).spacingTokens, `spacing[${spacing}].value`)
}

export function getZIndex(
  group: ZIndexGroup,
  offset: number,
  theme?: Theme
): number | undefined {
  return (
    Number(get(getTheme(theme).zindexTokens, `zindex[${group}].value`)) + offset
  )
}
