import styled from 'styled-components'

import { RANGE_SLIDER_TRACK_COLOR } from '../constants'

interface StyledTrackProps {
  $left: string
  $width: string
}

export const StyledTrack = styled.div<StyledTrackProps>`
  position: absolute;
  transform: translate(0%, -50%);
  height: 2px;
  z-index: 1;
  background-color: ${RANGE_SLIDER_TRACK_COLOR};
  cursor: pointer;
  width: ${({ $width }) => $width};
  left: ${({ $left }) => $left};
`
