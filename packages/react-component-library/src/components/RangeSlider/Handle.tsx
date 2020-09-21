import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'
import classNames from 'classnames'

import { useThresholdClasses } from './useThresholdClasses'

interface HandleProps {
  activeHandleID: string
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
  displayUnit?: string
  thresholds?: number[]
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
    ...useThresholdClasses(percent, thresholds, 'handle'),
  })

  return (
    <div
      tabIndex={0}
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
