export type RangeSliderEPositionBag = {
  value: number
  percentage: number
}

export type RangeSliderEValueFormatter = (
  positionBag: RangeSliderEPositionBag
) => string
