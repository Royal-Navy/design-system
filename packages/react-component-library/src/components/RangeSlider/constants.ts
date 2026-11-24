import { themeColor, color } from '@royalnavy/design-tokens'

export const RANGE_SLIDER_BG_COLOR = themeColor('neutral', '200')
export const RANGE_SLIDER_HANDLE_COLOR = themeColor('action', '500')
export const RANGE_SLIDER_TRACK_COLOR = themeColor('action', '200')

// Threshold colours are passed through polished's `setLightness`, which
// needs a concrete colour rather than a CSS custom property reference.
export const RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD = color('action', '500')
export const RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS = color('warning', '500')
export const RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS = color('danger', '500')
