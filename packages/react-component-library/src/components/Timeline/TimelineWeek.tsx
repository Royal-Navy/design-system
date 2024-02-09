import React from 'react'
import { format, differenceInDays, endOfWeek, max, min } from 'date-fns'

import {
  ACCESSIBLE_DATE_FORMAT,
  DATE_WEEK_FORMAT,
  WEEK_START,
} from './constants'
import { formatPx, isOdd } from './helpers'
import { StyledWeekTitle } from './partials/StyledWeekTitle'
import { StyledWeek } from './partials/StyledWeek'
import { TimelineDay } from './context/types'

interface TimelineWeekProps {
  days: TimelineDay[]
  dayWidth: number
  index: number
  render?: (props: {
    index: number
    isOddNumber: boolean
    offsetPx: string
    widthPx: string
    dayWidth: number
    daysTotal: number
    startDate: Date
  }) => React.ReactElement
  startDate: Date
}

function renderDefault({
  isOddNumber,
  offsetPx,
  widthPx,
  startDate,
}: {
  isOddNumber: boolean
  offsetPx: string
  widthPx: string
  startDate: Date
}) {
  return (
    <StyledWeek
      $isOddNumber={isOddNumber}
      $marginLeftPx={offsetPx}
      $widthPx={widthPx}
      data-testid="timeline-week"
    >
      <StyledWeekTitle>{format(startDate, DATE_WEEK_FORMAT)}</StyledWeekTitle>
    </StyledWeek>
  )
}

function getOffset(startDate: Date, days: TimelineDay[], dayWidth: number) {
  const offsetInDays = differenceInDays(
    startDate,
    max([startDate, days[0].date])
  )

  return formatPx(dayWidth, offsetInDays)
}

function getWidth(startDate: Date, days: TimelineDay[], dayWidth: number) {
  const lastDateDisplayed = min([
    endOfWeek(startDate, { weekStartsOn: WEEK_START }),
    days[days.length - 1].date,
  ])
  const daysTotal = differenceInDays(lastDateDisplayed, startDate) + 1

  return {
    daysTotal,
    widthPx: formatPx(dayWidth, daysTotal),
  }
}

export const TimelineWeek = ({
  days,
  dayWidth,
  index,
  render,
  startDate,
  ...rest
}: TimelineWeekProps) => {
  const isOddNumber = isOdd(index)
  const { widthPx, daysTotal } = getWidth(startDate, days, dayWidth)

  const args = {
    index,
    isOddNumber,
    offsetPx: getOffset(startDate, days, dayWidth),
    widthPx,
    dayWidth,
    daysTotal,
    startDate,
  }

  const child = render ? render(args) : renderDefault(args)

  const title = `Week beginning ${format(startDate, ACCESSIBLE_DATE_FORMAT)}`

  return React.cloneElement(child, {
    title,
    'aria-label': title,
    role: 'columnheader',
    ...rest,
  })
}

TimelineWeek.displayName = 'TimelineWeek'
