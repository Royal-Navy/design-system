import { useContext } from 'react'

import {
  differenceInSeconds,
  isBefore,
  isAfter,
} from 'date-fns'

import { TimelineContext } from '../context'
import { formatPx } from '../helpers'

const SECONDS_IN_DAY = 86400

function getWidth(startDate: Date, endDate: Date): number {
  return (
    differenceInSeconds(new Date(endDate), new Date(startDate)) /
    SECONDS_IN_DAY
  )
}

function getOffset(startDate: Date, timelineStart: Date): number {
  return (
    differenceInSeconds(new Date(startDate), new Date(timelineStart)) /
    SECONDS_IN_DAY
  )
}

export function useTimelinePosition(
  startDate: Date,
  endDate: Date
): {
  width: string
  offset: string
  isBeforeStart: boolean
  isAfterEnd: boolean
} {
  const {
    state: { days, options },
  } = useContext(TimelineContext)

  const firstDateDisplayed = days[0].date
  const lastDateDisplayed = days[days.length - 1].date

  const isBeforeStart = isBefore(new Date(startDate), firstDateDisplayed)
  const isAfterEnd = isAfter(new Date(startDate), lastDateDisplayed)

  const width = formatPx(options.dayWidth, getWidth(startDate, endDate))
  const offset = formatPx(
    options.dayWidth,
    getOffset(startDate, firstDateDisplayed)
  )

  return {
    width,
    offset,
    isBeforeStart,
    isAfterEnd,
  }
}
