import React from 'react'

import {
  differenceInCalendarDays,
  endOfMonth,
  isBefore,
  isAfter,
} from 'date-fns'

import { DAY_WIDTH } from './constants'
import { TimelineContext } from './context'

export type TodayMarkerProps = ComponentWithClass

export const TodayMarker: React.FC<TodayMarkerProps> = () => {
  return (
    <TimelineContext.Consumer>
      {({ state: { today, months } }) => {
        const timelineStart = new Date(months[0].startDate)
        const timelineEnd = new Date(
          endOfMonth(months[months.length - 1].startDate)
        )
        const isBeforeStart = isBefore(new Date(today), timelineStart)
        const isAfterEnd = isAfter(new Date(today), timelineEnd)

        if (isBeforeStart || isAfterEnd) return

        const offset = differenceInCalendarDays(
          today,
          new Date(months[0].startDate)
        )

        // eslint-disable-next-line consistent-return
        return (
          <div
            className="timeline__today-marker"
            style={{ left: `${offset * DAY_WIDTH}px` }}
            data-testid="today-marker"
          />
        )
      }}
    </TimelineContext.Consumer>
  )
}

TodayMarker.displayName = 'TodayMarker'
