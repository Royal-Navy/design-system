import React from 'react'
import classNames from 'classnames'
import { TrackItem, GetTrackProps } from 'react-compound-slider'

import { PropsWithClassName } from '../../types/PropsWithClassName'

interface ThresholdTrackProps extends TrackItem {
  getTrackProps: GetTrackProps
  thresholds?: number[]
}

interface ChunkProps extends PropsWithClassName {
  left: number
  width: number
  maxWidth: number
  testId: string
}

export const ThresholdTrack: React.FC<ThresholdTrackProps> = ({
  target,
  getTrackProps,
  thresholds,
}) => {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  const Chunk: React.FC<ChunkProps> = ({
    className,
    left,
    width,
    maxWidth,
    testId,
  }) => {
    const classes = classNames('rn-rangeslider__track', className)

    return (
      <div
        className={classes}
        style={{
          left: `${left}%`,
          width: `${width}%`,
          maxWidth: `${maxWidth}%`,
        }}
        {...getTrackProps()}
        data-testid={`rangeslider-chunk-${testId}`}
      />
    )
  }

  return (
    <>
      {(singleThreshold || doubleThreshold) && (
        <Chunk
          className="rn-rangeslider__track--below-first-threshold"
          left={0}
          width={target.percent}
          maxWidth={thresholds[0]}
          testId="below-first-threshold"
        />
      )}

      {doubleThreshold && (
        <Chunk
          className="rn-rangeslider__track--between-thresholds"
          left={thresholds[0]}
          width={thresholds[1] - thresholds[0]}
          maxWidth={Math.max(0, target.percent - thresholds[0])}
          testId="between-thresholds"
        />
      )}

      <Chunk
        className="rn-rangeslider__track--above-thresholds"
        left={thresholds[thresholds.length - 1]}
        width={target.percent - thresholds[thresholds.length - 1]}
        maxWidth={target.percent}
        testId="above-thresholds"
      />
    </>
  )
}

ThresholdTrack.displayName = 'ThresholdTrack'
