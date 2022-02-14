import React, { useState, useEffect, useRef } from 'react'

import { useOpenClose } from './useOpenClose'

export type Coordinates = {
  x: number
  y: number
}

export const CLICK_BUTTON = {
  LEFT: 'left',
  RIGHT: 'right',
} as const

export const CLICK_MENU_POSITION = {
  ABOVE: 'above',
  BELOW: 'below',
  LEFT_ABOVE: 'left_above',
  LEFT_BELOW: 'left_below',
  RIGHT_ABOVE: 'right_above',
  RIGHT_BELOW: 'right_below',
} as const

export type ClickType = typeof CLICK_BUTTON.LEFT | typeof CLICK_BUTTON.RIGHT

export type ClickMenuPositionType =
  | typeof CLICK_MENU_POSITION.ABOVE
  | typeof CLICK_MENU_POSITION.BELOW
  | typeof CLICK_MENU_POSITION.LEFT_ABOVE
  | typeof CLICK_MENU_POSITION.LEFT_BELOW
  | typeof CLICK_MENU_POSITION.RIGHT_ABOVE
  | typeof CLICK_MENU_POSITION.RIGHT_BELOW

interface UseClickMenuParams {
  attachedToRef: React.RefObject<HTMLElement>
  clickType: ClickType
  position: ClickMenuPositionType
  onHide?: (e: MouseEvent) => void
  onShow?: (e: MouseEvent) => void
}

function getCoordinates(
  { clientX, clientY }: MouseEvent,
  menuElement: HTMLElement,
  position: ClickMenuPositionType
) {
  const { height: menuHeight, width: menuWidth } =
    menuElement.getBoundingClientRect()

  if (
    position === CLICK_MENU_POSITION.BELOW ||
    position === CLICK_MENU_POSITION.RIGHT_BELOW
  ) {
    return { x: clientX, y: clientY }
  }

  if (
    position === CLICK_MENU_POSITION.ABOVE ||
    position === CLICK_MENU_POSITION.RIGHT_ABOVE
  ) {
    return { x: clientX, y: clientY - menuHeight }
  }

  if (position === CLICK_MENU_POSITION.LEFT_ABOVE) {
    return { x: clientX - menuWidth, y: clientY - menuHeight }
  }

  if (position === CLICK_MENU_POSITION.LEFT_BELOW) {
    return { x: clientX - menuWidth, y: clientY }
  }

  throw new Error('Unknown CLICK_MENU_POSITION')
}

export const useClickMenu = <TMenuElement extends HTMLElement>({
  attachedToRef,
  clickType,
  onHide,
  onShow,
  position,
}: UseClickMenuParams): {
  coordinates: Coordinates
  isOpen: boolean
  menuRef: React.RefObject<TMenuElement>
} => {
  const { open, setOpen } = useOpenClose<boolean>(false)
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 })
  const menuRef = useRef<TMenuElement>(null)

  function displayMenu(e: MouseEvent) {
    if (menuRef.current && attachedToRef.current?.contains(e.target as Node)) {
      e.preventDefault()

      const mousePoint: Coordinates = getCoordinates(
        e,
        menuRef.current,
        position
      )
      setCoordinates(mousePoint)

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

  function hideMenu(e: MouseEvent): void {
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
    coordinates,
    menuRef,
    isOpen: open,
  }
}
