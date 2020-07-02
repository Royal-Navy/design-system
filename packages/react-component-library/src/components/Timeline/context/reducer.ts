import {
  addMonths,
  subMonths,
  getMonth,
  setMonth,
  startOfMonth,
  endOfMonth,
  differenceInCalendarWeeks,
  differenceInCalendarMonths,
  addWeeks,
  startOfWeek,
  getDaysInMonth,
  setDate,
  getYear,
} from 'date-fns'

import {
  TimelineState,
  TimelineAction,
  TIMELINE_ACTIONS,
  TimelineMonth,
  TimelineWeek,
  TimelineDay,
} from './types'

import {
  WEEK_START
} from '../constants'

export function getMonths(
  date: Date,
  rangeInMonths: number
): TimelineMonth[] {
  const months = Array.from({ length: rangeInMonths })
    .map((_, index) => {
      const monthIndex = getMonth(date) + index

      const newDate = setMonth(date, monthIndex)
      const startDate = startOfMonth(newDate)

      return {
        monthIndex,
        startDate
      }
    })

  return months
}

export function getWeeks(
  date: Date,
  rangeInMonths: number
): TimelineWeek[] {
  const months = getMonths(date, rangeInMonths)

  const startDate = months[0].startDate
  const endDate = endOfMonth(months[months.length - 1].startDate)

  const diffInWeeks = differenceInCalendarWeeks(endDate, startDate)

  const weeks = Array.from({ length: diffInWeeks + 1 })
    .map((_, weekIndex) => {
      const weekStart = startOfWeek(
        addWeeks(startDate, weekIndex),
        { weekStartsOn: WEEK_START }
      )

      return {
        weekIndex,
        startDate: weekStart
      }
    })

  return weeks
}

export function getDays(
  date: Date,
  rangeInMonths: number
): TimelineDay[] {
  const months = getMonths(date, rangeInMonths)
  const year = getYear(date)

  const days = months.flatMap(({ monthIndex }) => {
    const total = getDaysInMonth(new Date(year, monthIndex))
    const arr = [...Array(total).keys()].map(i => i + 1) // [1, ..., ~31]

    return arr.map((day, dayIndex) => {
      return {
        dayIndex,
        date: setDate(setMonth(date, monthIndex), day)
      }
    })
  })

  return days
}

export function calcRange(
  startDate: Date,
  endDate: Date
): number {
  return differenceInCalendarMonths(
    startOfMonth(addMonths(endDate, 1)),
    startOfMonth(startDate)
  )
}

export function reducer(
  state: TimelineState,
  action: TimelineAction
): TimelineState | never {
  const { startDate, options: { rangeInMonths: range } } = state

  switch (action.type) {
    case TIMELINE_ACTIONS.GET_NEXT:
      return {
        ...state,
        startDate: addMonths(startDate, range),
        endDate: null,
        months: getMonths(addMonths(startDate, range), range),
        weeks: getWeeks(addMonths(startDate, range), range),
        days: getDays(addMonths(startDate, range), range)
      }
    case TIMELINE_ACTIONS.GET_PREV:
      return {
        ...state,
        startDate: subMonths(startDate, range),
        endDate: null,
        months: getMonths(subMonths(startDate, range), range),
        weeks: getWeeks(subMonths(startDate, range), range),
        days: getDays(subMonths(startDate, range), range)
      }
    default:
      throw new Error('Unknown reducer action')
  }
}
