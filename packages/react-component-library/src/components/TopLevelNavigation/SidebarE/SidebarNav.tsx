import React from 'react'

import { Nav, NavItem } from '../../../common/Nav'
import { SidebarNavItemE, SidebarNavItemEProps } from './index'
import { warnIfOverwriting } from '../../../helpers'
import { StyledNav } from './partials/StyledNav'

export interface SidebarNavEProps extends Nav<NavItem> {
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
  ...rest
}) => (
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
      (child: React.ReactElement<SidebarNavItemEProps>) => {
        return mapNavItem(child, onItemClick)
      }
    )}
  </StyledNav>
)

SidebarNavE.displayName = 'SidebarNav'
