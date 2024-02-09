import React from 'react'

import { Nav, NavItem } from '../../../common/Nav'
import { TabNav } from '../../TabNav'

export const MastheadNav = ({ children, ...rest }: Nav<NavItem>) => (
  <TabNav data-testid="masthead-nav" {...rest}>
    {children}
  </TabNav>
)

MastheadNav.displayName = 'MastheadNav'
