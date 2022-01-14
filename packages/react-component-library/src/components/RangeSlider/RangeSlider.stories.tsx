import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import {
  IconBrightnessLow,
  IconBrightnessHigh,
} from '@defencedigital/icon-library'
import { RangeSlider } from './index'

export default {
  component: RangeSlider,
  title: 'Range Slider',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof RangeSlider>

const disableColorContrastRule = {
  a11y: {
    config: {
      rules: [
        {
          id: 'color-contrast',
          enabled: false,
        },
      ],
    },
  },
}

export const Default: ComponentStory<typeof RangeSlider> = (props) => (
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

Default.parameters = disableColorContrastRule

export const MultipleHandles: ComponentStory<typeof RangeSlider> = (props) => (
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

MultipleHandles.parameters = disableColorContrastRule

export const SingleThreshold: ComponentStory<typeof RangeSlider> = (props) => (
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

SingleThreshold.parameters = disableColorContrastRule

export const DoubleThreshold: ComponentStory<typeof RangeSlider> = (props) => (
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

DoubleThreshold.parameters = disableColorContrastRule

export const CustomValueFormatter: ComponentStory<typeof RangeSlider> = (
  props
) => (
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

CustomValueFormatter.parameters = disableColorContrastRule

export const Stepped: ComponentStory<typeof RangeSlider> = (props) => (
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

Stepped.parameters = disableColorContrastRule

export const WithPercentage: ComponentStory<typeof RangeSlider> = (props) => (
  <div style={{ display: 'flex', height: '5rem' }}>
    <RangeSlider
      {...props}
      domain={[0, 40]}
      step={10}
      mode={1}
      values={[20]}
      tickCount={4}
      tracksLeft
      hasPercentage
    />
  </div>
)

WithPercentage.storyName = 'With percentage'

WithPercentage.parameters = disableColorContrastRule

export const WithIcons: ComponentStory<typeof RangeSlider> = (props) => (
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

WithIcons.parameters = disableColorContrastRule

export const WithLabels: ComponentStory<typeof RangeSlider> = (props) => (
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

WithLabels.parameters = disableColorContrastRule

export const ReversedScale: ComponentStory<typeof RangeSlider> = (props) => (
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

ReversedScale.parameters = disableColorContrastRule

export const Disabled: ComponentStory<typeof RangeSlider> = (props) => (
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

Disabled.parameters = disableColorContrastRule
