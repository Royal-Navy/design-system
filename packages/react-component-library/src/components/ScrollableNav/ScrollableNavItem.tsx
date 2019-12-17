import React from 'react'
import uuid from 'uuid'

export interface ScrollableNavItemProps {
  isActive?: boolean
  link: React.ReactElement<LinkTypes>
}

export const ScrollableNavItem: React.FC<ScrollableNavItemProps> = ({
  isActive,
  link,
}) => (
  <li
    key={uuid()}
    className={`rn-scrollable-nav__item ${isActive ? 'is-active' : ''}`}
    data-testid={isActive ? 'tab-active' : 'tab'}
  >
    {link}
  </li>
)

ScrollableNavItem.displayName = 'ScrollableNavItem'
