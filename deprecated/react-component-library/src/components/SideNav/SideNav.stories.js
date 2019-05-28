import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import SideNav from './index'

const stories = storiesOf('SideNav', module)

export const headerLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Dashboard',
    to: '/dashboard',
  },
]

export const links = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Dashboard',
    to: '/dashboard',
  },
  {
    label: 'Settings',
    to: '/settings',
  },
]

stories.addDecorator(withKnobs)

stories.add('Default', () => (
  <SideNav
    className="h_mb-4"
    title={text('title', 'NELSON Apps')}
    headerLinks={headerLinks}
    links={links}
  />
))
