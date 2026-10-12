import { color, colorValue } from '@royalnavy/design-tokens'

export const RANGE_SLIDER_BG_COLOR = color('neutral', '200')
export const RANGE_SLIDER_HANDLE_COLOR = color('action', '500')
export const RANGE_SLIDER_TRACK_COLOR = color('action', '200')

// Threshold colours are passed through polished's `setLightness`, which
// needs a concrete colour rather than a CSS custom property reference.
export const RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD = colorValue(
  'action',
  '500'
)
export const RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS = colorValue(
  'warning',
  '500'
)
export const RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS = colorValue('danger', '500')
