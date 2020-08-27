import React, { createContext, useReducer } from 'react'

import { initialState, initialiseState } from './state'
import { reducer } from './reducer'
import { TimelineContextDefault, TimelineProviderProps } from './types'

const timelineContextDefaults: TimelineContextDefault = {
  hasSide: false,
  state: initialState,
  dispatch: null,
}

export const TimelineContext = createContext(timelineContextDefaults)

export const TimelineProvider: React.FC<TimelineProviderProps> = ({
  children,
  endDate,
  hasSide,
  options,
  startDate,
  today,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState, () =>
    initialiseState(startDate, endDate, today, options)
  )

  return (
    <TimelineContext.Provider value={{ hasSide, state, dispatch }}>
      {children}
    </TimelineContext.Provider>
  )
}
