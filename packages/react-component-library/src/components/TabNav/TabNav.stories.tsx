import React from 'react'
import { StoryFn, Meta } from '@storybook/react-webpack5'

import { Link } from '../Link'
import { TAB_VARIANT } from '../TabBase/constants'
import { TabNav, TabNavItem } from '.'

export default {
  component: TabNav,
  subcomponents: { TabNavItem },
  title: 'Components/Tab Nav',
  argTypes: {
    variant: {
      control: 'select',
      options: Object.values(TAB_VARIANT),
    },
  },
  args: {
    variant: TAB_VARIANT.BOXED,
  },
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'Use this component to navigate between different pages or routes. Prefer the underline variant for new work; the boxed variant will be retired in the next major version.',
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
