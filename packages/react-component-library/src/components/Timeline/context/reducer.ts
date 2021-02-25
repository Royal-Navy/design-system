import {
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
} from 'date-fns'
import { padStart } from 'lodash'

import {
  TimelineState,
  TimelineAction,
  TimelineMonth,
  TimelineWeek,
  TimelineDay,
  TimelineHour,
  TimelineScaleOption,
} from './types'

import { WEEK_START } from '../constants'

const HOURS_IN_DAY = 24

export function getMonths(start: Date, end: Date): TimelineMonth[] {
  const months = eachMonthOfInterval({ start, end }).map((date) => {
    return {
      monthIndex: date.getMonth(),
      startDate: date,
    }
  })

  return months
}

export function getWeeks(start: Date, end: Date): TimelineWeek[] {
  const interval = { start, end }
  const weeks = eachWeekOfInterval(interval, { weekStartsOn: WEEK_START }).map(
    (date, weekIndex) => {
      return {
        weekIndex,
        startDate: date,
      }
    }
  )

  return weeks
}

export function getDays(start: Date, end: Date): TimelineDay[] {
  const days = eachDayOfInterval({ start, end }).map((date) => {
    return {
      dayIndex: date.getDate() - 1,
      date,
    }
  })

  return days
}

export function getHours(blockSize: number): TimelineHour[] {
  if (!blockSize) {
    return []
  }

  const numberOfBlocks = HOURS_IN_DAY / blockSize
  return Array.from(Array(numberOfBlocks).keys()).map((blockNumber) => {
    const timeHours = blockNumber * blockSize

    return {
      hourIndex: blockNumber,
      time: `${padStart(timeHours.toString(), 2, '0')}:00`,
    }
  })
}

export function buildCalendar({
  from,
  to,
  hoursBlockSize,
}: TimelineScaleOption): {
  months: TimelineMonth[]
  weeks: TimelineWeek[]
  days: TimelineDay[]
  hours: TimelineHour[]
} {
  return {
    months: getMonths(from, to),
    weeks: getWeeks(from, to),
    days: getDays(from, to),
    hours: getHours(hoursBlockSize),
  }
}

export function reducer(
  state: TimelineState,
  action: TimelineAction
): TimelineState | never {
  const { scale } = action

  return {
    ...state,
    ...buildCalendar(scale),
    currentScaleOption: scale,
  }
}
