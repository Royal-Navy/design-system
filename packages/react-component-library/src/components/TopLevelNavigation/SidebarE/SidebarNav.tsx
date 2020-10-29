import React from 'react'
import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { Nav, NavItem } from '../../../common/Nav'
import { SidebarNavItemE, SidebarNavItemEProps } from './index'
import { warnIfOverwriting } from '../../../helpers'

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

const { color, spacing } = selectors

const StyledSidebarNav = styled.nav`
  height: 100%;
  padding: ${spacing('1')} ${spacing('6')};
  color: ${color('neutral', 'white')};
`

export const SidebarNavE: React.FC<SidebarNavEProps> = ({
  children,
  onBlur,
  onFocus,
  onItemClick,
  onMouseOut,
  onMouseOver,
}) => (
  <StyledSidebarNav
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
  </StyledSidebarNav>
)

SidebarNavE.displayName = 'SidebarNav'
