import React from 'react'
import uuid from 'uuid'

interface TabNavItemProps {
  LinkComponent?: any
  navItem: NavItemTypes
}

const TabNavItem: React.FC<TabNavItemProps> = ({
  LinkComponent,
  navItem: { active, label, ...rest },
}) => (
  <li
    key={uuid()}
    className={`rn-tab-nav__item ${active ? 'is-active' : ''}`}
    data-testid={active ? 'tab-active' : 'tab'}
  >
    <LinkComponent className="rn-tab-nav__link" data-testid="tablink" {...rest}>
      {label}
    </LinkComponent>
  </li>
)

export default TabNavItem
