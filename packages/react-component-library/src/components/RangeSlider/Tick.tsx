import React, { useMemo } from 'react'
import { SliderItem } from 'react-compound-slider'

import { useThresholdColor } from './useThresholdColor'
import { StyledLabel } from './partials/StyledLabel'
import { StyledMarker } from './partials/StyledMarker'

export interface TickProps {
  tick: SliderItem
  count: number
  hasLabels?: boolean
  hasMarkers?: boolean
  values: ReadonlyArray<number>
  domain: ReadonlyArray<number>
  isReversed?: boolean
  thresholds?: number[]
  tracksLeft?: boolean
  tracksRight?: boolean
}

function isActive(
  values: ReadonlyArray<number>,
  tickValue: number,
  tracksLeft: boolean,
  tracksRight: boolean
): boolean {
  if (!tracksLeft && !tracksRight) {
    return tickValue >= values[0] && tickValue <= values[1]
  }

  if (tracksLeft && tracksRight) {
    return true
  }

  return values.some((item) => tickValue <= item)
}

export const Tick: React.FC<TickProps> = ({
  tick,
  count,
  hasLabels,
  hasMarkers,
  values,
  domain,
  isReversed,
  thresholds,
  tracksLeft = false,
  tracksRight = false,
}) => {
  const percent: number = useMemo(
    () => (isReversed ? 100 - tick.percent : tick.percent),
    [tick.percent, isReversed]
  ) // invert if reversed

  const tickValue: number = useMemo(
    () => (domain[1] / 100) * percent,
    [domain, percent]
  )

  const thresholdColor = useThresholdColor(percent, thresholds)

  const showMarker = percent === 0 || percent === 100 || hasMarkers

  return (
    <div data-testid="rangeslider-tick">
      {showMarker && (
        <StyledMarker
          $left={`${tick.percent}%`}
          $isActive={isActive(values, tickValue, tracksLeft, tracksRight)}
          $thresholdColor={thresholdColor}
          data-testid="rangeslider-marker"
        />
      )}
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
