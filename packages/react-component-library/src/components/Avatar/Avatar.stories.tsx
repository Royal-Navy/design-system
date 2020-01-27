import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { Avatar, AVATAR_VARIANT } from '.'

const stories = storiesOf('Avatar', module)
const examples = storiesOf('Avatar/Examples', module)

stories.addDecorator(withKnobs)

const INITIALS = 'AT'

stories.add('Default', () => (
  <div style={{ background: '#A0A0A0', padding: 20 }}>
    <Avatar initials={text('Initials', INITIALS)} />
  </div>
))

examples.add('Dark', () => (
  <div style={{ background: '#A0A0A0', padding: 20 }}>
    <Avatar initials={INITIALS} variant={AVATAR_VARIANT.DARK} />
  </div>
))
