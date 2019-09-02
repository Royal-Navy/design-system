import React from 'react'
import uuid from 'uuid'

interface ScrollableNavItemProps {
  LinkComponent?: any
  navItem: NavItemTypes
}

export const ScrollableNavItem: React.FC<ScrollableNavItemProps> = ({
  LinkComponent,
  navItem: { active = false, label, ...rest },
}) => (
  <li
    key={uuid()}
    className={`rn-scrollable-nav__item ${active ? 'is-active' : ''}`}
    data-testid={active ? 'tab-active' : 'tab'}
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
