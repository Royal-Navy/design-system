import React from 'react'
import { TrackItem, GetTrackProps } from 'react-compound-slider'
import styled from 'styled-components'

import { RANGE_SLIDER_TRACK_COLOR } from './constants'

interface TrackProps extends TrackItem {
  getTrackProps: GetTrackProps
}

interface StyledTrackProps {
  $left: string
  $width: string
}

const StyledTrack = styled.div<StyledTrackProps>`
  position: absolute;
  transform: translate(0%, -50%);
  height: 2px;
  z-index: 1;
  background-color: ${RANGE_SLIDER_TRACK_COLOR};
  cursor: pointer;
  width: ${({ $width }) => $width};
  left: ${({ $left }) => $left};
`

export const Track: React.FC<TrackProps> = ({
  source,
  target,
  getTrackProps,
}) => {
  return (
    <StyledTrack
      $left={`${source.percent}%`}
      $width={`${target.percent - source.percent}%`}
      {...getTrackProps()}
      data-testid="rangeslider-track"
    />
  )
}

Track.displayName = 'Track'
