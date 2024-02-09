import React from 'react'

import { getKey } from '../../../helpers'
import { NavItem } from '../../../common/Nav'
import { TabNavItem } from '../../TabNav'

export const MastheadNavItem = ({
  isActive = false,
  link,
  ...rest
}: NavItem) => (
  <TabNavItem
    data-testid="masthead-nav-item"
    isActive={isActive}
    key={getKey('masthead-nav-item', link.toString())}
    link={React.cloneElement(link as React.ReactElement)}
    {...rest}
  />
)

MastheadNavItem.displayName = 'MastheadNavItem'
