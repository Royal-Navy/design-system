import React, { createContext, useEffect, useReducer } from 'react'

import { initialState } from './state'
import { reducer } from './reducer'
import {
  TIMELINE_ACTIONS,
  TimelineContextDefault,
  TimelineProviderProps,
} from './types'
import { initialiseScaleOptions } from './timeline_scales'

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

  useEffect(() => {
    if (!state.currentScaleOption) {
      return
    }

    const scaleOptions = initialiseScaleOptions(
      {
        ...options,
        endDate: state.getNewEndDate(),
        hoursBlockSize: state.currentScaleOption.hoursBlockSize,
      },
      state.width
    )

    dispatch({ scaleOptions, type: TIMELINE_ACTIONS.CHANGE_START_DATE })
  }, [options.startDate])

  return (
    <TimelineContext.Provider value={{ hasSide, state, dispatch }}>
      {children}
    </TimelineContext.Provider>
  )
}
