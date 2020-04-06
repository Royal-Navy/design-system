import React from 'react'
import classNames from 'classnames'
import { differenceInDays } from 'date-fns'

import { getKey, isOdd } from './helpers'
import { TimelineContext } from './context'
import { TimelineEvent } from './context/types'
import { DAY_WIDTH } from './constants'
import { Event } from '.'

export interface RowProps extends ComponentWithClass {
  events: TimelineEvent[]
}

const RowWeeks: React.FC = () => {
  return (
    <div className="timeline__row-weeks">
      <TimelineContext.Consumer>
        {({ state: { months, weeks } }) => {
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
                style={{ marginLeft: `${offset * DAY_WIDTH}px` }}
              />
            )
          })
        }}
      </TimelineContext.Consumer>
    </div>
  )
}

const RowEvents: React.FC<RowProps> = ({ events }) => {
  return (
    <>
      {events &&
        events.map(({ startDate, endDate, status, title }, index) => {
          return (
            <Event
              startDate={startDate}
              endDate={endDate}
              status={status}
              key={getKey('timeline-event', index)}
              title={title}
            />
          )
        })}
    </>
  )
}

export const Row: React.FC<RowProps> = ({ events }) => {
  return (
    <div className="timeline__row">
      <RowWeeks />
      <RowEvents events={events} />
    </div>
  )
}

Row.displayName = 'Row'
