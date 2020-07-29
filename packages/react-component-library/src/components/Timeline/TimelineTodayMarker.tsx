import React, { useContext } from 'react'
import classNames from 'classnames'

import { TimelineContext } from './context'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export interface TimelineTodayMarkerWithRenderContentProps
  extends ComponentWithClass {
  render: (today: Date, offset: string) => React.ReactNode
}

export interface TimelineTodayMarkerWithChildrenProps
  extends ComponentWithClass {
  render?: never
}

export type TimelineTodayMarkerProps =
  | TimelineTodayMarkerWithRenderContentProps
  | TimelineTodayMarkerWithChildrenProps

function renderDefault(offset: string) {
  const classes = classNames(
    'timeline__today-marker',
    'timeline__today-marker--renderDefault'
  )

  return <div style={{ left: offset }} className={classes} />
}

export const TimelineTodayMarker: React.FC<TimelineTodayMarkerProps> = ({
  render,
}) => {
  const {
    state: { today },
  } = useContext(TimelineContext)

  const { offset, isBeforeStart, isAfterEnd } = useTimelinePosition(today, null)

  if (isBeforeStart || isAfterEnd) return null

  return (
    <div data-testid="timeline-today-marker-wrapper" role="presentation">
      {render ? render(today, offset) : renderDefault(offset)}
    </div>
  )
}

TimelineTodayMarker.displayName = 'TimelineTodayMarker'
