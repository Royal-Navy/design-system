import React from 'react'

import { Nav, NavItem } from '../../../common/Nav'
import { SidebarNavItemE, SidebarNavItemEProps } from './index'
import { warnIfOverwriting } from '../../../helpers'
import { StyledNav } from './partials/StyledNav'

export interface SidebarNavEProps extends Nav<NavItem> {
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void
  onItemClick?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseOut?: (e: React.MouseEvent<HTMLElement>) => void
  onMouseOver?: (e: React.MouseEvent<HTMLElement>) => void
}

function mapNavItem(
  navItem: React.ReactElement<SidebarNavItemEProps>,
  onClick: (e: React.MouseEvent<HTMLElement>) => void
) {
  warnIfOverwriting(navItem.props, 'onClick', SidebarNavItemE.name)

  return React.cloneElement(navItem, {
    ...navItem.props,
    onClick,
  })
}

export const SidebarNavE: React.FC<SidebarNavEProps> = ({
  children,
  onBlur,
  onFocus,
  onItemClick,
  onMouseOut,
  onMouseOver,
}) => (
  <StyledNav
    onBlur={onBlur}
    onFocus={onFocus}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    data-testid="sidebar-nav"
  >
    {React.Children.map(
      children,
      (child: React.ReactElement<SidebarNavItemEProps>) => {
        return mapNavItem(child, onItemClick)
      }
    )}
  </StyledNav>
)

SidebarNavE.displayName = 'SidebarNav'
