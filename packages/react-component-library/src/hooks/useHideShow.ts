import { useCallback, useRef, useState } from 'react'

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
  closeDelay: number,
  initialIsVisible = false
) {
  const [isVisible, setIsVisible] = useState(initialIsVisible)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const floatingBoxChildrenRef = useRef(null)

  const hideElement = useCallback(() => {
    if (!isVisible) {
      return
    }

    timerRef.current = setTimeout(() => {
      timerRef.current = null
      setIsVisible(false)
    }, closeDelay)
  }, [closeDelay, isVisible])

  function showElement() {
    if (isVisible) {
      return
    }

    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    setIsVisible(true)
  }

  useDocumentClick(floatingBoxChildrenRef, hideElement, isClick)

  function getMouseEvents() {
    if (isClick) {
      return {
        onClick: isVisible ? hideElement : showElement,
      }
    }

    return { onMouseEnter: showElement, onMouseLeave: hideElement }
  }

  return {
    floatingBoxChildrenRef,
    isVisible,
    mouseEvents: getMouseEvents(),
  }
}
