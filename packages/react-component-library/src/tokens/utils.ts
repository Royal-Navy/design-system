import {
  ColorGroup,
  ColorShade,
  getTheme,
  ShadowWeight,
  Spacing,
  Theme,
  TypographySize,
} from '@royalnavy/design-tokens'
import { get } from 'lodash'

export function getColors(group: ColorGroup, theme?: Theme): ColorShade[] {
  const tokens = getTheme(theme).colorsTokens
  const values = Object.keys(tokens.color[group])
  return values as ColorShade[]
}

export function getColorDescription(
  group: ColorGroup,
  weight: ColorShade,
  theme?: Theme
): string {
  return (
    get(
      getTheme(theme).colorsTokens,
      `color[${group}][${weight}].description`
    ) ?? ''
  )
}

export function getShadowDescription(
  weight: ShadowWeight,
  theme?: Theme
): string {
  return (
    get(getTheme(theme).shadowsTokens, `shadow[${weight}].description`) || ''
  )
}

export function getShadows(theme?: Theme): ShadowWeight[] {
  const tokens = getTheme(theme).shadowsTokens
  const values = Object.keys(tokens.shadow)
  return values as ShadowWeight[]
}

export function getSpacings(theme?: Theme): Spacing[] {
  const tokens = getTheme(theme).spacingTokens
  return Object.keys(tokens.spacing) as Spacing[]
}

export function getTypographySizes(theme?: Theme): TypographySize[] {
  const tokens = getTheme(theme).typographyTokens
  return Object.keys(tokens.typography) as TypographySize[]
}
