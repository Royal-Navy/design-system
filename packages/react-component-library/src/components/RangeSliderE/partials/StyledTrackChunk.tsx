import styled from 'styled-components'
import { setLightness } from 'polished'

import { ThresholdColor } from '../useThresholdColor'

interface StyledTrackChunkProps {
  $thresholdColor?: ThresholdColor
  $left: string
  $width: string
  $maxWidth: string
}

export const StyledTrackChunk = styled.div.attrs<StyledTrackChunkProps>(
  ({ $left, $width, $maxWidth }) => ({
    style: {
      left: $left,
      width: $width,
      maxWidth: $maxWidth,
    },
  })
)<StyledTrackChunkProps>`
  position: absolute;
  transform: translate(0%, -50%);
  height: 6px;
  cursor: pointer;
  background-color: ${({ $thresholdColor }) =>
    setLightness(0.85, $thresholdColor)};

  &:not(:first-of-type) {
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      content: '';
      display: inline-block;
      width: 2px;
      height: 22px;
      background-color: ${({ $thresholdColor }) => $thresholdColor};
      border-radius: 6px;
    }
  }
`
