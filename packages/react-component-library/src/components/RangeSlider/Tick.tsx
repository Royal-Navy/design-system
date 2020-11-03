import React from 'react'
import { SliderItem } from 'react-compound-slider'
import styled, { css } from 'styled-components'
import { transparentize } from 'polished'
import { selectors } from '@royalnavy/design-tokens'

import { ThresholdColor, useThresholdColor } from './useThresholdColor'
import {
  RANGE_SLIDER_BG_COLOR,
  RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS,
} from './constants'

interface TickProps {
  tick: SliderItem
  count: number
  hasLabels?: boolean
  values: ReadonlyArray<number>
  domain: ReadonlyArray<number>
  isReversed?: boolean
  thresholds?: number[]
}

interface StyledMarkerProps {
  $isActive?: boolean
  $thresholdColor?: ThresholdColor
  $left: string
}

interface StyledLabelProps {
  $marginLeft: string
  $width: string
  $left: string
}

function isActive(values: ReadonlyArray<number>, tickValue: number): boolean {
  return values.some((item) => item >= tickValue)
}

const { fontSize, color } = selectors

const StyledMarker = styled.div<StyledMarkerProps>`
  position: absolute;
  width: 2px;
  height: 12px;
  transform: translateY(-50%);
  background-color: ${RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS};
  left: ${({ $left }) => $left};

  ${({ $thresholdColor }) =>
    $thresholdColor &&
    css`
      background-color: ${$thresholdColor};

      &::after {
        color: ${$thresholdColor};
        background-color: ${transparentize(0.75, $thresholdColor)};
      }
    `}
  ${({ $isActive }) =>
    !$isActive &&
    css`
      background-color: ${RANGE_SLIDER_BG_COLOR};
    `};
`

const StyledLabel = styled.span<StyledLabelProps>`
  position: absolute;
  margin-top: 22px;
  font-size: ${fontSize('xs')};
  color: ${color('neutral', '400')};
  text-align: center;
  margin-left: ${({ $marginLeft }) => $marginLeft};
  width: ${({ $width }) => $width};
  left: ${({ $left }) => $left};
`

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
