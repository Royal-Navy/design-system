import React from 'react'
import { IconWarning, IconDangerous } from '@defencedigital/icon-library'

import { ThresholdColor } from './useThresholdColor'
import {
  RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD,
  RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS,
  RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS,
} from './constants'
import { StyledRailChunk } from './partials/StyledRailChunk'

export interface ThresholdRailEProps {
  thresholds: number[]
}

export interface RailChunkEProps {
  $left: number
  $width: number
  $maxWidth: number
  testId: string
  $thresholdColor?: ThresholdColor
}

export const ThresholdRailE: React.FC<ThresholdRailEProps> = ({
  thresholds,
}) => {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  const RailChunkE: React.FC<RailChunkEProps> = ({
    $left,
    $width,
    $maxWidth,
    testId,
    $thresholdColor,
    children,
  }) => {
    return (
      <StyledRailChunk
        $thresholdColor={$thresholdColor}
        $left={`${$left}%`}
        $width={`${$width}%`}
        $maxWidth={`${$maxWidth}%`}
        data-testid={`rangeslider-rail-${testId}`}
      >
        {children}
      </StyledRailChunk>
    )
  }

  return (
    <>
      {(singleThreshold || doubleThreshold) && (
        <RailChunkE
          $thresholdColor={RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD}
          $left={0}
          $width={100}
          $maxWidth={thresholds[0]}
          testId="below-first-threshold"
        />
      )}

      {doubleThreshold && (
        <RailChunkE
          $thresholdColor={RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS}
          $left={thresholds[0]}
          $width={Math.max(0, 100 - thresholds[0])}
          $maxWidth={Math.max(0, 100 - thresholds[0])}
          testId="between-thresholds"
        >
          <IconWarning />
        </RailChunkE>
      )}

      <RailChunkE
        $thresholdColor={RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS}
        $left={thresholds[thresholds.length - 1]}
        $width={Math.max(0, 100 - thresholds[thresholds.length - 1])}
        $maxWidth={Math.max(0, 100 - thresholds[thresholds.length - 1])}
        testId="above-thresholds"
      >
        <IconDangerous />
      </RailChunkE>
    </>
  )
}

ThresholdRailE.displayName = 'ThresholdRailE'
