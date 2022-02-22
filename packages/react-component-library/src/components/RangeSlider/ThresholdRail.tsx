import React from 'react'
import { IconWarning, IconDangerous } from '@defencedigital/icon-library'

import { ThresholdColor } from './useThresholdColor'
import {
  RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD,
  RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS,
  RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS,
} from './constants'
import { StyledRailChunk } from './partials/StyledRailChunk'

export interface ThresholdRailProps {
  thresholds: number[]
}

export interface RailChunkProps {
  $left: number
  $width: number
  $maxWidth: number
  testId: string
  $thresholdColor: ThresholdColor
}

const RailChunk: React.FC<RailChunkProps> = ({
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

export const ThresholdRail: React.FC<ThresholdRailProps> = ({ thresholds }) => {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  return (
    <>
      {(singleThreshold || doubleThreshold) && (
        <RailChunk
          $thresholdColor={RANGE_SLIDER_TRACK_BELOW_FIRST_THRESHOLD}
          $left={0}
          $width={100}
          $maxWidth={thresholds[0]}
          testId="below-first-threshold"
        />
      )}

      {doubleThreshold && (
        <RailChunk
          $thresholdColor={RANGE_SLIDER_TRACK_BETWEEN_THRESHOLDS}
          $left={thresholds[0]}
          $width={Math.max(0, 100 - thresholds[0])}
          $maxWidth={Math.max(0, 100 - thresholds[0])}
          testId="between-thresholds"
        >
          <IconWarning />
        </RailChunk>
      )}

      <RailChunk
        $thresholdColor={RANGE_SLIDER_TRACK_ABOVE_THRESHOLDS}
        $left={thresholds[thresholds.length - 1]}
        $width={Math.max(0, 100 - thresholds[thresholds.length - 1])}
        $maxWidth={Math.max(0, 100 - thresholds[thresholds.length - 1])}
        testId="above-thresholds"
      >
        <IconDangerous />
      </RailChunk>
    </>
  )
}

ThresholdRail.displayName = 'ThresholdRail'
