import React from 'react'
import classNames from 'classnames'
import { format, differenceInDays } from 'date-fns'

import { DATE_WEEK_FORMAT } from './constants'
import { formatPx, getKey, isOdd } from './helpers'
import { TimelineContext } from './context'

export type TimelineWeeksProps = ComponentWithClass

export const TimelineWeeks: React.FC<TimelineWeeksProps> = () => {
  return (
    <div className="timeline__weeks">
      <TimelineContext.Consumer>
        {({ state: { months, weeks, options } }) => {
          return weeks.map(({ startDate }, index) => {
            const diff = differenceInDays(
              new Date(startDate),
              new Date(months[0].startDate)
            )

            const offset = diff < 0 ? -Math.abs(diff) : 0

            const classes = classNames('timeline__week', {
              'timeline__week--alt': isOdd(index),
            })

            return (
              <div
                className={classes}
                key={getKey('timeline-week', index)}
                style={{
                  marginLeft: formatPx(options.dayWidth, offset),
                  width: formatPx(options.dayWidth, 7),
                }}
                data-testid="timeline-week"
              >
                <span className="timeline__week-title">
                  {format(startDate, DATE_WEEK_FORMAT)}
                </span>
              </div>
            )
          })
        }}
      </TimelineContext.Consumer>
    </div>
  )
}

TimelineWeeks.displayName = 'TimelineWeeks'
