import React, { useState, useEffect } from 'react'

type Coordinate = {
  x: number
  y: number
}

function isWithinBoundingBox(
  bottomLeft: Coordinate,
  topRight: Coordinate,
  point: Coordinate
): boolean {
  const isXInRange: boolean = point.x >= bottomLeft.x && point.x <= topRight.x
  const isYiInRange: boolean = point.y <= bottomLeft.y && point.y >= topRight.y

  return isXInRange && isYiInRange
}

export const useRightClick = (
  attachedToRef: React.RefObject<HTMLElement>
): { position: Coordinate, isOpen: boolean } => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [position, setPosition] = useState<Coordinate>({ x: 0, y: 0 })

  function displayContextMenu(e: MouseEvent) {
    const {
      top,
      right,
      bottom,
      left,
    } = attachedToRef.current.getBoundingClientRect()

    const bottomLeft: Coordinate = { x: left, y: bottom }
    const topRight: Coordinate = { x: right, y: top }
    const mousePoint: Coordinate = { x: e.clientX, y: e.clientY }

    setPosition(mousePoint)

    if (isWithinBoundingBox(bottomLeft, topRight, mousePoint)) {
      e.preventDefault()
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  function hideContextMenu() {
    setIsOpen(false)
  }

  useEffect(() => {
    document.addEventListener('contextmenu', displayContextMenu)
    document.addEventListener('click', hideContextMenu)

    return () => {
      document.removeEventListener('contextmenu', displayContextMenu)
      document.removeEventListener('click', hideContextMenu)
    }
  })

  return {
    position,
    isOpen
  }
}
