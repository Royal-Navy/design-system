import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Link } from '../Link'
import { TabNav, TabNavItem } from '.'

export default {
  component: TabNav,
  subcomponents: { TabNavItem },
  title: 'Tab Nav',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'Use this component to navigate between different pages or routes.',
      },
    },
  },
} as Meta<typeof TabNav>

export const Default: StoryFn<typeof TabNav> = (props) => (
  <TabNav {...props}>
    <TabNavItem link={<Link href="#">Example Tab 1</Link>} isActive />
    <TabNavItem link={<Link href="#">Example Tab 2</Link>} />
    <TabNavItem link={<Link href="#">Example Tab 3</Link>} />
  </TabNav>
)
