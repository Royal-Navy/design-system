import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import { ThresholdColor } from '../useThresholdColor'
import { RANGE_SLIDER_TRACK_COLOR } from '../constants'

interface StyledChunkProps {
  $thresholdColor?: ThresholdColor
  $left: string
  $width: string
  $maxWidth: string
}

export const StyledChunk = styled.div.attrs<StyledChunkProps>(
  ({ $left, $width, $maxWidth }) => ({
    style: {
      left: $left,
      width: $width,
      maxWidth: $maxWidth,
    },
  })
)<StyledChunkProps>`
  position: absolute;
  transform: translate(0%, -50%);
  height: 6px;
  z-index: 1;
  background-color: ${RANGE_SLIDER_TRACK_COLOR};
  cursor: pointer;

  ${({ $thresholdColor }) => css`
    background-color: ${$thresholdColor};

    &::after {
      color: ${$thresholdColor};
      background-color: ${transparentize(0.75, $thresholdColor)};
    }
  `}
`
