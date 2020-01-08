import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

import { NavItem } from '../../types/Nav'

export const TabNavItem: React.FC<NavItem> = ({ isActive, link }) => {
  const classes = classNames('rn-tab-nav__item', { 'is-active': isActive })

  return (
    <li
      key={uuid()}
      className={classes}
      data-testid={isActive ? 'tab-active' : 'tab'}
    >
      {link}
    </li>
  )
}
