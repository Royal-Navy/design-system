import { useContext, useEffect, useState } from 'react'
import { isNil } from 'lodash'

import { TIMELINE_ACTIONS, TimelineScaleOption } from '../context/types'
import { TimelineContext } from '../context'
import { initialiseScaleOptions } from '../context/timeline_scales'

export function useTimelineScale() {
  const {
    dispatch,
    state: {
      currentScaleIndex,
      currentScaleOption,
      options,
      scaleOptions,
      width,
    },
  } = useContext(TimelineContext)
  const [timelineScaleOptions, setTimelineScaleOptions] = useState(scaleOptions)
  const canZoomIn = isNil(currentScaleIndex) || currentScaleIndex > 0
  const canZoomOut = currentScaleIndex < timelineScaleOptions.length - 1

  useEffect(() => {
    const newScaleOptions = initialiseScaleOptions(options, width)
    setTimelineScaleOptions(newScaleOptions)
  }, [width])

  useEffect(() => {
    setTimelineScaleOptions(scaleOptions)
  }, [scaleOptions])

  function zoomIn() {
    dispatch({
      scaleIndex: currentScaleIndex - 1,
      type: TIMELINE_ACTIONS.SCALE,
    })
  }

  function zoomOut() {
    dispatch({
      scaleIndex: currentScaleIndex + 1,
      type: TIMELINE_ACTIONS.SCALE,
    })
  }

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
    canZoomIn,
    canZoomOut,
    moveNext,
    movePrevious,
    zoomIn,
    zoomOut,
  }
}
