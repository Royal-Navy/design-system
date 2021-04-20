import React from 'react'

import { Nav, NavItem } from '../../../common/Nav'
import { SidebarNavItem, SidebarNavItemProps } from './index'
import { warnIfOverwriting } from '../../../helpers'

export interface SidebarNavProps extends Nav<NavItem> {
  /**
   * Optional handler invoked when `onBlur` event is emitted.
   */
  onBlur?: () => void
  /**
   * Optional handler invoked when `onFocus` event is emitted.
   */
  onFocus?: () => void
  /**
   * Optional handler invoked when an item is clicked.
   */
  onItemClick?: () => void
  /**
   * Optional handler invoked when the `onMouseOut` event is emitted.
   */
  onMouseOut?: () => void
  /**
   * Optional handler invoked when the `onMouseOver` event is emitted.
   */
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

/**
 * @deprecated
 */
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
