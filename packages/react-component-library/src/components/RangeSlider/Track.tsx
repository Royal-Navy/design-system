import React from 'react'
import { TrackItem, GetTrackProps } from 'react-compound-slider'

import { StyledTrack } from './partials/StyledTrack'

interface TrackProps extends TrackItem {
  getTrackProps: GetTrackProps
}

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
