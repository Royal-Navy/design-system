import { getDays, getMonths, getWeeks } from './reducer'
import { TimelineOptions, TimelineState } from './types'

const initialState: TimelineState = {
  days: [],
  months: [],
  options: null,
  startDate: null,
  today: new Date(),
  weeks: [],
}

function initialiseState(
  startDate: Date = new Date(),
  today: Date = new Date(),
  options: TimelineOptions
) {
  const state = {
    ...initialState,
    today,
    startDate,
    options: { ...initialState.options, ...options },
  }

  return {
    ...state,
    ...getMonths(startDate, state.options.rangeInMonths),
    days: getDays(startDate, state.options.rangeInMonths),
    weeks: getWeeks(startDate, state.options.rangeInMonths),
  }
}

export { initialState, initialiseState }
