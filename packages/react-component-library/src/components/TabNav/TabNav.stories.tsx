import React from 'react'
import { storiesOf } from '@storybook/react'

import { Link } from '../Link'
import { TabNav, TabNavItem } from '.'

const stories = storiesOf('TabNav', module)

stories.add('Default', () => (
  <TabNav>
    <TabNavItem link={<Link href="#">Thing 1</Link>} isActive />
    <TabNavItem link={<Link href="#">Thing 2</Link>} />
    <TabNavItem link={<Link href="#">Thing 3</Link>} />
  </TabNav>
))
