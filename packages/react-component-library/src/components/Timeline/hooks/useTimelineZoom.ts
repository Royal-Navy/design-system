import { useContext } from 'react'
import { isNil } from 'lodash'

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
    state: { currentScaleIndex, scaleOptions },
  } = useContext(TimelineContext)
  const canZoomIn = isNil(currentScaleIndex) || currentScaleIndex > 0
  const canZoomOut = currentScaleIndex < scaleOptions.length - 1

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
