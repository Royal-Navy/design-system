import React, { createContext, useReducer } from 'react'

import { initialState } from './state'
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
  hasSide,
  options,
  today,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    options,
    today,
  })

  return (
    <TimelineContext.Provider value={{ hasSide, state, dispatch }}>
      {children}
    </TimelineContext.Provider>
  )
}
