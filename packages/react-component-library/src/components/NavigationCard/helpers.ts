import { themeColor } from '@royalnavy/design-tokens'
import { tint } from 'polished'

import { NAVIGATION_CARD_COLOR } from './constants'
import { NavigationCardColorType } from './types'

type Shade = '100' | '200' | '600'

const CUSTOM_COLOR_TINT: Record<Shade, number> = {
  '100': 0.85,
  '200': 0.7,
  '600': 0,
}

const CSS_VARIABLE_WITH_FALLBACK = /^var\(\s*--[\w-]+\s*,\s*(.+)\)$/

function isPaletteColor(value: string): value is NavigationCardColorType {
  return (Object.values(NAVIGATION_CARD_COLOR) as string[]).includes(value)
}

// polished can't parse var(), so tint the fallback colour that themeColor() embeds
function toParseableColor(value: string): string {
  return value.trim().match(CSS_VARIABLE_WITH_FALLBACK)?.[1].trim() ?? value
}

export function getShade(value: string, shade: Shade): string {
  if (isPaletteColor(value)) {
    return themeColor(value, shade)
  }

  return tint(CUSTOM_COLOR_TINT[shade], toParseableColor(value))
}
