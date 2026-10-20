import { color } from '@royalnavy/design-tokens'
import { tint } from 'polished'

import { NAVIGATION_CARD_COLOR } from './constants'
import { NavigationCardColorType } from './types'

type Shade = '100' | '200' | '600'

const CUSTOM_COLOR_TINT: Record<Shade, number> = {
  '100': 0.85,
  '200': 0.7,
  '600': 0,
}

function isPaletteColor(value: string): value is NavigationCardColorType {
  return (Object.values(NAVIGATION_CARD_COLOR) as string[]).includes(value)
}

export function getShade(value: string, shade: Shade): string {
  if (isPaletteColor(value)) {
    return color(value, shade)
  }

  return tint(CUSTOM_COLOR_TINT[shade], value)
}
