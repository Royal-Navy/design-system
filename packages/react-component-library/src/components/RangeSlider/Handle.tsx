import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'
import classNames from 'classnames'

import { useThresholdClasses } from './useThresholdClasses'
import { RangeSliderPositionBag, RangeSliderValueFormatter } from '.'

interface HandleProps {
  activeHandleID: string
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
  formatValue: RangeSliderValueFormatter
  thresholds?: number[]
}

export const Handle: React.FC<HandleProps> = ({
  activeHandleID,
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
  thresholds,
  formatValue,
}) => {
  const isActive: boolean = activeHandleID === id

  const classes = classNames('rn-rangeslider__handle', {
    'is-active': isActive,
    ...useThresholdClasses(percent, thresholds, 'handle'),
  })

  const positionBag: RangeSliderPositionBag = {
    value,
    percentage: percent,
  }

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
      data-value={formatValue(positionBag)}
      data-percent={`${Math.floor(percent)}%`}
      data-testid="rangeslider-handle"
    />
  )
}

Handle.displayName = 'Handle'
