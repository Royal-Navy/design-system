import { useContext, useEffect, useState } from 'react'
import { isNil } from 'lodash'

import { buildScaleOptions } from '../context/timeline_scales'
import { TIMELINE_ACTIONS } from '../context/types'
import { TimelineContext } from '../context'

export function useTimelineZoom(): {
  canZoomIn: boolean
  canZoomOut: boolean
  zoomIn: () => void
  zoomOut: () => void
} {
  const {
    dispatch,
    state: { currentScaleIndex, options, scaleOptions, width },
  } = useContext(TimelineContext)
  const [timelineScaleOptions, setTimelineScaleOptions] = useState(scaleOptions)
  const canZoomIn = isNil(currentScaleIndex) || currentScaleIndex > 0
  const canZoomOut = currentScaleIndex < timelineScaleOptions.length - 1

  useEffect(() => {
    const newScaleOptions = buildScaleOptions(options, width)
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

  return {
    canZoomIn,
    canZoomOut,
    zoomIn,
    zoomOut,
  }
}
