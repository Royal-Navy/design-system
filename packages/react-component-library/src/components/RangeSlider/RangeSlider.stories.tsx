import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { RangeSlider } from './index'

const stories = storiesOf('RangeSlider', module)

stories.add('Default', () => (
  <RangeSlider
    domain={[0, 40]}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksLeft
  />
))

stories.add('Stepped', () => (
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tickCount={4}
    tracksLeft
  />
))

stories.add('Multiple handles', () => (
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[10, 30]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
  />
))

stories.add('With labels', () => (
  <RangeSlider
    domain={[0, 40]}
    step={2}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksLeft
    hasLabels
    tickCount={20}
  />
))

stories.add('Reversed scale', () => (
  <RangeSlider
    domain={[0, 40]}
    step={2}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksLeft
    hasLabels
    tickCount={20}
    reversed
  />
))

stories.add('Disabled', () => (
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksLeft
    disabled
  />
))
