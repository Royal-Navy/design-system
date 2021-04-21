import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { RangeSlider, RangeSliderProps } from './index'

export default {
  component: RangeSlider,
  title: 'Range Slider',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider {...props} />
  </div>
)

Default.args = {
  domain: [0, 40],
  mode: 1,
  values: [20],
  tracksLeft: true,
}

export const MultipleHandles: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      mode={2}
      values={[10, 20, 30]}
      tracksLeft
      tickCount={10}
      thresholds={[40, 60]}
      hasPercentage
      displayUnit="pt"
    />
  </div>
)

MultipleHandles.storyName = 'Multiple handles'

export const SingleThreshold: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      mode={1}
      values={[20]}
      tracksLeft
      thresholds={[40]}
    />
  </div>
)

SingleThreshold.storyName = 'Single threshold'

export const DoubleThreshold: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      mode={1}
      values={[20]}
      tracksLeft
      thresholds={[40, 60]}
    />
  </div>
)

DoubleThreshold.storyName = 'Double threshold'

export const CustomValueFormatter: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      mode={1}
      values={[20]}
      tickCount={4}
      tracksLeft
      formatValue={({ value }) => `£${value.toFixed(2)}`}
    />
  </div>
)

CustomValueFormatter.storyName = 'Custom value formatter'

export const Stepped: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      step={10}
      mode={1}
      values={[20]}
      tickCount={4}
      tracksLeft
    />
  </div>
)

Stepped.storyName = 'Stepped'

export const WithIcons: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      step={10}
      mode={1}
      values={[20]}
      tickCount={4}
      tracksLeft
      IconLeft={IconBrightnessLow}
      IconRight={IconBrightnessHigh}
    />
  </div>
)

WithIcons.storyName = 'With icons'

export const WithLabels: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      step={2}
      mode={1}
      values={[20]}
      tracksLeft
      hasLabels
      tickCount={20}
    />
  </div>
)

WithLabels.storyName = 'With labels'

export const ReversedScale: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      step={2}
      mode={1}
      values={[20]}
      tracksRight
      hasLabels
      tickCount={20}
      isReversed
    />
  </div>
)

ReversedScale.storyName = 'Reversed scale'

export const Disabled: Story<RangeSliderProps> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      step={10}
      mode={1}
      values={[20]}
      tracksLeft
      isDisabled
    />
  </div>
)

Disabled.storyName = 'Disabled'
