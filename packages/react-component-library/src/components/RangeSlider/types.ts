export type RangeSliderPositionBag = {
  value: number
  percentage: number
}

export type RangeSliderValueFormatter = (
  positionBag: RangeSliderPositionBag
) => string
