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

export const Tick: React.FC<TickProps> = ({
  tick,
  count,
  hasLabels,
  values,
  domain,
  reversed,
}) => {
  const percent = reversed ? 100 - tick.percent : tick.percent // Invert if reversed
  const tickValue = (domain[1] / 100) * percent

  let active = values[0] >= tickValue

  // TODO: Need to figure out logic for multiple values (handles)
  if (values.length > 1) active = false

  return (
    <div>
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
        >
          {tick.value}
        </span>
      )}
    </div>
  )
}

Tick.displayName = 'Tick'
