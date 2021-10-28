import { useContext } from 'react'

import { buildScaleOptions } from '../context/timeline_scales'
import { TimelineContext } from '../context'
import { TIMELINE_ACTIONS } from '../context/types'

export function useTimelineFrame(): {
  moveNext: () => void
  movePrevious: () => void
} {
  const { dispatch, state } = useContext(TimelineContext)
  const { currentScaleOption, options, width } = state

  function move(
    type: typeof TIMELINE_ACTIONS.GET_NEXT | typeof TIMELINE_ACTIONS.GET_PREV,
    intervalMultiplier = 1
  ) {
    const newStartDate = currentScaleOption.calculateDate(
      currentScaleOption.from,
      currentScaleOption.intervalSize * intervalMultiplier
    )

    const newScaleOptions = buildScaleOptions(
      {
        ...options,
        startDate: newStartDate,
        endDate: state.getNewEndDate(intervalMultiplier),
        hoursBlockSize: currentScaleOption.hoursBlockSize,
      },
      width
    )

    dispatch({ type, scaleOptions: newScaleOptions })
  }

  function moveNext() {
    move(TIMELINE_ACTIONS.GET_NEXT)
  }

  function movePrevious() {
    move(TIMELINE_ACTIONS.GET_PREV, -1)
  }

  return {
    moveNext,
    movePrevious,
  }
}
