import React from 'react'
import { TrackItem, GetTrackProps } from 'react-compound-slider'

import { StyledTrack } from './partials/StyledTrack'

interface TrackEProps extends TrackItem {
  getTrackProps: GetTrackProps
}

export const TrackE: React.FC<TrackEProps> = ({
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

TrackE.displayName = 'TrackE'
