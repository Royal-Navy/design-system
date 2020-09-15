import React from 'react'
import { isAfter } from 'date-fns'
import classNames from 'classnames'

interface TimelineHourProps {
  date: Date
  time: string
  timelineEndDate: Date
  width: number
}

function renderDefault(width: number, time: string) {
  const wrapperClasses = classNames(
    'timeline__hour',
    'timeline__hour--renderDefault'
  )

  const titleClasses = classNames(
    'timeline__hour-title',
    'timeline__hour-title--renderDefault'
  )

  return (
    <div
      className={wrapperClasses}
      data-testid="timeline-hour"
      style={{
        width: `${width}px`,
      }}
    >
      <span className={titleClasses} data-testid="timeline-hour-title">
        {time}
      </span>
    </div>
  )
}

export const TimelineHour: React.FC<TimelineHourProps> = ({
  date,
  time,
  timelineEndDate,
  width,
  ...rest
}) => {
  if (isAfter(date, timelineEndDate)) return null

  const child = renderDefault(width, time)

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineHour.displayName = 'TimelineHour'
