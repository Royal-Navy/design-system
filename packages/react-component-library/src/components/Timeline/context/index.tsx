import React, { createContext, useReducer } from 'react'
import { reducer, getMonths, getWeeks, getDays } from './reducer'

import {
  TimelineState,
  TimelineOptions,
  TimelineContextDefault,
  TimelineProviderProps,
} from './types'

const initialState: TimelineState = {
  today: new Date(),
  startDate: null,
  months: [],
  weeks: [],
  days: [],
  options: {
    range: 3, // months
  },
}

function initialize(
  startDate: Date,
  today: Date,
  options: TimelineOptions
): TimelineState {
  const state = {
    ...initialState,
    today,
    startDate,
    options: { ...initialState.options, ...options },
  }

  return {
    ...state,
    ...getMonths(startDate, state),
    weeks: getWeeks(startDate, state),
    days: getDays(startDate, state),
  }
}

const timelineContextDefaults: TimelineContextDefault = {
  state: initialState,
  dispatch: null,
}

export const TimelineContext = createContext(timelineContextDefaults)

export const TimelineProvider: React.FC<TimelineProviderProps> = ({
  children,
  startDate,
  today,
  options,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, () =>
    initialize(startDate || new Date(), today || new Date(), options)
  )

  return (
    <TimelineContext.Provider value={{ state, dispatch }}>
      {children}
    </TimelineContext.Provider>
  )
}
