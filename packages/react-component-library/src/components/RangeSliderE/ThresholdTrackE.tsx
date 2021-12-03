import React from 'react'
import { TrackItem, GetTrackProps } from 'react-compound-slider'

import { ThresholdColor } from './useThresholdColor'
import {
  RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD,
  RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS,
  RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS,
} from './constants'
import { StyledChunk } from './partials/StyledChunk'

export interface ThresholdTrackEProps extends TrackItem {
  getTrackProps: GetTrackProps
  thresholds?: number[]
}

export interface ChunkEProps {
  $left: number
  $width: number
  $maxWidth: number
  testId: string
  $thresholdColor?: ThresholdColor
}

export const ThresholdTrackE: React.FC<ThresholdTrackEProps> = ({
  target,
  getTrackProps,
  thresholds,
}) => {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  const ChunkE: React.FC<ChunkEProps> = ({
    $left,
    $width,
    $maxWidth,
    testId,
    $thresholdColor,
  }) => {
    return (
      <StyledChunk
        $thresholdColor={$thresholdColor}
        $left={`${$left}%`}
        $width={`${$width}%`}
        $maxWidth={`${$maxWidth}%`}
        {...getTrackProps()}
        data-testid={`rangeslider-chunk-${testId}`}
      />
    )
  }

  return (
    <>
      {(singleThreshold || doubleThreshold) && (
        <ChunkE
          $thresholdColor={RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD}
          $left={0}
          $width={target.percent}
          $maxWidth={thresholds[0]}
          testId="below-first-threshold"
        />
      )}

      {doubleThreshold && (
        <ChunkE
          $thresholdColor={RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS}
          $left={thresholds[0]}
          $width={thresholds[1] - thresholds[0]}
          $maxWidth={Math.max(0, target.percent - thresholds[0])}
          testId="between-thresholds"
        />
      )}

      <ChunkE
        $thresholdColor={RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS}
        $left={thresholds[thresholds.length - 1]}
        $width={target.percent - thresholds[thresholds.length - 1]}
        $maxWidth={target.percent}
        testId="above-thresholds"
      />
    </>
  )
}

ThresholdTrackE.displayName = 'ThresholdTrackE'
