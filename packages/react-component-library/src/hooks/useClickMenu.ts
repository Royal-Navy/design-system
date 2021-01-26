import { useState, useEffect, useRef } from 'react'
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
} as const

export type ClickType = typeof CLICK_BUTTON.LEFT | typeof CLICK_BUTTON.RIGHT

export type ClickMenuPositionType =
  | typeof CLICK_MENU_POSITION.ABOVE
  | typeof CLICK_MENU_POSITION.BELOW

interface useClickMenuParams {
  attachedToRef: React.RefObject<HTMLElement>
  clickType: ClickType
  onHide?: () => void
  onShow?: () => void
  position?: ClickMenuPositionType
}

export const useClickMenu = <TMenuElement extends HTMLElement>({
  attachedToRef,
  clickType,
  onHide,
  onShow,
  position,
}: useClickMenuParams): {
  coordinates: Coordinates
  isOpen: boolean
  menuRef: React.RefObject<TMenuElement>
} => {
  const { open, setOpen } = useOpenClose<boolean>(false)
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 })
  const menuRef = useRef<TMenuElement>(null)

  function getY({ clientY }: { clientY: number }) {
    if (position === CLICK_MENU_POSITION.BELOW) {
      return clientY
    }

    const menuHeight = menuRef.current.getBoundingClientRect().height
    return clientY - menuHeight
  }

  function displayMenu(e: MouseEvent) {
    const mousePoint: Coordinates = { x: e.clientX, y: getY(e) }
    setCoordinates(mousePoint)

    if (attachedToRef.current.contains(e.target as Node)) {
      e.preventDefault()
      setOpen(true)
      if (onShow) onShow()
      return
    }

    setOpen(false)
    if (onHide) onHide()
  }

  function hideMenu() {
    setOpen(false)
    if (onHide) onHide()
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

  return {
    coordinates,
    menuRef,
    isOpen: open,
  }
}
