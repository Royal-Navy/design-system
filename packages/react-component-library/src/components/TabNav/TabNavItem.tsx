import React from 'react'
import uuid from 'uuid'

interface TabNavItemProps {
  LinkComponent?: any
  navItem: NavItemTypes
}

const TabNavItem: React.FC<TabNavItemProps> = ({
  LinkComponent,
  navItem: { isActive, label, ...rest },
}) => (
  <li
    key={uuid()}
    className={`rn-tab-nav__item ${isActive ? 'is-active' : ''}`}
    data-testid={isActive ? 'tab-active' : 'tab'}
  >
    <LinkComponent className="rn-tab-nav__link" data-testid="tablink" {...rest}>
      {label}
    </LinkComponent>
  </li>
)

export default TabNavItem
