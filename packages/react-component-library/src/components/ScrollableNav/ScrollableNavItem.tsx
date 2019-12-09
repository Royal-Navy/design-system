import React from 'react'
import uuid from 'uuid'

interface ScrollableNavItemProps {
  LinkComponent?: any
  navItem: NavItemTypes
}

export const ScrollableNavItem: React.FC<ScrollableNavItemProps> = ({
  LinkComponent,
  navItem: { isActive = false, label, ...rest },
}) => (
  <li
    key={uuid()}
    className={`rn-scrollable-nav__item ${isActive ? 'is-active' : ''}`}
    data-testid={isActive ? 'tab-active' : 'tab'}
  >
    <LinkComponent
      className="rn-scrollable-nav__link"
      data-testid="tablink"
      {...rest}
    >
      {label}
    </LinkComponent>
  </li>
)

ScrollableNavItem.displayName = 'ScrollableNavItem'
