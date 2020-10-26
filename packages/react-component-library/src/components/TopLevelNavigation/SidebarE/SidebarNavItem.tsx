import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { SidebarSubNav } from './SidebarSubNav'
import { Nav, NavItem } from '../../../common/Nav'
import { SidebarContext } from './context'
import { Tooltip } from '../../Tooltip'

export interface SidebarNavItemProps extends NavItem, Nav<SidebarNavItemProps> {
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

interface StyledSidebarNavItemProps {
  isActive?: boolean
}

interface StyledIconProps {
  isOpen?: boolean
}

const { color, spacing, fontSize } = selectors

export const StyledSidebarNavItem = styled.div<StyledSidebarNavItemProps>`
  display: flex;
  align-items: center;
  margin: ${spacing('4')} 0;
  border-radius: 2px;

  > *:first-child {
    display: flex;
    align-items: center;
    width: 100%;
  }

  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${color('action', '500')};

    &:hover {
      background-color: ${color('action', '500')};
    }
  `}

  &:hover {
    background-color: ${color('neutral', '400')};

    > * {
      text-decoration: none;
    }
  }
`

const StyledIcon = styled.div<StyledIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0.55rem;

  svg {
    width: 18px;
    height: 18px;
    color: ${color('neutral', '100')};

    ${StyledSidebarNavItem}:hover & {
      color: ${color('neutral', 'white')};
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    `
    width: auto;
    justify-content: left;
    padding-left: 0.55rem;
  `}
`

const StyledText = styled.div`
  display: inline-block;
  color: ${color('neutral', '100')};
  font-size: ${fontSize('m')};
  margin-left: ${spacing('2')};

  ${StyledSidebarNavItem}:hover & {
    color: ${color('neutral', 'white')};
  }
`

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  isActive,
  link,
  icon,
  onClick,
  children,
}) => {
  const [hasMouseOver, setHasMouseOver] = useState(false)
  const { isOpen } = useContext(SidebarContext)
  const linkElement = link as React.ReactElement

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <>
        {icon && <StyledIcon isOpen={isOpen}>{icon}</StyledIcon>}
        {isOpen && (
          <StyledText data-testid="sidebar-nav-item-text">
            {linkElement.props.children}
          </StyledText>
        )}
        {!isOpen && hasMouseOver && (
          <Tooltip left={70} position="right">
            {linkElement.props.children}
          </Tooltip>
        )}
      </>
    ),
    onClick,
    'aria-label': linkElement.props.children,
    'data-testid': 'sidebar-nav-item',
  })

  return (
    <StyledSidebarNavItem
      isActive={isActive}
      onMouseEnter={(_) => setHasMouseOver(true)}
      onMouseLeave={(_) => setHasMouseOver(false)}
    >
      {item}
      {isOpen && children && <SidebarSubNav>{children}</SidebarSubNav>}
    </StyledSidebarNavItem>
  )
}

SidebarNavItem.displayName = 'SidebarNavItem'
