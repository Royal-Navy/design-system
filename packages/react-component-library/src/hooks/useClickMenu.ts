import { useState, useEffect } from 'react'
import { useOpenClose } from './useOpenClose'

export type Coordinates = {
  x: number
  y: number
}

export type ClickType = 'left' | 'right'

interface useClickMenuParams {
  attachedToRef: React.RefObject<HTMLElement>
  clickType: ClickType
  onHide?: () => void
  onShow?: () => void
}

export const useClickMenu = ({
  attachedToRef,
  clickType,
  onHide,
  onShow,
}: useClickMenuParams): {
  coordinates: Coordinates
  isOpen: boolean
} => {
  const { open, setOpen } = useOpenClose<boolean>(false)
  const [coordinates, setCoordinates] = useState<Coordinates>({ x: 0, y: 0 })

  function displayMenu(e: MouseEvent) {
    const mousePoint: Coordinates = { x: e.clientX, y: e.clientY }
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
    isOpen: open,
  }
}
