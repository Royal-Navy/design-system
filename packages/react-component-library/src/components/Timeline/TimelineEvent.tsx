import React from 'react'
import classNames from 'classnames'
import { format } from 'date-fns'

import { DAY_WIDTH } from './constants'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export interface TimelineEventWithRenderContentProps
  extends ComponentWithClass {
  children?: never
  endDate: Date
  render: () => React.ReactNode
  startDate: Date
  status?: string
}

export interface TimelineEventWithChildrenProps extends ComponentWithClass {
  children: string
  endDate: Date
  render?: never
  startDate: Date
  status?: string
}

export type TimelineEventProps =
  | TimelineEventWithRenderContentProps
  | TimelineEventWithChildrenProps

function renderDefault(children: string, startDate: Date, width: number) {
  return (
    <>
      <span
        className="timeline__event-title"
        data-testid="timeline-event-title"
      >
        {children || `Task ${format(new Date(startDate), 'dd/yyyy')}`}
      </span>
      <div
        className="timeline__event-bar"
        style={{ width: `${width * DAY_WIDTH}px` }}
      />
    </>
  )
}

export const TimelineEvent: React.FC<TimelineEventProps> = ({
  children,
  className,
  endDate,
  render,
  startDate,
  status = '',
}) => {
  const { offset, width, isBeforeStart, isAfterEnd } = useTimelinePosition(
    startDate,
    endDate
  )

  if (isBeforeStart || isAfterEnd) return null

  const classes = classNames('timeline__event', {
    [`timeline__event--${status.toLowerCase()}`]: !!status,
    className,
  })

  return (
    <div
      className={classes}
      style={{ left: `${offset * DAY_WIDTH}px` }}
      data-testid="timeline-event-wrapper"
    >
      {render ? render() : renderDefault(children, startDate, width)}
    </div>
  )
}

TimelineEvent.displayName = 'TimelineEvent'
