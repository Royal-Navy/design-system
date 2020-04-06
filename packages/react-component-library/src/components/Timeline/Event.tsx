import React from 'react'
import classNames from 'classnames'

import {
  format,
  differenceInCalendarDays,
  isBefore,
  isAfter,
  endOfMonth,
} from 'date-fns'

import { DAY_WIDTH } from './constants'
import { TimelineContext } from './context'

export interface EventProps extends ComponentWithClass {
  startDate: Date
  endDate: Date
  status?: string
  title?: string
}

export const Event: React.FC<EventProps> = ({
  startDate,
  endDate,
  status,
  title,
}) => {
  return (
    <TimelineContext.Consumer>
      {({ state: { months } }) => {
        const timelineStart = new Date(months[0].startDate)
        const timelineEnd = new Date(
          endOfMonth(months[months.length - 1].startDate)
        )
        const isBeforeStart = isBefore(new Date(startDate), timelineStart)
        const isAfterEnd = isAfter(new Date(startDate), timelineEnd)

        if (isBeforeStart || isAfterEnd) return

        const offset = differenceInCalendarDays(
          new Date(startDate),
          new Date(timelineStart)
        )

        const width =
          differenceInCalendarDays(new Date(endDate), new Date(startDate)) + 1 // End day === full day

        const classes = classNames('timeline__event', {
          [`timeline__event--${status ? status.toLowerCase() : ''}`]: status,
        })

        // eslint-disable-next-line consistent-return
        return (
          <div
            className={classes}
            style={{ left: `${offset * DAY_WIDTH}px` }}
            data-testid="event-wrapper"
          >
            <span className="timeline__event-title" data-testid="event-title">
              {title || `Task ${format(new Date(startDate), 'dd/yyyy')}`}
            </span>
            <div
              className="timeline__event-bar"
              style={{ width: `${width * DAY_WIDTH}px` }}
            />
          </div>
        )
      }}
    </TimelineContext.Consumer>
  )
}

Event.displayName = 'Event'
