import React, { createContext, useReducer } from 'react'

import { initialState, initialiseState } from './state'
import { reducer } from './reducer'
import { TimelineContextDefault, TimelineProviderProps } from './types'

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
    initialiseState(startDate, today, options)
  )

  return (
    <TimelineContext.Provider value={{ state, dispatch }}>
      {children}
    </TimelineContext.Provider>
  )
}
