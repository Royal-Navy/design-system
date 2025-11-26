import { useCallback, useEffect, useRef, useState } from 'react'

import { useDocumentClick } from '.'

export type HideShowMouseEvents =
  | {
      onClick?: never
      onMouseEnter: () => void
      onMouseLeave: () => void
    }
  | {
      onClick: () => void
      onMouseEnter?: never
      onMouseLeave?: never
    }

export function useHideShow(
  isClick: boolean,
  closeDelay = 0,
  initialIsVisible = false
) {
  const [isVisible, setIsVisible] = useState(initialIsVisible)
  
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const floatingBoxChildrenRef = useRef(null)
  const isVisibleRef = useRef(isVisible)
  const mouseEventsRef = useRef<HideShowMouseEvents>()

  isVisibleRef.current = isVisible

  useEffect(() => {
    mouseEventsRef.current = undefined
  }, [closeDelay])

  const hideElement = useCallback(() => {
    if (!isVisibleRef.current) {
      return
    }

    if (!closeDelay) {
      setIsVisible(false)
      return
    }

    timerRef.current = setTimeout(() => {
      setIsVisible(false)
      timerRef.current = null
    }, closeDelay)
  }, [closeDelay])

  const showElement = useCallback(() => {
    if (isVisibleRef.current) {
      return
    }

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    setIsVisible(true)
  }, [])

  useDocumentClick(floatingBoxChildrenRef, hideElement, isClick)

  if (!mouseEventsRef.current) {
    if (isClick) {
      mouseEventsRef.current = {
        onClick: () => {
          if (isVisibleRef.current) {
            hideElement()
          } else {
            showElement()
          }
        },
      }
    } else {
      mouseEventsRef.current = {
        onMouseEnter: showElement,
        onMouseLeave: hideElement,
      }
    }
  }

  return {
    floatingBoxChildrenRef,
    isVisible,
    mouseEvents: mouseEventsRef.current,
  }
}
