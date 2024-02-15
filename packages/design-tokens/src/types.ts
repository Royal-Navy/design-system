import * as animationTokens from './tokens/light/animation.json'
import * as breakpointsTokens from './tokens/light/breakpoints.json'
import * as colorsTokens from './tokens/light/colors.json'
import * as shadowsTokens from './tokens/light/shadows.json'
import * as spacingTokens from './tokens/light/spacing.json'
import * as typographyTokens from './tokens/light/typography.json'
import * as zindexTokens from './tokens/light/zindex.json'

const tokens = {
  animationTokens,
  breakpointsTokens,
  colorsTokens,
  shadowsTokens,
  spacingTokens,
  typographyTokens,
  zindexTokens,
}

export type Tokens = typeof tokens

export type Theme = Tokens & { mode: string }

export type ThemeProps = { theme?: Theme }

export type AnimationTiming = keyof Tokens['animationTokens']['timing']

export type BreakpointSize = keyof Tokens['breakpointsTokens']['breakpoint']

export type Breakpoint = {
  breakpoint: string
}

export type ColorGroup = keyof Tokens['colorsTokens']['color']

export type ColorShade =
  | 'black'
  | 'white'
  | '000'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'

export type ShadowWeight = keyof Tokens['shadowsTokens']['shadow']

export type Spacing = keyof Tokens['spacingTokens']['spacing']

export type TypographySize = keyof Tokens['typographyTokens']['typography']

export type ZIndexGroup = keyof Tokens['zindexTokens']['zindex']
