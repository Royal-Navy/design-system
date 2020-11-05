import {
  RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD,
  RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS,
  RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS,
} from './constants'

export type ThresholdColor =
  | typeof RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD
  | typeof RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS
  | typeof RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS

export function useThresholdColor(
  percent: number,
  thresholds: number[]
): ThresholdColor | undefined {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  if ((singleThreshold || doubleThreshold) && percent <= thresholds[0]) {
    return RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD
  }

  if (doubleThreshold && percent < thresholds[1] && percent >= thresholds[0]) {
    return RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS
  }

  if (
    (singleThreshold || doubleThreshold) &&
    percent >= thresholds[thresholds.length - 1]
  ) {
    return RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS
  }

  return undefined
}
