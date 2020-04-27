import React from 'react'
import classNames from 'classnames'
import { differenceInDays } from 'date-fns'

import { TimelineEventsProps } from '.'
import { formatPx, getKey, isOdd } from './helpers'
import { TimelineContext } from './context'

export interface TimelineRowProps extends ComponentWithClass {
  children:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
  name: string
}

const TimelineRowWeeks: React.FC = () => {
  return (
    <div className="timeline__row-weeks">
      <TimelineContext.Consumer>
        {({ state: { months, weeks, options } }) => {
          return weeks.map(({ startDate }, index) => {
            const diff = differenceInDays(
              new Date(startDate),
              new Date(months[0].startDate)
            )

            const offset = diff < 0 ? -Math.abs(diff) : 0

            const classes = classNames('timeline__row-week', {
              'timeline__row-week--alt': isOdd(index),
            })

            return (
              <div
                className={classes}
                key={getKey('timeline-row-week', index)}
                style={{
                  marginLeft: formatPx(options.dayWidth, offset),
                  width: formatPx(options.dayWidth, 7),
                }}
              />
            )
          })
        }}
      </TimelineContext.Consumer>
    </div>
  )
}

export const TimelineRow: React.FC<TimelineRowProps> = ({
  children,
  className,
}) => {
  const classes = classNames('timeline__row', className)
  return (
    <div className={classes} data-testid="timeline-row">
      <TimelineRowWeeks />
      {children}
    </div>
  )
}

TimelineRow.displayName = 'TimelineRow'
