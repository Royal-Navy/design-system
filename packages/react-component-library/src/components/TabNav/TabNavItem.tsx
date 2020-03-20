import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'

import { NavItem } from '../../types/Nav'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link }) => {
  const classes = classNames('rn-tab-nav__item', { 'is-active': isActive })

  return (
    <li
      key={uuidv4()}
      className={classes}
      data-testid={isActive ? 'tab-active' : 'tab'}
    >
      {link}
    </li>
  )
}
