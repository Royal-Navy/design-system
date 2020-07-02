import { useContext } from 'react'

import {
  differenceInCalendarDays,
  endOfMonth,
  isBefore,
  isAfter
} from 'date-fns'

import { TimelineContext } from '../context'

import { formatPx } from '../helpers'

function getWidth (
  startDate: Date,
  endDate: Date
): number {
  return differenceInCalendarDays(
    new Date(endDate),
    new Date(startDate)
  )
}

function getOffset (
  startDate: Date,
  timelineStart: Date
): number {
  return differenceInCalendarDays(
    new Date(startDate),
    new Date(timelineStart)
  )
}

export function useTimelinePosition(
  startDate: Date,
  endDate: Date
) {
  const {
    state: {
      startDate: timelineStartDate,
      endDate: timelineEndDate,
      months,
      options
    }
  } = useContext(TimelineContext)

  const timelineStart = new Date(months[0].startDate)
  const timelineEnd = new Date(endOfMonth(months[months.length - 1].startDate))

  const isBeforeStart = isBefore(new Date(startDate), timelineStart)
  const isAfterEnd = isAfter(new Date(startDate), timelineEnd)

  const width = formatPx(options.dayWidth, getWidth(startDate, endDate))
  const offset = formatPx(options.dayWidth, getOffset(startDate, timelineStart))

  return {
    width,
    offset,
    isBeforeStart,
    isAfterEnd
  }
}
