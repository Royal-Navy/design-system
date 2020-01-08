import React from 'react'

import { Nav, NavItem } from '../../types/Nav'
import {
  ScrollableNav,
  ScrollableNavItem,
} from '../../components/ScrollableNav'

export const MastheadNav: React.FC<Nav> = props => {
  return (
    <ScrollableNav {...props} className="rn-masthead__nav">
      {props.children}
    </ScrollableNav>
  )
}

export const MastheadNavItem: React.FC<NavItem> = props => (
  <ScrollableNavItem {...props} />
)
