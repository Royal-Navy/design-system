import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import { ThresholdColor } from '../useThresholdColor'
import {
  RANGE_SLIDER_BG_COLOR,
  RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS,
} from '../constants'

interface StyledMarkerProps {
  $isActive?: boolean
  $thresholdColor?: ThresholdColor
  $left: string
}

export const StyledMarker = styled.div<StyledMarkerProps>`
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
