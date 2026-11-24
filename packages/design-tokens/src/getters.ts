import { get, isNil } from 'lodash'
import { css, Interpolation } from 'styled-components'

import defaultTheme from './themes/light'
import {
  AnimationTiming,
  Breakpoint,
  BreakpointSize,
  ColorGroup,
  ColorShade,
  ShadowWeight,
  Spacing,
  Theme,
  TypographySize,
  ZIndexGroup,
} from './types'

export function getTheme(theme?: Theme): Theme {
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
  ...interpolations: Interpolation<object>[]
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

  return function mqTagFunction(
    strings: TemplateStringsArray,
    ...interpolations: Interpolation<object>[]
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

const COLOR_VARIABLE_PREFIX = '--rn-color'

export function colorVariableName(
  group: ColorGroup,
  weight: ColorShade
): string {
  return `${COLOR_VARIABLE_PREFIX}-${group}-${weight}`
}

export function getColor(
  group: ColorGroup,
  weight: ColorShade,
  theme?: Theme
): string {
  const value =
    get(getTheme(theme).colorsTokens, `color[${group}][${weight}].value`) ?? ''

  if (isTokenValid(value)) {
    return value
  }

  throw new Error(
    `Invalid color token for group: '${group}' weight: '${weight}'`
  )
}

/**
 * Resolve a colour token as a `var(--rn-color-*)` reference with the light
 * value as fallback, so it follows the colour mode enabled by
 * `GlobalStyleProvider`. An explicit theme resolves to that theme's value.
 */
export function getThemeColor(
  group: ColorGroup,
  weight: ColorShade,
  theme?: Theme
): string {
  if (theme?.colorsTokens) {
    return getColor(group, weight, theme)
  }

  return `var(${colorVariableName(group, weight)}, ${getColor(group, weight)})`
}

export function isDarkColorMode(theme?: Theme): boolean {
  return theme?.colorMode === 'dark'
}

/**
 * Resolve a themed colour, using a different shade when the dark colour mode
 * is enabled, e.g.
 * `({ theme }) => colorByMode('neutral', '000', '100', theme as Theme)`.
 */
export function getColorByMode(
  group: ColorGroup,
  lightWeight: ColorShade,
  darkWeight: ColorShade,
  theme?: Theme
): string {
  return getThemeColor(group, isDarkColorMode(theme) ? darkWeight : lightWeight)
}

/**
 * Build the `--rn-color-*` custom property declarations for a theme, for
 * injection by `GlobalStyleProvider`.
 */
export function getColorVariables(theme?: Theme): Record<string, string> {
  const { color } = getTheme(theme).colorsTokens as unknown as {
    color: Record<string, Record<string, { value?: string }>>
  }

  const entries = Object.entries(color).flatMap(([group, shades]) =>
    Object.entries(shades)
      .filter(([, token]) => isTokenValid(token?.value))
      .map(
        ([weight, token]) =>
          [
            colorVariableName(group as ColorGroup, weight as ColorShade),
            token.value as string,
          ] as const
      )
  )

  return Object.fromEntries(entries)
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
