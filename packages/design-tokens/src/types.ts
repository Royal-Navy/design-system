import * as animationTokens from './tokens/animation.json'
import * as breakpointsTokens from './tokens/breakpoints.json'
import * as coloursTokens from './tokens/colours.json'
import * as shadowsTokens from './tokens/shadows.json'
import * as spacingTokens from './tokens/spacing.json'
import * as typographyTokens from './tokens/typography.json'
import * as zindexTokens from './tokens/zindex.json'

const tokens = {
  animationTokens,
  breakpointsTokens,
  coloursTokens,
  shadowsTokens,
  spacingTokens,
  typographyTokens,
  zindexTokens
}

export type StyledComponentsInterpolation =
  | ((executionContext: Record<string, any>) => StyledComponentsInterpolation)
  | string
  | number
  | StyledComponentsInterpolation[]

export type Tokens = typeof tokens

export type AnimationTiming = keyof Tokens['animationTokens']['timing']

export type BreakpointSize = keyof Tokens['breakpointsTokens']['breakpoint']

export type Breakpoint = {
  breakpoint: string
  baseFontSize: string
}

export type ColourGroup = keyof Tokens['coloursTokens']['color']

export type ColourShade =
  'black' | 'white' | '000' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900'

export type ShadowWeight = keyof Tokens['shadowsTokens']['shadow']

export type Spacing = keyof Tokens['spacingTokens']['spacing']

export type TypographySize = keyof Tokens['typographyTokens']['typography']

export type ZIndexGroup = keyof Tokens['zindexTokens']['zindex']
