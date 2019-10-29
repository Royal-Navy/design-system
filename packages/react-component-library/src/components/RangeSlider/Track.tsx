import React from 'react'
import { TrackItem, GetTrackProps } from 'react-compound-slider'

interface TrackProps extends TrackItem {
  getTrackProps: GetTrackProps
}

export const Track: React.FC<TrackProps> = ({
  source,
  target,
  getTrackProps,
}) => {
  return (
    <div
      className="rn-rangeslider__track"
      style={{
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  )
}

Track.displayName = 'Track'
