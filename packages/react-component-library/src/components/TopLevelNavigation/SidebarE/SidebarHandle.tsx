import React, { useContext } from 'react'
import { IconChevronLeft, IconChevronRight } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext } from './context'
import { StyledHandle } from './partials/StyledHandle'

interface SidebarHandleProps extends ComponentWithClass {
  style?: React.CSSProperties
}

export const SidebarHandle: React.FC<SidebarHandleProps> = (props) => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <StyledHandle
      onClick={handleClick}
      aria-label={`${isOpen ? 'Collapse' : 'Expand'} sidebar`}
      data-testid="sidebar-handle"
      {...props}
    >
      {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
    </StyledHandle>
  )
}

SidebarHandle.displayName = 'SidebarHandle'
