import React, { useState, useContext } from 'react'
import { Transition } from 'react-transition-group'

import { SidebarSubNav } from './SidebarSubNav'
import { Nav, NavItem } from '../../../common/Nav'
import { SidebarContext } from './context'
import { Tooltip } from '../../Tooltip'
import { TRANSITION_STYLES, TRANSITION_TIMEOUT } from './constants'
import { StyledNavItem } from './partials/StyledNavItem'
import { StyledNavItemIcon } from './partials/StyledNavItemIcon'
import { StyledNavItemText } from './partials/StyledNavItemText'

export interface SidebarNavItemEProps
  extends NavItem,
    Nav<SidebarNavItemEProps> {
  icon?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLElement>) => void
}

export const SidebarNavItemE: React.FC<SidebarNavItemEProps> = ({
  isActive,
  link,
  icon,
  onClick,
  children,
  ...rest
}) => {
  const [hasMouseOver, setHasMouseOver] = useState(false)
  const { isOpen } = useContext(SidebarContext)
  const linkElement = link as React.ReactElement

  const item = React.cloneElement(linkElement, {
    ...link.props,
    children: (
      <>
        {icon && <StyledNavItemIcon isOpen={isOpen}>{icon}</StyledNavItemIcon>}
        <Transition in={isOpen} timeout={TRANSITION_TIMEOUT} unmountOnExit>
          {(state) => (
            <StyledNavItemText
              style={{ ...TRANSITION_STYLES[state] }}
              isOpen={isOpen}
              data-testid="sidebar-nav-item-text"
            >
              {linkElement.props.children}
            </StyledNavItemText>
          )}
        </Transition>
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
    ...rest,
  })

  return (
    <StyledNavItem
      isActive={isActive}
      onMouseEnter={(_) => setHasMouseOver(true)}
      onMouseLeave={(_) => setHasMouseOver(false)}
    >
      {item}
      {isOpen && children && <SidebarSubNav>{children}</SidebarSubNav>}
    </StyledNavItem>
  )
}

SidebarNavItemE.displayName = 'SidebarNavItem'
