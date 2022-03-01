import { get, isNil } from 'lodash'
import { css } from 'styled-components'

import defaultTheme from './themes/light'
import {
  AnimationTiming,
  BreakpointSize,
  Breakpoint,
  ColorGroup,
  ColorShade,
  ShadowWeight,
  Spacing,
  TypographySize,
  ZIndexGroup,
  StyledComponentsInterpolation,
  Theme,
} from './types'

function getTheme(theme?: Theme): Theme {
  return theme?.colorsTokens ? theme : defaultTheme
}

function isTokenValid(token: unknown): boolean {
  return !isNil(token) && token !== ''
}

export function getBreakpoint(size: BreakpointSize, theme?: Theme): Breakpoint {
  const { breakpointsTokens } = getTheme(theme)

  const breakpoint = get(
    breakpointsTokens,
    `breakpoint[${size}].breakpoint.value`
  )

  if (isTokenValid(breakpoint)) {
    return {
      breakpoint,
    }
  }

  throw new Error(`Invalid breakpoint token for size: '${size}'`)
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

export function getAnimation(index: AnimationTiming, theme?: Theme): string {
  const value = get(getTheme(theme).animationTokens, `timing[${index}].value`)

  if (isTokenValid(value)) {
    return value
  }

  throw new Error(`Invalid animation token for index: '${index}'`)
}

export function getColor(
  group: ColorGroup,
  weight: ColorShade,
  theme?: Theme
): string {
  const value = get(
    getTheme(theme).colorsTokens,
    `color[${group}][${weight}].value`
  )

  if (isTokenValid(value)) {
    return value
  }

  throw new Error(
    `Invalid color token for group: '${group}' weight: '${weight}'`
  )
}

export function getTypography(size: TypographySize, theme?: Theme): string {
  const value = get(
    getTheme(theme).typographyTokens,
    `typography[${size}].value`
  )

  if (isTokenValid(value)) {
    return value
  }

  throw new Error(`Invalid typography token for size: '${size}'`)
}

export function getShadow(weight: ShadowWeight, theme?: Theme): string {
  const value = get(getTheme(theme).shadowsTokens, `shadow[${weight}].value`)

  if (isTokenValid(value)) {
    return value
  }

  throw new Error(`Invalid shadow token for weight: '${weight}'`)
}

export function getSpacing(spacing: Spacing, theme?: Theme): string {
  const value = get(getTheme(theme).spacingTokens, `spacing[${spacing}].value`)

  if (isTokenValid(value)) {
    return value
  }

  throw new Error(`Invalid spacing token for value: '${spacing}'`)
}

export function getZIndex(
  group: ZIndexGroup,
  offset: number,
  theme?: Theme
): number {
  const value = get(getTheme(theme).zindexTokens, `zindex[${group}].value`)
  if (isTokenValid(value)) {
    return Number(value) + offset
  }

  throw new Error(
    `Invalid z-index token for: group '${group}' offset: ${offset}`
  )
}
