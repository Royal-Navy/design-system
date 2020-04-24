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
  getYear
} from 'date-fns'

import {
  TimelineState,
  TimelineAction,
  TIMELINE_ACTIONS,
  TimelineMonth,
  TimelineWeek,
  TimelineDay
} from './types'

// TODO: move start date out of this and return TimelineMonth[]
export function getMonths(
  date: Date,
  state: TimelineState
) {
  const { options: { range } } = state

  const months = Array.from({ length: range })
    .map((_, monthIndex) => {
      const month = getMonth(date)
      const newDate = setMonth(date, month + monthIndex)
      const startDate = startOfMonth(newDate)

      return {
        monthIndex: month + monthIndex,
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
  state: TimelineState
): TimelineWeek[] {
  const { options: { range } } = state

  const month = getMonth(date)

  const startDate = startOfMonth(date)
  const endDate = endOfMonth(setMonth(date, (month + range - 1)))

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
  state: TimelineState
): TimelineDay[] {
  const { months } = getMonths(date, state)
  const year = getYear(date)

  const days = months.flatMap(({ monthIndex }) => {
    const total = getDaysInMonth(new Date(year, monthIndex))
    const arr = [...Array(total).keys()].map(i => i+1) // [1, ..., ~31]

    return arr.map((day, dayIndex) => {
      return {
        dayIndex,
        date: setDate(setMonth(date, monthIndex), day)
      }
    })
  })

  return days
}

export function reducer(state: TimelineState, action: TimelineAction) {
  switch (action.type) {
    case TIMELINE_ACTIONS.SET_DATE:
      return {
        ...state,
        today: action.date
      }
    case TIMELINE_ACTIONS.GET_NEXT:
      return {
        ...state,
        ...getMonths(addMonths(state.startDate, state.options.range), state),
        weeks: getWeeks(addMonths(state.startDate, state.options.range), state),
        days: getDays(addMonths(state.startDate, state.options.range), state)
      }
    case TIMELINE_ACTIONS.GET_PREV:
      return {
        ...state,
        ...getMonths(addMonths(state.startDate, -state.options.range), state),
        weeks: getWeeks(addMonths(state.startDate, -state.options.range), state),
        days: getDays(addMonths(state.startDate, -state.options.range), state)
      }
    default:
      throw new Error('Unknown reducer action')
  }
}
