import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Avatar from './index'

const stories = storiesOf('Avatar', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => <Avatar initials={text('initials', 'zt')} />)

stories.add('Large', () => (
  <Avatar initials={text('initials', 'zt')} size={text('initials', 'large')} />
))

stories.add('Small', () => (
  <Avatar initials={text('initials', 'zt')} size={text('size', 'small')} />
))
