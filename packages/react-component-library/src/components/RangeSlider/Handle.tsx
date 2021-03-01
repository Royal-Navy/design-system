import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'

import { useThresholdColor } from './useThresholdColor'
import { RangeSliderPositionBag, RangeSliderValueFormatter } from '.'
import { StyledHandle } from './partials/StyledHandle'

interface HandleProps {
  activeHandleID: string
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
  formatValue: RangeSliderValueFormatter
  thresholds?: number[]
}

export const Handle: React.FC<HandleProps> = ({
  activeHandleID,
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
  thresholds,
  formatValue,
}) => {
  const isActive: boolean = activeHandleID === id

  const positionBag: RangeSliderPositionBag = {
    value,
    percentage: percent,
  }

  return (
    <StyledHandle
      $isActive={isActive}
      $thresholdColor={useThresholdColor(percent, thresholds)}
      tabIndex={0}
      role="slider"
      aria-label="Select range"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      $left={`${percent}%`}
      {...getHandleProps(id)}
      data-value={formatValue(positionBag)}
      data-percent={`${Math.floor(percent)}%`}
      data-testid="rangeslider-handle"
    />
  )
}

Handle.displayName = 'Handle'
