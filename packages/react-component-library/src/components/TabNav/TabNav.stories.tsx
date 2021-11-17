import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Link } from '../Link'
import { TabNav, TabNavItem } from '.'
import { Nav, NavItem } from '../../common/Nav'

export default {
  component: TabNav,
  subcomponents: { TabNavItem },
  title: 'Tab Nav',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<Nav<NavItem>> = (props) => (
  <TabNav {...props}>
    <TabNavItem link={<Link href="#">Example Tab 1</Link>} isActive />
    <TabNavItem link={<Link href="#">Example Tab 2</Link>} />
    <TabNavItem link={<Link href="#">Example Tab 3</Link>} />
  </TabNav>
)
