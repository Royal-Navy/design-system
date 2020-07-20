import {
  addMonths,
  subMonths,
  endOfMonth,
  eachDayOfInterval,
  eachMonthOfInterval,
  eachWeekOfInterval,
} from 'date-fns'

import {
  TimelineState,
  TimelineAction,
  TIMELINE_ACTIONS,
  TimelineMonth,
  TimelineWeek,
  TimelineDay,
} from './types'

import { WEEK_START } from '../constants'

export function getMonths(start: Date, end: Date): TimelineMonth[] {
  const months = eachMonthOfInterval({ start, end }).map(
    (date) => {
      return {
        monthIndex: date.getMonth(),
        startDate: date,
      }
    }
  )

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
  const days = eachDayOfInterval({ start, end }).map(
    (date) => {
      return {
        dayIndex: date.getDate() - 1,
        date,
      }
    }
  )

  return days
}

export function buildCalendar(
  startDate: Date,
  endDate: Date
): { months: TimelineMonth[]; weeks: TimelineWeek[]; days: TimelineDay[] } {
  return {
    months: getMonths(startDate, endDate),
    weeks: getWeeks(startDate, endDate),
    days: getDays(startDate, endDate),
  }
}

export function reducer(
  state: TimelineState,
  action: TimelineAction
): TimelineState | never {
  const { months, options: { rangeInMonths: range } } = state
  const firstMonthOfRange = months[0].startDate
  const lastMonthOfRange = addMonths(months[0].startDate, range - 1)

  switch (action.type) {
    case TIMELINE_ACTIONS.GET_NEXT:
      return {
        ...state,
        startDate: addMonths(firstMonthOfRange, range),
        endDate: null,
        ...buildCalendar(
          addMonths(firstMonthOfRange, range),
          endOfMonth(addMonths(lastMonthOfRange, range))
        ),
      }
    case TIMELINE_ACTIONS.GET_PREV:
      return {
        ...state,
        startDate: subMonths(firstMonthOfRange, range),
        endDate: null,
        ...buildCalendar(
          subMonths(firstMonthOfRange, range),
          endOfMonth(subMonths(lastMonthOfRange, range))
        ),
      }
    default:
      throw new Error('Unknown reducer action')
  }
}
