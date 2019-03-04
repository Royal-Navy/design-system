import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'

import Progress from './index'

const stories = storiesOf('Progress', module)

stories.addDecorator(withKnobs)

stories.add('Small', () => <Progress value={10} size="small" state="danger" />)
stories.add('Default', () => <Progress value={40} />)
stories.add('Large', () => (
  <Progress label="40%" value={75} size="large" state="neutral" />
))
