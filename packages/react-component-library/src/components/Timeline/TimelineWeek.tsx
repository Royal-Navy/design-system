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
  render: (
    index: number,
    isOddNumber: boolean,
    offsetPx: string,
    widthPx: string,
    dayWidth: number,
    daysTotal: number,
    startDate: Date
  ) => React.ReactElement
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
      isOddNumber={isOddNumber}
      marginLeft={offsetPx}
      width={widthPx}
      data-testid="timeline-week"
    >
      <StyledWeekTitle>{format(startDate, DATE_WEEK_FORMAT)}</StyledWeekTitle>
    </StyledWeek>
  )
}

export const TimelineWeek: React.FC<TimelineWeekProps> = ({
  days,
  dayWidth,
  index,
  render,
  startDate,
  ...rest
}) => {
  const lastDateDisplayed = min([
    endOfWeek(startDate, { weekStartsOn: WEEK_START }),
    days[days.length - 1].date,
  ])
  const daysTotal = differenceInDays(lastDateDisplayed, startDate) + 1
  const offsetInDays = differenceInDays(
    startDate,
    max([startDate, days[0].date])
  )
  const offsetPx = formatPx(dayWidth, offsetInDays)
  const widthPx = formatPx(dayWidth, daysTotal)

  const isOddNumber = isOdd(index)

  const args = {
    index,
    isOddNumber,
    offsetPx,
    widthPx,
    dayWidth,
    daysTotal,
    startDate,
  }

  // @ts-ignore
  const child = render ? render(...Object.values(args)) : renderDefault(args)

  const title = `Week beginning ${format(startDate, ACCESSIBLE_DATE_FORMAT)}`

  return React.cloneElement(child, {
    title,
    'aria-label': title,
    role: 'columnheader',
    ...rest,
  })
}

TimelineWeek.displayName = 'TimelineWeek'
