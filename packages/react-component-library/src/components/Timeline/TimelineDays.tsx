import React from 'react'
import { format } from 'date-fns'
import classNames from 'classnames'

import { getKey } from './helpers'
import { TimelineContext } from './context'
import { DATE_DAY_FORMAT } from './constants'

export interface TimelineDaysWithRenderContentProps {
  render: (index: number, dayWidth: number, date: Date) => React.ReactNode
}

export interface TimelineDaysWithChildrenProps {
  render?: never
}

export type TimelineDaysProps =
  | TimelineDaysWithRenderContentProps
  | TimelineDaysWithChildrenProps

function renderDefault(index: number, dayWidth: number, date: Date) {
  const wrapperClasses = classNames(
    'timeline__day',
    'timeline__day--renderDefault'
  )

  const titleClasses = classNames(
    'timeline__day-title',
    'timeline__day-title--renderDefault'
  )

  return (
    <div
      className={wrapperClasses}
      key={getKey('timeline-day', index)}
      style={{
        width: `${dayWidth}px`,
      }}
    >
      <span className={titleClasses} data-testid="timeline-day-title">
        {format(date, DATE_DAY_FORMAT)}
      </span>
    </div>
  )
}

export const TimelineDays: React.FC<TimelineDaysProps> = ({ render }) => {
  const classes = classNames('timeline__days', {
    'timeline__days--renderDefault': !render,
  })

  return (
    <TimelineContext.Consumer>
      {({
        state: {
          days,
          options: { dayWidth },
        },
      }) => (
        <div className={classes} data-testid="timeline-days">
          {days &&
            days.map(({ date }, index) => {
              return render
                ? render(index, dayWidth, date)
                : renderDefault(index, dayWidth, date)
            })}
        </div>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineDays.displayName = 'TimelineDays'
