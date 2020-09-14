import React from 'react'
import { SliderItem } from 'react-compound-slider'
import classNames from 'classnames'

interface TickProps {
  tick: SliderItem
  count: number
  hasLabels?: boolean
  values: ReadonlyArray<number>
  domain: ReadonlyArray<number>
  isReversed?: boolean
  thresholds?: number[]
}

function isActive(values: ReadonlyArray<number>, tickValue: number): boolean {
  return values.some((item) => item >= tickValue)
}

function getThresholdClasses(percent: number, thresholds: number[]) {
  const singleThreshold = thresholds?.length === 1
  const doubleThreshold = thresholds?.length === 2

  return {
    'rn-rangeslider__tick--below-first-threshold':
      (singleThreshold || doubleThreshold) && percent <= thresholds[0],
    'rn-rangeslider__tick--between-thresholds':
      doubleThreshold && percent < thresholds[1] && percent >= thresholds[0],
    'rn-rangeslider__tick--above-thresholds':
      (singleThreshold || doubleThreshold) &&
      percent >= thresholds[thresholds.length - 1],
  }
}

export const Tick: React.FC<TickProps> = ({
  tick,
  count,
  hasLabels,
  values,
  domain,
  isReversed,
  thresholds,
}) => {
  const percent: number = isReversed ? 100 - tick.percent : tick.percent // invert if reversed
  const tickValue: number = (domain[1] / 100) * percent

  const tickClasses = classNames('rn-rangeslider__tick', {
    'is-active': isActive(values, tickValue),
    ...getThresholdClasses(percent, thresholds),
  })

  return (
    <div data-testid="rangeslider-tick">
      <div className={tickClasses} style={{ left: `${tick.percent}%` }} />
      {hasLabels && (
        <span
          className="rn-rangeslider__label"
          style={{
            marginLeft: `${-(100 / count) / 2}%`,
            width: `${100 / count}%`,
            left: `${tick.percent}%`,
          }}
          data-testid="rangeslider-label"
        >
          {tick.value}
        </span>
      )}
    </div>
  )
}

Tick.displayName = 'Tick'
