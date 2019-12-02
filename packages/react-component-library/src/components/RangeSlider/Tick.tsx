import React from 'react'
import { SliderItem } from 'react-compound-slider'

interface TickProps {
  tick: SliderItem
  count: number
  hasLabels?: boolean
  values: ReadonlyArray<number>
  domain: ReadonlyArray<number>
  reversed?: boolean
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
  reversed,
}) => {
  const percent: number = reversed ? 100 - tick.percent : tick.percent // invert if reversed
  const tickValue: number = (domain[1] / 100) * percent
  const active: boolean = isActive(values, tickValue)

  return (
    <div data-testid="rangeslider-tick">
      <div
        className={`rn-rangeslider__tick ${active ? 'is-active' : ''}`}
        style={{ left: `${tick.percent}%` }}
      />
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
