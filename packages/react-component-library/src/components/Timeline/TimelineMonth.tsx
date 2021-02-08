import React from 'react'
import { format, endOfMonth, differenceInDays, min, max } from 'date-fns'

import { DATE_MONTH_FORMAT } from './constants'
import { formatPx } from './helpers'
import { StyledMonth } from './partials/StyledMonth'
import { StyledMonthTitle } from './partials/StyledMonthTitle'
import { TimelineDay } from './context/types'

interface TimelineMonthProps {
  days: TimelineDay[]
  dayWidth: number
  index: number
  render: (
    index: number,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactElement
  startDate: Date
}

function renderDefault({
  dayWidth,
  daysTotal,
  startDate,
}: {
  dayWidth: number
  daysTotal: number
  startDate: Date
}): React.ReactElement {
  return (
    <StyledMonth
      style={{
        width: formatPx(dayWidth, daysTotal),
      }}
      data-testid="timeline-month"
    >
      <StyledMonthTitle>
        {format(startDate, DATE_MONTH_FORMAT)}
      </StyledMonthTitle>
    </StyledMonth>
  )
}

export const TimelineMonth: React.FC<TimelineMonthProps> = ({
  days,
  dayWidth,
  index,
  render,
  startDate,
  ...rest
}) => {
  const firstDateDisplayed = max([startDate, days[0].date])
  const lastDateDisplayed = min([
    endOfMonth(startDate),
    days[days.length - 1].date,
  ])
  const daysTotal = differenceInDays(lastDateDisplayed, firstDateDisplayed) + 1

  const child = render
    ? render(index, dayWidth, daysTotal, startDate)
    : renderDefault({ dayWidth, daysTotal, startDate })

  return React.cloneElement(child, {
    role: 'columnheader',
    ...rest,
  })
}

TimelineMonth.displayName = 'TimelineMonth'
