import React from 'react'
import { SliderItem } from 'react-compound-slider'

interface TickProps {
  tick: SliderItem
  count: number
  hasLabels?: boolean
  values: ReadonlyArray<number>
  domain: ReadonlyArray<number>
}

export const Tick: React.FC<TickProps> = ({
  tick,
  count,
  hasLabels,
  values,
  domain,
}) => {
  const tickValue = (domain[1] / 100) * tick.percent
  const active = values[0] >= tickValue

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
