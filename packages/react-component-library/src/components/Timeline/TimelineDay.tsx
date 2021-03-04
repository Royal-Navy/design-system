import React from 'react'
import { format, isAfter } from 'date-fns'

import { DATE_DAY_FORMAT } from './constants'
import { StyledDay } from './partials/StyledDay'
import { StyledDayTitle } from './partials/StyledDayTitle'

const DAY_DISPLAY_THRESHOLD = 29

interface TimelineDayProps {
  date: Date
  dayWidth: number
  index: number
  render: (index: number, dayWidth: number, date: Date) => React.ReactElement
  timelineEndDate: Date
}

function renderDefault({ dayWidth, date }: { dayWidth: number; date: Date }) {
  return (
    <StyledDay $width={dayWidth} data-testid="timeline-day">
      <StyledDayTitle data-testid="timeline-day-title">
        {format(date, DATE_DAY_FORMAT)}
      </StyledDayTitle>
    </StyledDay>
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
  if (isAfter(date, timelineEndDate) || dayWidth < DAY_DISPLAY_THRESHOLD) {
    return null
  }

  const child = render
    ? render(index, dayWidth, date)
    : renderDefault({ dayWidth, date })

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineDay.displayName = 'TimelineDay'
