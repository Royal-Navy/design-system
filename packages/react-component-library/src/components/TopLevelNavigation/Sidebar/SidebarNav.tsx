import React from 'react'

import { Nav, NavItem } from '../../../types/Nav'
import { SidebarNavItem, SidebarNavItemProps } from './index'
import { warnIfOverwriting } from '../../../helpers'

export interface SidebarNavProps extends Nav<NavItem> {
  onBlur?: () => void
  onFocus?: () => void
  onItemClick?: () => void
  onMouseOut?: () => void
  onMouseOver?: () => void
}

function mapNavItem(
  navItem: React.ReactElement<SidebarNavItemProps>,
  onClick: () => void
) {
  warnIfOverwriting(navItem.props, 'onClick', SidebarNavItem.name)

  return React.cloneElement(navItem, {
    ...navItem.props,
    onClick,
  })
}

export const SidebarNav: React.FC<SidebarNavProps> = ({
  children,
  onBlur,
  onFocus,
  onItemClick,
  onMouseOut,
  onMouseOver,
}) => (
  <nav
    className="rn-sidebar__top"
    data-testid="sidebar-nav"
    onBlur={onBlur}
    onFocus={onFocus}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
  >
    {React.Children.map(
      children,
      (child: React.ReactElement<SidebarNavItemProps>) => {
        return mapNavItem(child, onItemClick)
      }
    )}
  </nav>
)
