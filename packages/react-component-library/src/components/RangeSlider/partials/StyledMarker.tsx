import styled, { css } from 'styled-components'
import { setLightness } from 'polished'

import { ThresholdColor } from '../useThresholdColor'
import {
  RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD,
  RANGE_SLIDER_BG_COLOR,
} from '../constants'

interface StyledMarkerProps {
  $isActive?: boolean
  $thresholdColor?: ThresholdColor
  $left: string
}

export const StyledMarker = styled.div<StyledMarkerProps>`
  position: absolute;
  width: 6px;
  height: 6px;
  border-radius: 999px;
  transform: translate(-50%, -50%);
  pointer-events: none;
  background-color: ${RANGE_SLIDER_BG_COLOR};
  left: ${({ $left }) => $left};

  ${({ $isActive }) =>
    $isActive &&
    css`
      background-color: ${RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD};
    `}

  ${({ $thresholdColor }) =>
    $thresholdColor &&
    css`
      background-color: ${setLightness(0.85, $thresholdColor)};
    `}

  ${({ $isActive, $thresholdColor }) =>
    $isActive &&
    $thresholdColor &&
    css`
      background-color: ${$thresholdColor};
    `}
`
