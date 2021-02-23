import React, { useContext } from 'react'
import { format, endOfMonth, differenceInDays, min, max } from 'date-fns'

import { DATE_MONTH_FORMAT } from './constants'
import { StyledMonth } from './partials/StyledMonth'
import { StyledMonthMedium } from './partials/StyledMonthMedium'
import { StyledMonthSmall } from './partials/StyledMonthSmall'
import { StyledMonthTitle } from './partials/StyledMonthTitle'
import { StyledMonthTitleMedium } from './partials/StyledMonthTitleMedium'
import { StyledMonthTitleSmall } from './partials/StyledMonthTitleSmall'
import { TimelineDay } from './context/types'

const DECEMBER_INDEX = 11
const MONTH_SMALL_THRESHOLD = 30
const MONTH_MEDIUM_THRESHOLD = 100

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
  const width = dayWidth * daysTotal

  if (width < MONTH_SMALL_THRESHOLD) {
    return (
      <StyledMonthSmall
        $hasThickBorder={startDate.getMonth() === DECEMBER_INDEX}
        $width={width}
        data-testid="timeline-month"
      >
        <StyledMonthTitleSmall>
          {format(startDate, 'MMM')} {format(startDate, 'yyyy')}
        </StyledMonthTitleSmall>
      </StyledMonthSmall>
    )
  }

  if (width < MONTH_MEDIUM_THRESHOLD) {
    return (
      <StyledMonthMedium $width={width} data-testid="timeline-month">
        <StyledMonthTitleMedium>
          <span>{format(startDate, 'MMM')}</span>
          <span>{format(startDate, 'yyyy')}</span>
        </StyledMonthTitleMedium>
      </StyledMonthMedium>
    )
  }

  return (
    <StyledMonth $width={width} data-testid="timeline-month">
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
