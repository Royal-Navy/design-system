import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Link } from '../Link'
import { TabNav, TabNavItem } from '.'

export default {
  component: TabNav,
  subcomponents: { TabNavItem },
  title: 'Tab Nav',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof TabNav>

export const Default: ComponentStory<typeof TabNav> = (props) => (
  <TabNav {...props}>
    <TabNavItem link={<Link href="#">Example Tab 1</Link>} isActive />
    <TabNavItem link={<Link href="#">Example Tab 2</Link>} />
    <TabNavItem link={<Link href="#">Example Tab 3</Link>} />
  </TabNav>
)
