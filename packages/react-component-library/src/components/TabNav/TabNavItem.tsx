import React from 'react'
import classNames from 'classnames'
import { getKey } from '../../helpers'

import { NavItem } from '../../common/Nav'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link }) => {
  const classes = classNames('rn-tab-nav__item', { 'is-active': isActive })

  return (
    <li
      key={getKey('tab-nav-item', link.toString())}
      className={classes}
      data-testid={isActive ? 'tab-active' : 'tab'}
    >
      {link}
    </li>
  )
}
