import styled from 'styled-components'
import { setLightness } from 'polished'

import { ThresholdColor } from '../useThresholdColor'

interface StyledRailChunkProps {
  $thresholdColor?: ThresholdColor
  $left: string
  $width: string
  $maxWidth: string
}

export const StyledRailChunk = styled.div.attrs<StyledRailChunkProps>(
  ({ $left, $width, $maxWidth }) => ({
    style: {
      left: $left,
      width: $width,
      maxWidth: $maxWidth,
    },
  })
)<StyledRailChunkProps>`
  position: absolute;
  top: 50%;
  transform: translate(0%, -50%);
  height: 2px;
  cursor: pointer;
  overflow-x: ${({ $maxWidth }) => ($maxWidth === '0%' ? 'hidden' : 'visible')};
  background-color: ${({ $thresholdColor }) =>
    setLightness(0.85, $thresholdColor)};

  svg {
    margin: 5px 5px;
    color: ${({ $thresholdColor }) => $thresholdColor};
  }
`
