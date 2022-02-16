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
  const canZoomIn = !isNil(currentScaleIndex) && currentScaleIndex > 0
  const canZoomOut =
    !isNil(currentScaleIndex) && currentScaleIndex < scaleOptions.length - 1

  function zoomIn() {
    dispatch({
      getScaleIndex: (scaleIndex: number) => scaleIndex - 1,
      type: TIMELINE_ACTIONS.SCALE,
    })
  }

  function zoomOut() {
    dispatch({
      getScaleIndex: (scaleIndex: number) => scaleIndex + 1,
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
