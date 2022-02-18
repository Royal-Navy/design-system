import React, { useContext, forwardRef } from 'react'
import { IconChevronLeft, IconChevronRight } from '@defencedigital/icon-library'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext } from './context'
import { StyledHandle } from './partials/StyledHandle'

export interface SidebarHandleProps extends ComponentWithClass {
  style: React.CSSProperties
}

export const SidebarHandle = forwardRef(
  (props: SidebarHandleProps, ref?: React.Ref<HTMLButtonElement>) => {
    const { isOpen, setIsOpen } = useContext(SidebarContext)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault()
      setIsOpen(!isOpen)
    }

    return (
      <StyledHandle
        ref={ref}
        onClick={handleClick}
        aria-label={`${isOpen ? 'Collapse' : 'Expand'} sidebar`}
        data-testid="sidebar-handle"
        {...props}
      >
        {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
      </StyledHandle>
    )
  }
)

SidebarHandle.displayName = 'SidebarHandle'
