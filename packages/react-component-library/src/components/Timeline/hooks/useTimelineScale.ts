import { useContext, useState } from 'react'
import { findIndex, isNil } from 'lodash'

import { TIMELINE_ACTIONS } from '../context/types'
import { TimelineContext } from '../context'
import { initialiseScaleOptions } from '../context/timeline_scales'

export function useTimelineScale() {
  const {
    dispatch,
    state: { options, scaleOptions },
  } = useContext(TimelineContext)
  const [timelineScaleOptions, setTimelineScaleOptions] = useState(scaleOptions)
  const defaultScaleIndex = findIndex(
    timelineScaleOptions,
    ({ isDefault }) => isDefault
  )
  const [scaleIndex, setScaleIndex] = useState<number>(defaultScaleIndex)

  const canZoomIn = isNil(scaleIndex) || scaleIndex > 0
  const canZoomOut = scaleIndex < timelineScaleOptions.length - 1

  function updateScale(newScaleIndex: number) {
    setScaleIndex(newScaleIndex)
    dispatch({
      scale: timelineScaleOptions[newScaleIndex],
      type: TIMELINE_ACTIONS.SCALE,
    })
  }

  function zoomIn() {
    updateScale(scaleIndex - 1)
  }

  function zoomOut() {
    updateScale(scaleIndex + 1)
  }

  function move(
    type: typeof TIMELINE_ACTIONS.GET_NEXT | typeof TIMELINE_ACTIONS.GET_PREV
  ) {
    const intervalMultiplier = type === TIMELINE_ACTIONS.GET_NEXT ? 1 : -1
    const currentScaleOption = timelineScaleOptions[scaleIndex]
    const newScaleOptions = initialiseScaleOptions(
      currentScaleOption.calculateDate(
        currentScaleOption.from,
        (currentScaleOption.intervalSize || 1) * intervalMultiplier
      ),
      null,
      currentScaleOption.hoursBlockSize,
      options.unitWidth
    )
    const newScaleOption = newScaleOptions[scaleIndex]
    setTimelineScaleOptions(newScaleOptions)

    dispatch({
      type,
      scale: newScaleOption,
    })
  }

  function moveNext() {
    move(TIMELINE_ACTIONS.GET_NEXT)
  }

  function movePrevious() {
    move(TIMELINE_ACTIONS.GET_PREV)
  }

  return {
    canZoomIn,
    canZoomOut,
    moveNext,
    movePrevious,
    zoomIn,
    zoomOut,
  }
}
