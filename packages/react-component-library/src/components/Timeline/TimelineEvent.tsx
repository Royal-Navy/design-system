import React from 'react'
import classNames from 'classnames'
import { format } from 'date-fns'

import { useTimelinePosition } from './hooks/useTimelinePosition'

export interface TimelineEventWithRenderContentProps
  extends ComponentWithClass {
  children?: never
  endDate: Date
  render: (
    endDate: Date,
    startDate: Date,
    widthPx: string,
    offsetPx: string
  ) => React.ReactNode
  startDate: Date
}

export interface TimelineEventWithChildrenProps extends ComponentWithClass {
  children: string
  endDate: Date
  render?: never
  startDate: Date
}

export type TimelineEventProps =
  | TimelineEventWithRenderContentProps
  | TimelineEventWithChildrenProps

function renderDefault(
  children: string,
  offsetPx: string,
  startDate: Date,
  widthPx: string
) {
  const classes = classNames(
    'timeline__event',
    'timeline__event--renderDefault'
  )

  return (
    <div
      className={classes}
      style={{ left: offsetPx }}
      data-testid="timeline-event"
    >
      <span
        className="timeline__event-title"
        data-testid="timeline-event-title"
      >
        {children || `Task ${format(new Date(startDate), 'dd/mm/yyyy')}`}
      </span>
      <div className="timeline__event-bar" style={{ width: widthPx }} />
    </div>
  )
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({
  children,
  endDate,
  render,
  startDate,
}) => {
  const {
    offset: offsetPx,
    width: widthPx,
    isBeforeStart,
    isAfterEnd,
  } = useTimelinePosition(startDate, endDate)

  if (isBeforeStart || isAfterEnd) return null

  return (
    <div data-testid="timeline-event-wrapper">
      {render
        ? render(startDate, endDate, widthPx, offsetPx)
        : renderDefault(children, offsetPx, startDate, widthPx)}
    </div>
  )
}

TimelineEvent.displayName = 'TimelineEvent'
