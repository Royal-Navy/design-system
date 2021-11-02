import {
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react'
import { debounce } from 'lodash'

import { TimelineContext } from '../context'
import { TIMELINE_ACTIONS } from '../context/types'
import { TIMELINE_ROW_HEADER_WIDTH } from '../constants'

export function useTimelineWidth(
  hasSide: boolean,
  isFullWidth: boolean
): {
  timelineRef: MutableRefObject<HTMLDivElement>
} {
  const timelineRef = useRef<HTMLDivElement>()
  const { dispatch } = useContext(TimelineContext)

  const getWidth = useCallback(() => {
    const timelineWidth = timelineRef.current.getBoundingClientRect().width
    const sideWidth = hasSide ? TIMELINE_ROW_HEADER_WIDTH : 0
    return timelineWidth - 1 - sideWidth
  }, [hasSide])

  const dispatchWidthChange = useCallback(
    (
      type:
        | typeof TIMELINE_ACTIONS.CHANGE_WIDTH
        | typeof TIMELINE_ACTIONS.INITIALISE = TIMELINE_ACTIONS.CHANGE_WIDTH
    ) => {
      dispatch({
        type,
        width: isFullWidth ? getWidth() : null,
      })
    },
    [dispatch, getWidth, isFullWidth]
  )

  /* eslint-disable consistent-return */
  useEffect(() => {
    dispatchWidthChange(TIMELINE_ACTIONS.INITIALISE)

    if (isFullWidth) {
      const onDocumentResize = debounce(() => dispatchWidthChange(), 250)

      window.addEventListener('resize', onDocumentResize)
      return () => {
        window.removeEventListener('resize', onDocumentResize)
      }
    }
  }, [dispatchWidthChange, isFullWidth])

  return {
    timelineRef,
  }
}
