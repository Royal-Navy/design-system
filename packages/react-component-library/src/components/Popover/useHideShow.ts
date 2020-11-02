import { useRef, useState } from 'react'

import { POPOVER_CLOSE_DELAY } from './constants'
import { useDocumentClick } from '../../hooks'

export function useHideShow(isClick: boolean) {
  const [isVisible, setIsVisible] = useState(false)
  const timerRef = useRef(null)
  const floatingBoxChildrenRef = useRef()

  function hidePopover() {
    if (isVisible) {
      timerRef.current = setTimeout(() => {
        timerRef.current = null
        setIsVisible(false)
      }, POPOVER_CLOSE_DELAY)
    }
  }

  function showPopover() {
    if (timerRef.current !== null) {
      clearTimeout(timerRef.current)
    }

    setIsVisible(true)
  }

  if (isClick) {
    useDocumentClick(floatingBoxChildrenRef, hidePopover, [isVisible])
  }

  function getMouseEvents() {
    if (isClick) {
      return {
        onClick: isVisible ? hidePopover : showPopover,
      }
    }

    return { onMouseEnter: showPopover, onMouseLeave: hidePopover }
  }

  return {
    floatingBoxChildrenRef,
    isVisible,
    mouseEvents: getMouseEvents(),
  }
}
