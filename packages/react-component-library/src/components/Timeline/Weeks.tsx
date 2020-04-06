import React from 'react'
import classNames from 'classnames'
import { format, differenceInDays } from 'date-fns'

import { DAY_WIDTH, DATE_WEEK_FORMAT } from './constants'
import { getKey, isOdd } from './helpers'
import { TimelineContext } from './context'

export type WeeksProps = ComponentWithClass

export const Weeks: React.FC<WeeksProps> = () => {
  return (
    <div className="timeline__weeks">
      <TimelineContext.Consumer>
        {({ state: { months, weeks } }) => {
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
                style={{ marginLeft: `${offset * DAY_WIDTH}px` }}
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

Weeks.displayName = 'Weeks'
