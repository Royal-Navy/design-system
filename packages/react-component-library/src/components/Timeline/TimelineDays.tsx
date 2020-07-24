import React from 'react'
import { format, isAfter } from 'date-fns'
import classNames from 'classnames'

import { getKey } from '../../helpers'
import { TimelineContext } from './context'
import { DATE_DAY_FORMAT } from './constants'

export interface TimelineDaysWithRenderContentProps {
  render: (index: number, dayWidth: number, date: Date) => React.ReactElement
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
      data-testid="timeline-day"
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
          endDate: timelineEndDate,
          options: { dayWidth },
        },
      }) => (
        <div className={classes} data-testid="timeline-days" role="row">
          {days &&
            days.map(({ date }, index) => {
              if (isAfter(date, timelineEndDate)) return null

              const child = render
                ? render(index, dayWidth, date)
                : renderDefault(index, dayWidth, date)

              return React.cloneElement(child, {
                key: getKey('timeline-day', date.toString()),
                role: 'columnheader',
              })
            })}
        </div>
      )}
    </TimelineContext.Consumer>
  )
}

TimelineDays.displayName = 'TimelineDays'
