import React from 'react'
import classNames from 'classnames'
import { differenceInDays } from 'date-fns'

import { DAY_WIDTH } from './constants'
import { EventsProps } from '.'
import { getKey, isOdd } from './helpers'
import { TimelineContext } from './context'

export interface RowProps extends ComponentWithClass {
  children: React.ReactElement<EventsProps> | React.ReactElement<EventsProps>[]
  name: string
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

export const Row: React.FC<RowProps> = ({ children, className }) => {
  const classes = classNames('timeline__row', className)
  return (
    <div className={classes} data-testid="timeline-row">
      <RowWeeks />
      {children}
    </div>
  )
}

Row.displayName = 'Row'
