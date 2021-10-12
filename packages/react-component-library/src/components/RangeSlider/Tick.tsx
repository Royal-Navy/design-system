import React from 'react'
import { SliderItem } from 'react-compound-slider'

import { useThresholdColor } from './useThresholdColor'
import { StyledLabel } from './partials/StyledLabel'
import { StyledMarker } from './partials/StyledMarker'

export interface TickProps {
  tick: SliderItem
  count: number
  hasLabels?: boolean
  values: ReadonlyArray<number>
  domain: ReadonlyArray<number>
  isReversed?: boolean
  thresholds?: number[]
}

function isActive(values: ReadonlyArray<number>, tickValue: number): boolean {
  return values.some((item) => item >= tickValue)
}

export const Tick: React.FC<TickProps> = ({
  tick,
  count,
  hasLabels,
  values,
  domain,
  isReversed,
  thresholds,
}) => {
  const percent: number = isReversed ? 100 - tick.percent : tick.percent // invert if reversed
  const tickValue: number = (domain[1] / 100) * percent

  return (
    <div data-testid="rangeslider-tick">
      <StyledMarker
        $left={`${tick.percent}%`}
        $isActive={isActive(values, tickValue)}
        $thresholdColor={useThresholdColor(percent, thresholds)}
      />
      {hasLabels && (
        <StyledLabel
          $marginLeft={`${-(100 / count) / 2}%`}
          $width={`${100 / count}%`}
          $left={`${tick.percent}%`}
          data-testid="rangeslider-label"
        >
          {tick.value}
        </StyledLabel>
      )}
    </div>
  )
}

Tick.displayName = 'Tick'
