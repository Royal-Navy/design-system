import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Masthead from './index'
import Button from '../Button/index'

const stories = storiesOf('Masthead', module)

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
  <Masthead
    className="h_mb-4"
    title={text('title', 'NELSON Apps')}
    onClick={action('clicked')}
  >
    <Button
      className="rn-masthead__action"
      onClick={action('clicked')}
      type="primary"
      state="neutral"
      size="regular"
    >
      Action
    </Button>
  </Masthead>
))

stories.add('With Links', () => (
  <Masthead
    className="h_mb-4"
    title={text('title', 'NELSON Apps')}
    onClick={action('clicked')}
    links={links}
  >
    <Button
      className="rn-masthead__action"
      onClick={action('clicked')}
      type="primary"
      state="neutral"
      size="regular"
    >
      Action
    </Button>
  </Masthead>
))
