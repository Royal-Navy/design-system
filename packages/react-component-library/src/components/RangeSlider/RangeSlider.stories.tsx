import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { RangeSlider } from './index'

const stories = storiesOf('RangeSlider', module)
const examples = storiesOf('RangeSlider/Examples', module)

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

examples.add('Multiple handles', () => (
  <div style={{ margin: '4rem' }}>
    <RangeSlider
      domain={[0, 40]}
      mode={2}
      values={[10, 20, 30]}
      onChange={action('onChange')}
      onUpdate={action('onUpdate')}
      tracksLeft
      tickCount={10}
      thresholds={[40, 60]}
      hasPercentage
      displayUnit="pt"
    />
  </div>
))

examples.add('Custom value formatter', () => (
  <div style={{ padding: '2rem' }}>
    <RangeSlider
      domain={[0, 40]}
      mode={2}
      values={[10, 20, 30]}
      onChange={action('onChange')}
      onUpdate={action('onUpdate')}
      tracksLeft
      tickCount={10}
      thresholds={[40, 60]}
      formatValue={({ value }) => `£${value.toFixed(2)}`}
    />
  </div>
))

examples.add('Stepped', () => (
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

examples.add('Single threshold', () => (
  <RangeSlider
    domain={[0, 40]}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksLeft
    thresholds={[40]}
  />
))

examples.add('Double threshold', () => (
  <RangeSlider
    domain={[0, 40]}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksLeft
    thresholds={[40, 60]}
  />
))

examples.add('With icons', () => (
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tickCount={4}
    tracksLeft
    IconLeft={IconBrightnessLow}
    IconRight={IconBrightnessHigh}
  />
))

examples.add('With labels', () => (
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

examples.add('Reversed scale', () => (
  <RangeSlider
    domain={[0, 40]}
    step={2}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksRight
    hasLabels
    tickCount={20}
    isReversed
  />
))

examples.add('Disabled', () => (
  <RangeSlider
    domain={[0, 40]}
    step={10}
    mode={1}
    values={[20]}
    onChange={action('onChange')}
    onUpdate={action('onUpdate')}
    tracksLeft
    isDisabled
  />
))
