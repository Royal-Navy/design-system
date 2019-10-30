import React from 'react'
import { GetHandleProps, SliderItem } from 'react-compound-slider'

interface HandleProps {
  activeHandleID: string
  domain: ReadonlyArray<number>
  handle: SliderItem
  getHandleProps: GetHandleProps
}

/* eslint-disable jsx-a11y/control-has-associated-label */
export const Handle: React.FC<HandleProps> = ({
  activeHandleID,
  domain: [min, max],
  handle: { id, value, percent },
  getHandleProps,
}) => {
  const active = activeHandleID === id

  return (
    <>
      <div
        className="rn-rangeslider__handle-outer"
        style={{ left: `${percent}%` }}
        {...getHandleProps(id)}
        data-testid="rangeslider-handle"
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        className={`rn-rangeslider__handle-inner ${active ? 'is-active' : ''}`}
        style={{ left: `${percent}%` }}
      />
    </>
  )
}
/* eslint-disable jsx-a11y/control-has-associated-label */

Handle.displayName = 'Handle'
