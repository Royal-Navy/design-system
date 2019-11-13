import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'

interface HandleProps {
  activeHandleID: string
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
}

export const Handle: React.FC<HandleProps> = ({
  activeHandleID,
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => {
  const active: boolean = activeHandleID === id

  return (
    <button
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      className={`rn-rangeslider__handle ${active ? 'is-active' : ''}`}
      style={{
        left: `${percent}%`,
      }}
      {...getHandleProps(id)}
      data-value={Math.floor(value)}
      data-testid="rangeslider-handle"
    />
  )
}

Handle.displayName = 'Handle'
