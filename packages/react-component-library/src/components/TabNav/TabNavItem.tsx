import React from 'react'
import uuid from 'uuid'
import classNames from 'classnames'

export interface TabNavItemProps {
  isActive?: boolean
  link: React.ReactElement<LinkTypes>
}

export const TabNavItem: React.FC<TabNavItemProps> = ({ isActive, link }) => {
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
