import React from 'react'
import { TrackItem, GetTrackProps } from 'react-compound-slider'

import { ThresholdColor } from './useThresholdColor'
import {
  RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD,
  RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS,
  RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS,
} from './constants'
import { StyledTrackChunk } from './partials/StyledTrackChunk'

export interface ThresholdTrackProps extends TrackItem {
  getTrackProps: GetTrackProps
  thresholds: number[]
}

export interface TrackChunkProps {
  getTrackProps: GetTrackProps
  $left: number
  $width: number
  $maxWidth: number
  testId: string
  $thresholdColor?: ThresholdColor
}

const TrackChunk: React.FC<TrackChunkProps> = ({
  getTrackProps,
  $left,
  $width,
  $maxWidth,
  testId,
  $thresholdColor,
}) => {
  return (
    <StyledTrackChunk
      $thresholdColor={$thresholdColor}
      $left={`${$left}%`}
      $width={`${$width}%`}
      $maxWidth={`${$maxWidth}%`}
      {...getTrackProps()}
      data-testid={`rangeslider-track-${testId}`}
    />
  )
}

export const ThresholdTrack: React.FC<ThresholdTrackProps> = ({
  target,
  getTrackProps,
  thresholds,
}) => {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  return (
    <>
      {(singleThreshold || doubleThreshold) && (
        <TrackChunk
          $thresholdColor={RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD}
          $left={0}
          $width={target.percent}
          $maxWidth={thresholds[0]}
          getTrackProps={getTrackProps}
          testId="below-first-threshold"
        />
      )}

      {doubleThreshold && (
        <TrackChunk
          $thresholdColor={RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS}
          $left={thresholds[0]}
          $width={Math.max(0, target.percent - thresholds[0])}
          $maxWidth={Math.max(0, target.percent - thresholds[0])}
          getTrackProps={getTrackProps}
          testId="between-thresholds"
        />
      )}

      <TrackChunk
        $thresholdColor={RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS}
        $left={thresholds[thresholds.length - 1]}
        $width={Math.max(0, target.percent - thresholds[thresholds.length - 1])}
        $maxWidth={Math.max(
          0,
          target.percent - thresholds[thresholds.length - 1]
        )}
        getTrackProps={getTrackProps}
        testId="above-thresholds"
      />
    </>
  )
}

ThresholdTrack.displayName = 'ThresholdTrack'
