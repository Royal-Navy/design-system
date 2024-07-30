import React from 'react'
import { SidebarNavItem, SidebarNavItemProps, SidebarNavProps } from './index'
import { warnIfOverwriting } from '../../../helpers'
import { StyledNav } from './partials'

function mapNavItem(
  navItem: React.ReactElement<SidebarNavItemProps>,
  onClick: ((e: React.MouseEvent<HTMLElement>) => void) | undefined
) {
  warnIfOverwriting(navItem.props, 'onClick', SidebarNavItem.name)

  return React.cloneElement(navItem, {
    ...navItem.props,
    onClick,
  })
}

export const SidebarNav = ({
  children = [],
  onBlur,
  onFocus,
  onItemClick,
  onMouseOut,
  onMouseOver,
  ...rest
}: SidebarNavProps) => (
  <StyledNav
    onBlur={onBlur}
    onFocus={onFocus}
    onMouseOut={onMouseOut}
    onMouseOver={onMouseOver}
    data-testid="sidebar-nav"
    {...rest}
  >
    {React.Children.map(
      children,
      (child: React.ReactElement<SidebarNavItemProps>) => {
        return mapNavItem(child, onItemClick)
      }
    )}
  </StyledNav>
)

SidebarNav.displayName = 'SidebarNav'
