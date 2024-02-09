import React, { useEffect, useRef, useState, RefObject } from 'react'

import { TimelineEventsProps } from '../TimelineEvents'

export function useTimelineRowContent(
  isHeader: boolean,
  children?:
    | React.ReactElement<TimelineEventsProps>
    | React.ReactElement<TimelineEventsProps>[]
): {
  noCells: boolean
  rowContentRef: RefObject<HTMLDivElement>
} {
  const rowContentRef = useRef<HTMLDivElement>(null)
  const [noCells, setNoCells] = useState<boolean>(false)

  useEffect(() => {
    if (isHeader) {
      setNoCells(false)
      return
    }

    if (!rowContentRef.current) {
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
