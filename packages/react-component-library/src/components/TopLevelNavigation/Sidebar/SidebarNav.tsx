import React from 'react'

import { Nav, NavItem } from '../../../common/Nav'
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
  onItemClick,
  ...rest
}) => (
  <nav className="rn-sidebar__top" data-testid="sidebar-nav" {...rest}>
    {React.Children.map(
      children,
      (child: React.ReactElement<SidebarNavItemProps>) => {
        return mapNavItem(child, onItemClick)
      }
    )}
  </nav>
)
