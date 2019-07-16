import React from 'react'
import { storiesOf } from '@storybook/react'

import TabNav from './index'

const stories = storiesOf('TabNav', module)

const navItems: NavItemAnchorType[] = [
  {
    label: 'Thing 1',
    href: '/thing1',
    active: true,
  },
  {
    label: 'Thing 2',
    href: '/thing2',
  },
  {
    label: 'Thing 2',
    href: '/thing2',
  },
]

stories.add('Default', () => <TabNav navItems={navItems} />)
