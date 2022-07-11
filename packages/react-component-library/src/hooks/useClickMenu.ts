import React, { useState, useEffect } from 'react'

import { VirtualElement } from '@popperjs/core'
import { useOpenClose } from './useOpenClose'
import { useFloatingElement } from './useFloatingElement'

export const CLICK_BUTTON = {
  LEFT: 'left',
  RIGHT: 'right',
} as const

export type ClickType = typeof CLICK_BUTTON[keyof typeof CLICK_BUTTON]

interface UseClickMenuParams {
  attachedToRef: React.RefObject<HTMLElement>
  clickType: ClickType
  initialIsOpen: boolean
  onHide?: (e: MouseEvent) => void
  onShow?: (e: MouseEvent) => void
}

type UseClickMenuReturnType = {
  mousePointer: VirtualElement | undefined
  isOpen: boolean
} & ReturnType<typeof useFloatingElement>

function generateVirtualReference({
  clientY,
  clientX,
}: MouseEvent): VirtualElement {
  return {
    getBoundingClientRect() {
      return {
        top: clientY,
        right: clientX,
        bottom: clientY,
        left: clientX,
        width: 0,
        height: 0,
      } as DOMRect
    },
  }
}

export const useClickMenu = ({
  attachedToRef,
  clickType,
  initialIsOpen,
  onHide,
  onShow,
}: UseClickMenuParams): UseClickMenuReturnType => {
  const { open, setOpen } = useOpenClose<boolean>(initialIsOpen)
  const [mousePointer, setMousePointer] = useState<VirtualElement | undefined>()
  const {
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  } = useFloatingElement('auto-end', 'fixed', mousePointer)

  const displayMenu = (e: MouseEvent): void => {
    if (attachedToRef.current?.contains(e.target as Node)) {
      // Click was within bounds of target area
      e.preventDefault()
      e.stopPropagation()

      setMousePointer(generateVirtualReference(e))
      setOpen(true)

      if (onShow) {
        onShow(e)
      }

      return
    }

    setOpen(false)

    if (onHide) {
      onHide(e)
    }
  }

  const hideMenu = (e: MouseEvent): void => {
    e.preventDefault()
    e.stopPropagation()

    setOpen(false)

    if (onHide) {
      onHide(e)
    }
  }

  useEffect(() => {
    if (clickType === 'left') {
      document.addEventListener('click', displayMenu)
    }

    if (clickType === 'right') {
      document.addEventListener('contextmenu', displayMenu)
      document.addEventListener('click', hideMenu)
    }

    return () => {
      document.removeEventListener('contextmenu', displayMenu)
      document.removeEventListener('click', displayMenu)
      document.removeEventListener('click', hideMenu)
    }
  })

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto'
  }, [open])

  return {
    mousePointer,
    isOpen: open,
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  }
}
