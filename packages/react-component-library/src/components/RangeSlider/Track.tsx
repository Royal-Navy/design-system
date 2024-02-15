import React from 'react'
import { TrackItem, GetTrackProps } from 'react-compound-slider'

import { StyledTrack } from './partials/StyledTrack'

interface TrackProps extends TrackItem {
  getTrackProps: GetTrackProps
}

export const Track = ({ source, target, getTrackProps }: TrackProps) => {
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
