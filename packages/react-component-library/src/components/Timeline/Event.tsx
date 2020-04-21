import React from 'react'
import classNames from 'classnames'
import { format } from 'date-fns'

import { DAY_WIDTH } from './constants'
import { useTimelinePosition } from './hooks/useTimelinePosition'

export interface EventProps extends ComponentWithClass {
  children?: string
  endDate: Date
  startDate: Date
  status?: string
}

export const Event: React.FC<EventProps> = ({
  children,
  className,
  endDate,
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
      <span className="timeline__event-title" data-testid="event-title">
        {children || `Task ${format(new Date(startDate), 'dd/yyyy')}`}
      </span>
      <div
        className="timeline__event-bar"
        style={{ width: `${width * DAY_WIDTH}px` }}
      />
    </div>
  )
}

Event.displayName = 'Event'
