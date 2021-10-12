import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'

import { useThresholdColor } from './useThresholdColor'
import { RangeSliderPositionBag, RangeSliderValueFormatter } from '.'
import { StyledHandle } from './partials/StyledHandle'
import { StyledPercentage } from './partials/StyledPercentage'
import { StyledValue } from './partials/StyledValue'

export interface HandleProps {
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
      data-testid="rangeslider-handle"
    >
      <StyledPercentage data-testid="rangeslider-percentage">
        {`${Math.floor(percent)}%`}
      </StyledPercentage>
      <StyledValue data-testid="rangeslider-value">
        {formatValue(positionBag)}
      </StyledValue>
    </StyledHandle>
  )
}

Handle.displayName = 'Handle'
