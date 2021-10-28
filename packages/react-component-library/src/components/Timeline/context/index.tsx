import React, { createContext, useEffect, useReducer, useMemo } from 'react'

import { usePrevious } from '../../../hooks'
import { initialState } from './state'
import { reducer } from './reducer'
import {
  TIMELINE_ACTIONS,
  TimelineContextDefault,
  TimelineProviderProps,
} from './types'
import { buildScaleOptions } from './timeline_scales'

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

  const prevStartDate = usePrevious(options.startDate)

  useEffect(() => {
    if (!state.currentScaleOption) {
      return
    }

    if (prevStartDate === undefined || prevStartDate === options.startDate) {
      return
    }

    const scaleOptions = buildScaleOptions(
      {
        ...options,
        endDate: state.getNewEndDate(),
        hoursBlockSize: state.currentScaleOption.hoursBlockSize,
      },
      state.width
    )

    dispatch({ scaleOptions, type: TIMELINE_ACTIONS.CHANGE_START_DATE })
  }, [options, prevStartDate, state])

  const value = useMemo(
    () => ({ hasSide, state, dispatch }),
    [hasSide, state, dispatch]
  )

  return (
    <TimelineContext.Provider value={value}>
      {children}
    </TimelineContext.Provider>
  )
}
