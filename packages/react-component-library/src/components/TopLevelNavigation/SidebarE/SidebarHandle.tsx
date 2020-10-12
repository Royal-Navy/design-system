import React, { useContext } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'
import { IconChevronLeft, IconChevronRight } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../../common/ComponentWithClass'
import { SidebarContext } from './context'

const { color } = selectors

const StyledSidebarHandle = styled.button`
  position: absolute;
  top: 1.15rem;
  right: -1rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${color('action', '500')};
  border-radius: 9999px;
  width: 2rem;
  height: 2rem;
  border: none;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }

  > svg {
    color: ${color('neutral', 'white')};
  }
`

export const SidebarHandle: React.FC<ComponentWithClass> = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext)

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    setIsOpen(!isOpen)
  }

  return (
    <StyledSidebarHandle
      onClick={handleClick}
      aria-label={`${isOpen ? 'Collapse' : 'Expand'} sidebar`}
      data-testid="sidebar-handle"
    >
      {isOpen ? <IconChevronLeft /> : <IconChevronRight />}
    </StyledSidebarHandle>
  )
}

SidebarHandle.displayName = 'SidebarHandle'
