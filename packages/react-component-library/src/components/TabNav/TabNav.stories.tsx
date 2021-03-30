import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Link } from '../Link'
import { TabNav, TabNavItem } from '.'

export default {
  component: TabNav,
  subcomponents: { TabNavItem },
  title: 'Tab Nav',
} as Meta

export const Default = (props: any) => (
  <TabNav {...props}>
    <TabNavItem link={<Link href="#">Example Tab 1</Link>} isActive />
    <TabNavItem link={<Link href="#">Example Tab 2</Link>} />
    <TabNavItem link={<Link href="#">Example Tab 3</Link>} />
  </TabNav>
)
