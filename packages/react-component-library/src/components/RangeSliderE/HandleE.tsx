import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'

import { useThresholdColor } from './useThresholdColor'
import { RangeSliderEPositionBag, RangeSliderEValueFormatter } from '.'
import { StyledHandle } from './partials/StyledHandle'
import { StyledPercentage } from './partials/StyledPercentage'
import { StyledValue } from './partials/StyledValue'

export interface HandleEProps {
  activeHandleID: string
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
  formatValue: RangeSliderEValueFormatter
  thresholds?: number[]
}

export const HandleE: React.FC<HandleEProps> = ({
  activeHandleID,
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
  thresholds,
  formatValue,
}) => {
  const isActive: boolean = activeHandleID === id

  const positionBag: RangeSliderEPositionBag = {
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

HandleE.displayName = 'HandleE'
