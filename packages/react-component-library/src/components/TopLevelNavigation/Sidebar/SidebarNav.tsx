import React from 'react'
import { useSidebar } from './index'
import { warnIfOverwriting } from '../../../helpers'
import { StyledNav } from './partials'
import { Nav, NavItem } from '../../../common/Nav'
import { SidebarNavItem, SidebarNavItemProps } from './SidebarNavItem'

export interface SidebarNavProps extends Nav<NavItem> {
  /**
   * Optional handler invoked when `onBlur` event is emitted.
   */
  onBlur?: (e: React.FocusEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when `onFocus` event is emitted.
   */
  onFocus?: (e: React.FocusEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when an item is clicked.
   */
  onItemClick?: (e: React.MouseEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when the `onMouseOut` event is emitted.
   */
  onMouseOut?: (e: React.MouseEvent<HTMLElement>) => void
  /**
   * Optional handler invoked when the `onMouseOver` event is emitted.
   */
  onMouseOver?: (e: React.MouseEvent<HTMLElement>) => void
}

export function mapNavItem(
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
}: SidebarNavProps) => {
  const { setIsOpen } = useSidebar()

  const handleItemClick = (e: React.MouseEvent<HTMLElement>) => {
    onItemClick?.(e)
    setIsOpen(false)
  }

  return (
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
          return mapNavItem(child, handleItemClick)
        }
      )}
    </StyledNav>
  )
}

SidebarNav.displayName = 'SidebarNav'
