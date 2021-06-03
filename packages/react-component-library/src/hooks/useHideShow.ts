import { useRef, useState } from 'react'

import { useDocumentClick } from '.'

export function useHideShow(isClick: boolean, closeDelay: number) {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)
  const floatingBoxChildrenRef = useRef()

  function hideElement() {
    if (isVisible) {
      timerRef.current = setTimeout(() => {
        timerRef.current = null
        setIsVisible(false)
      }, closeDelay)
    }
  }

  function showElement() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    setIsVisible(true)
  }

  if (isClick) {
    useDocumentClick(floatingBoxChildrenRef, hideElement, [isVisible])
  }

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
