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
  dispatch: () => {
    throw Error('TimelineContext not initialised')
  },
}

export const TimelineContext = createContext(timelineContextDefaults)

export const TimelineProvider = ({
  children,
  hasSide,
  options,
  today,
}: TimelineProviderProps) => {
  const [state, dispatch] = useReducer(reducer, {
    ...initialState,
    options,
    today,
  })

  const prevStartDate = usePrevious(options.startDate)
  const prevEndDateDate = usePrevious(options.endDate)

  const isEqualOrUndefined = (
    previousDateTime: Date | undefined | null,
    currentDateTime: Date | undefined | null
  ) => previousDateTime === undefined || previousDateTime === currentDateTime

  useEffect(() => {
    if (!state.currentScaleOption) {
      return
    }

    if (
      isEqualOrUndefined(prevStartDate, options.startDate) &&
      isEqualOrUndefined(prevEndDateDate, options.endDate)
    ) {
      return
    }

    const scaleOptions = buildScaleOptions(
      {
        ...options,
        ...(!options.endDate ? { endDate: state.getNewEndDate() } : {}),
        hoursBlockSize: state.currentScaleOption.hoursBlockSize,
      },
      state.width
    )
    dispatch({ scaleOptions, type: TIMELINE_ACTIONS.CHANGE_DATE })
  }, [options, prevEndDateDate, prevStartDate, state])

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
