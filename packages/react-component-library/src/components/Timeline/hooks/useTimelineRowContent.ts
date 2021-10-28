import React, { useEffect, useRef, useState, MutableRefObject } from 'react'

import { TimelineEventsProps } from '../TimelineEvents'

export function useTimelineRowContent(
  isHeader: boolean,
  children:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
): {
  noCells: boolean
  rowContentRef: MutableRefObject<HTMLDivElement>
} {
  const rowContentRef = useRef(null)
  const [noCells, setNoCells] = useState<boolean>(false)

  useEffect(() => {
    if (isHeader) {
      setNoCells(false)
      return
    }

    const cells = rowContentRef.current.querySelectorAll('[role="cell"]')
    if (!cells.length) {
      setNoCells(true)
    }
  }, [isHeader, children])

  return {
    noCells,
    rowContentRef,
  }
}
