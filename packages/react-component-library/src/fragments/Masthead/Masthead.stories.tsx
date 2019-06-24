import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import Masthead from './index'

const stories = storiesOf('Masthead', module)

stories.addDecorator(withKnobs)

const navItems = [
  {
    href: '/styles',
    label: 'Styles',
  },
  {
    href: '/components',
    label: 'Components',
  },
  {
    href: '/patterns',
    label: 'Patterns',
    active: true,
  },
  {
    href: '/community',
    label: 'Community',
  },
  {
    href: '/about',
    label: 'About',
  },
]

stories.add('Default', () => (
  <Masthead
    navItems={navItems}
    onSearch={data => action(JSON.stringify(data, null, 2))}
    phase="alpha"
  />
))

stories.add('With title', () => (
  <Masthead
    navItems={navItems}
    onSearch={data => action(JSON.stringify(data, null, 2))}
    title="Standards"
    phase="alpha"
  />
))

stories.add('Without phase', () => (
  <Masthead
    navItems={navItems}
    onSearch={data => action(JSON.stringify(data, null, 2))}
    title="Standards"
  />
))
