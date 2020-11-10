import { useEffect, useRef, useState, MutableRefObject } from 'react'

export function useTimelineRowContent(
  isHeader: boolean,
  deps?: ReadonlyArray<any>
): {
  noCells: boolean
  rowContentRef: MutableRefObject<HTMLDivElement>
} {
  const rowContentRef = useRef(null)
  const [noCells, setNoCells] = useState<boolean>(false)

  if (!isHeader) {
    useEffect(() => {
      const cells = rowContentRef.current.querySelectorAll('[role="cell"]')
      if (!cells.length) {
        setNoCells(true)
      }
    }, deps)
  }

  return {
    noCells,
    rowContentRef,
  }
}
