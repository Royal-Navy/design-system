import { useContext } from 'react'

import { initialiseScaleOptions } from '../context/timeline_scales'
import { TimelineContext } from '../context'
import { TIMELINE_ACTIONS, TimelineScaleOption } from '../context/types'

export function useTimelineFrame(): {
  moveNext: () => void
  movePrevious: () => void
} {
  const {
    dispatch,
    state: { currentScaleOption, options, width },
  } = useContext(TimelineContext)

  function move(
    type: typeof TIMELINE_ACTIONS.GET_NEXT | typeof TIMELINE_ACTIONS.GET_PREV
  ) {
    const intervalMultiplier = type === TIMELINE_ACTIONS.GET_NEXT ? 1 : -1

    const getIntervalSize = ({ intervalSize }: TimelineScaleOption) =>
      intervalSize * intervalMultiplier
    const newStartDate = currentScaleOption.calculateDate(
      currentScaleOption.from,
      getIntervalSize(currentScaleOption)
    )
    const getNewEndDate = (): Date => {
      if (options.endDate && currentScaleOption.isDefault) {
        return currentScaleOption.calculateDate(
          currentScaleOption.to,
          getIntervalSize(currentScaleOption)
        )
      }

      return null
    }

    const newScaleOptions = initialiseScaleOptions(
      {
        ...options,
        startDate: newStartDate,
        endDate: getNewEndDate(),
        hoursBlockSize: currentScaleOption.hoursBlockSize,
      },
      width
    )

    dispatch({
      type,
      scaleOptions: newScaleOptions,
    })
  }

  function moveNext() {
    move(TIMELINE_ACTIONS.GET_NEXT)
  }

  function movePrevious() {
    move(TIMELINE_ACTIONS.GET_PREV)
  }

  return {
    moveNext,
    movePrevious,
  }
}
