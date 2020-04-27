import {
  addMonths,
  getMonth,
  setMonth,
  startOfMonth,
  endOfMonth,
  differenceInWeeks,
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

export function getMonths(
  date: Date,
  rangeInMonths: number
): {
  startDate: Date,
  months: TimelineMonth[]
} {
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

  return {
    startDate: months[0].startDate,
    months
  }
}

export function getWeeks(
  date: Date,
  rangeInMonths: number
): TimelineWeek[] {
  const { months } = getMonths(date, rangeInMonths)

  const startDate = months[0].startDate
  const endDate = endOfMonth(months[months.length - 1].startDate)

  const diffInWeeks = differenceInWeeks(endDate, startDate)

  const weeks = Array.from({ length: diffInWeeks + 1 })
    .map((_, weekIndex) => {
      const weekStart = startOfWeek(
        addWeeks(startDate, weekIndex),
        { weekStartsOn: 1 }
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
  const { months } = getMonths(date, rangeInMonths)
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

export function reducer(
  state: TimelineState,
  action: TimelineAction
): TimelineState | never {
  const { startDate, options } = state

  switch (action.type) {
    case TIMELINE_ACTIONS.GET_NEXT:
      return {
        ...state,
        ...getMonths(addMonths(startDate, options.rangeInMonths), options.rangeInMonths),
        weeks: getWeeks(addMonths(startDate, options.rangeInMonths), options.rangeInMonths),
        days: getDays(addMonths(startDate, options.rangeInMonths), options.rangeInMonths)
      }
    case TIMELINE_ACTIONS.GET_PREV:
      return {
        ...state,
        ...getMonths(addMonths(startDate, -options.rangeInMonths), options.rangeInMonths),
        weeks: getWeeks(addMonths(startDate, -options.rangeInMonths), options.rangeInMonths),
        days: getDays(addMonths(startDate, -options.rangeInMonths), options.rangeInMonths)
      }
    default:
      throw new Error('Unknown reducer action')
  }
}
