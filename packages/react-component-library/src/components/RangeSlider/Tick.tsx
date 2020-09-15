import React from 'react'
import { SliderItem } from 'react-compound-slider'
import classNames from 'classnames'

import { useThresholdClasses } from './useThresholdClasses'

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
    ...useThresholdClasses(percent, thresholds, 'tick'),
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
