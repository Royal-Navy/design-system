import React from 'react'
import { format, isAfter } from 'date-fns'
import classNames from 'classnames'

import { DATE_DAY_FORMAT } from './constants'

interface TimelineDayProps {
  date: Date
  dayWidth: number
  index: number
  render: (index: number, dayWidth: number, date: Date) => React.ReactElement
  timelineEndDate: Date
}

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

export const TimelineDay: React.FC<TimelineDayProps> = ({
  date,
  dayWidth,
  index,
  render,
  timelineEndDate,
  ...rest
}) => {
  if (isAfter(date, timelineEndDate)) return null

  const child = render
    ? render(index, dayWidth, date)
    : renderDefault(index, dayWidth, date)

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineDay.displayName = 'TimelineDay'
