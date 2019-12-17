import React from 'react'
import { storiesOf } from '@storybook/react'

import { Link } from '../index'
import { TabNav, TabNavItem } from '.'

const stories = storiesOf('TabNav', module)

stories.add('Default', () => (
  <TabNav>
    <TabNavItem link={<Link href="/thing1">Thing 1</Link>} isActive />
    <TabNavItem link={<Link href="/thing2">Thing 2</Link>} />
    <TabNavItem link={<Link href="/thing3">Thing 3</Link>} />
  </TabNav>
))
