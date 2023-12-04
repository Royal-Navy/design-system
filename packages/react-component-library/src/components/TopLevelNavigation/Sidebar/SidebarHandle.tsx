import React, { useContext, forwardRef } from 'react'
import { IconChevronLeft, IconChevronRight } from '@royalnavy/icon-library'
import { TransitionStatus } from 'react-transition-group'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext } from './context'
import { StyledHandle } from './partials/StyledHandle'

export interface SidebarHandleProps extends ComponentWithClass {
  transitionStatus: TransitionStatus
}

export const SidebarHandle = forwardRef(
  (
    { transitionStatus, ...rest }: SidebarHandleProps,
    ref?: React.Ref<HTMLButtonElement>
  ) => {
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
        $transitionStatus={transitionStatus}
        {...rest}
      >
        {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
      </StyledHandle>
    )
  }
)

SidebarHandle.displayName = 'SidebarHandle'
