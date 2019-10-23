import React from 'react'
import { storiesOf } from '@storybook/react'

import { Avatar } from './index'

const stories = storiesOf('Avatar', module)

stories.add('Default', () => (
  <div style={{ background: '#A0A0A0', padding: 20 }}>
    <Avatar initials="AT" />
  </div>
))
stories.add('Light', () => (
  <div style={{ background: '#A0A0A0', padding: 20 }}>
    <Avatar light initials="AT" />
  </div>
))
stories.add('Dark', () => (
  <div style={{ background: '#A0A0A0', padding: 20 }}>
    <Avatar dark initials="AT" />
  </div>
))
