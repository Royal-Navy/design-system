import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'
import classNames from 'classnames'

interface HandleProps {
  activeHandleID: string
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
  displayUnit?: string
  thresholds?: number[]
}

function getThresholdClasses(percent: number, thresholds: number[]) {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  return {
    'rn-rangeslider__handle--below-first-threshold':
      (singleThreshold || doubleThreshold) && percent <= thresholds[0],
    'rn-rangeslider__handle--between-thresholds':
      doubleThreshold && percent < thresholds[1] && percent >= thresholds[0],
    'rn-rangeslider__handle--above-thresholds':
      (singleThreshold || doubleThreshold) &&
      percent >= thresholds[thresholds.length - 1],
  }
}

export const Handle: React.FC<HandleProps> = ({
  activeHandleID,
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
  displayUnit,
  thresholds,
}) => {
  const isActive: boolean = activeHandleID === id

  const classes = classNames('rn-rangeslider__handle', {
    'is-active': isActive,
    ...getThresholdClasses(percent, thresholds),
  })

  return (
    <div
      role="slider"
      aria-label="Select range"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      className={classes}
      style={{
        left: `${percent}%`,
      }}
      {...getHandleProps(id)}
      data-value={`${Math.floor(value)}${displayUnit || ''}`}
      data-percent={`${Math.floor(percent)}%`}
      data-testid="rangeslider-handle"
    />
  )
}

Handle.displayName = 'Handle'
