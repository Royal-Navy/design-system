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
}

function isActive(values: ReadonlyArray<number>, tickValue: number): boolean {
  const valuesBelow = values.some(item => item <= tickValue)
  const valuesAbove = values.some(item => item >= tickValue)

  const belowSingleHandle = values.length === 1 && values[0] >= tickValue
  const betweenMultipleHandles = valuesBelow && valuesAbove

  return belowSingleHandle || betweenMultipleHandles
}

export const Tick: React.FC<TickProps> = ({
  tick,
  count,
  hasLabels,
  values,
  domain,
  isReversed,
}) => {
  const percent: number = isReversed ? 100 - tick.percent : tick.percent // invert if reversed
  const tickValue: number = (domain[1] / 100) * percent
  const tickClasses = classNames('rn-rangeslider__tick', {
    'is-active': isActive(values, tickValue),
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
