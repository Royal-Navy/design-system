import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Nav from './index'

const stories = storiesOf('Nav', module)

stories.addDecorator(withKnobs)

const navItems = [
  {
    url: 'http://testurl.test',
    label: 'Home',
  },
  {
    url: 'http://testurl.test',
    label: 'Link 1',
  },
  {
    url: 'http://testurl.test',
    label: 'Link 2',
  },
  {
    url: 'http://testurl.test',
    label: 'Link 3',
  },
]

stories.add('Vertical', () => <Nav navItems={navItems} />)

stories.add('Horizontal', () => (
  <Nav navItems={navItems} orientation="horizontal" />
))
