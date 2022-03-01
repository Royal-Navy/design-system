import { useContext } from 'react'

import { differenceInCalendarDays, endOfDay, isAfter, isBefore } from 'date-fns'

import { TimelineContext } from '../context'
import { formatPx } from '../helpers'

const timeOffset = (date: Date) => (1 / 24) * new Date(date).getHours()

function getWidth(startDate: Date, endDate: Date): number {
  return (
    differenceInCalendarDays(new Date(endDate), new Date(startDate)) -
    timeOffset(startDate) +
    timeOffset(endDate)
  )
}

function getOffset(startDate: Date, timelineStart: Date): number {
  return (
    differenceInCalendarDays(new Date(startDate), new Date(timelineStart)) +
    timeOffset(startDate)
  )
}

export function useTimelinePosition(
  startDate: Date,
  endDate: Date = startDate
): {
  endsAfterEnd: boolean
  endsBeforeStart: boolean
  maxWidth: string
  offset: string
  startsAfterEnd: boolean
  startsBeforeStart: boolean
  width: string
} {
  const {
    state: { currentScaleOption },
  } = useContext(TimelineContext)

  if (!currentScaleOption) {
    throw new Error('Timeline has no current scale option')
  }

  const { from: firstDateDisplayed, to: lastDateDisplayed } = currentScaleOption

  const startsBeforeStart = isBefore(startDate, firstDateDisplayed)
  const startsAfterEnd = isAfter(startDate, endOfDay(lastDateDisplayed))
  const endsBeforeStart = isBefore(endDate, firstDateDisplayed)
  const endsAfterEnd = isAfter(endDate, endOfDay(lastDateDisplayed))

  const width = startsBeforeStart
    ? getWidth(firstDateDisplayed, endDate)
    : getWidth(startDate, endDate)

  const offset = startsBeforeStart
    ? 0
    : getOffset(startDate, firstDateDisplayed)

  const maxWidth =
    startsBeforeStart && endsAfterEnd
      ? getWidth(firstDateDisplayed, lastDateDisplayed) + 1
      : getWidth(startDate, lastDateDisplayed) + 1

  return {
    endsAfterEnd,
    endsBeforeStart,
    startsAfterEnd,
    startsBeforeStart,
    maxWidth: formatPx(currentScaleOption.widths.day, maxWidth),
    offset: formatPx(currentScaleOption.widths.day, offset),
    width: formatPx(currentScaleOption.widths.day, width),
  }
}
