import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'

type Coordinate = {
  x: number
  y: number
}

interface ContextMenuProps extends ComponentWithClass {
  attachedToRef?: React.RefObject<HTMLElement>
}

interface StyledContextMenuProps {
  top: number
  left: number
}

const { color } = selectors

const StyledContextMenu = styled.ol<StyledContextMenuProps>`
  position: fixed;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => `${left}px`};
  width: 12rem;
  padding: 0;
  list-style-type: none;
  background-color: ${color('neutral', 'white')};
  border-radius: 4px;
  border: 1px solid ${color('neutral', '200')};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.07);
`

function withinBoundingBox(
  bottomLeft: Coordinate,
  topRight: Coordinate,
  point: Coordinate
): boolean {
  const isXInRange: boolean = point.x >= bottomLeft.x && point.x <= topRight.x
  const isYiInRange: boolean = point.y <= bottomLeft.y && point.y >= topRight.y

  return isXInRange && isYiInRange
}

export const ContextMenu: React.FC<ContextMenuProps> = ({
  className,
  children,
  attachedToRef,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [position, setPosition] = useState<Coordinate>({ x: 0, y: 0 })

  function displayContextMenu(e: MouseEvent) {
    const {
      top,
      right,
      bottom,
      left,
    } = attachedToRef.current.getBoundingClientRect()

    const bottomLeft = { x: left, y: bottom }
    const topRight = { x: right, y: top }
    const mousePoint = { x: e.clientX, y: e.clientY }

    setPosition(mousePoint)

    if (withinBoundingBox(bottomLeft, topRight, mousePoint)) {
      e.preventDefault()
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  function hideContextMenu() {
    if (isOpen) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('contextmenu', displayContextMenu)
    document.addEventListener('click', hideContextMenu)

    return () => {
      document.removeEventListener('contextmenu', displayContextMenu)
      document.removeEventListener('click', hideContextMenu)
    }
  })

  return (
    <>
      {isOpen && (
        <StyledContextMenu
          className={className}
          top={position.y}
          left={position.x}
        >
          {children}
        </StyledContextMenu>
      )}
    </>
  )
}

ContextMenu.displayName = 'ContextMenu'
