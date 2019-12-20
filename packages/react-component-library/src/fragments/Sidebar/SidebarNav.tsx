import React from 'react'

import { Nav } from '../../types/Nav'
import { SidebarNavItemProps } from './SidebarNavItem'

export interface SidebarNavProps extends Nav {
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
  if (navItem.props.onClick) {
    console.warn('Prop `onClick` on `SidebarNavItem` will be overwritten')
  }
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
}) => {
  const childrenAsArray = children as React.ReactElement<SidebarNavItemProps>[]

  return (
    <nav
      className="rn-sidebar__top"
      data-testid="sidebar-nav"
      onBlur={onBlur}
      onFocus={onFocus}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      {React.Children.map(childrenAsArray, child => {
        return mapNavItem(child, onItemClick)
      })}
    </nav>
  )
}
