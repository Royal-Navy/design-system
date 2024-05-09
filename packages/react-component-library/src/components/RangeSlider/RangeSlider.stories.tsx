import React from 'react'
import styled from 'styled-components'
import { StoryFn, Meta } from '@storybook/react'

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'
import { RangeSlider } from './index'

export default {
  component: RangeSlider,
  title: 'Components/Range Slider',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    a11y: {
      config: {
        rules: storyAccessibilityConfig['Range Slider'],
      },
    },
  },
} as Meta<typeof RangeSlider>

const StyledWrapper = styled.div`
  display: flex;
  height: 5rem;
  padding: 0 1.5rem;
`

const Template: StoryFn<typeof RangeSlider> = (props) => (
  <StyledWrapper>
    <RangeSlider {...props} />
  </StyledWrapper>
)

export const Default = Template.bind({})
Default.args = {
  domain: [0, 40],
  mode: 1,
  values: [20],
  tracksLeft: true,
}

export const MultipleHandles = Template.bind({})
MultipleHandles.args = {
  domain: [0, 40],
  mode: 2,
  values: [10, 30],
  step: 1,
  tickCount: 10,
  hasMarkers: true,
  displayUnit: 'pt',
}
MultipleHandles.storyName = 'Multiple handles'

export const SingleThreshold = Template.bind({})
SingleThreshold.args = {
  domain: [0, 40],
  mode: 1,
  values: [30],
  tracksLeft: true,
  hasMarkers: true,
  thresholds: [40],
}
SingleThreshold.storyName = 'Single threshold'

export const DoubleThreshold = Template.bind({})
DoubleThreshold.args = {
  domain: [0, 40],
  mode: 1,
  values: [30],
  tracksLeft: true,
  hasMarkers: true,
  thresholds: [40, 60],
}
DoubleThreshold.storyName = 'Double threshold'

export const CustomValueFormatter = Template.bind({})
CustomValueFormatter.args = {
  domain: [0, 40],
  mode: 1,
  values: [20],
  tickCount: 4,
  tracksLeft: true,
  hasMarkers: true,
  formatValue: ({ value }) => `£${value.toFixed(2)}`,
}
CustomValueFormatter.storyName = 'Custom value formatter'

export const Stepped = Template.bind({})
Stepped.args = {
  domain: [0, 40],
  step: 10,
  mode: 1,
  values: [20],
  tickCount: 4,
  tracksLeft: true,
  hasMarkers: true,
}

export const WithIcons = Template.bind({})
WithIcons.args = {
  domain: [0, 40],
  step: 10,
  mode: 1,
  values: [20],
  tickCount: 4,
  tracksLeft: true,
  hasMarkers: true,
  IconLeft: IconBrightnessLow,
  IconRight: IconBrightnessHigh,
}
WithIcons.storyName = 'Icons'

export const WithLabels = Template.bind({})
WithLabels.args = {
  domain: [0, 40],
  step: 2,
  mode: 1,
  values: [20],
  tracksLeft: true,
  hasLabels: true,
  hasMarkers: true,
  tickCount: 20,
}
WithLabels.storyName = 'Labels'

export const ReversedScale = Template.bind({})
ReversedScale.args = {
  domain: [0, 40],
  step: 2,
  mode: 1,
  values: [20],
  tracksRight: true,
  hasLabels: true,
  hasMarkers: true,
  tickCount: 20,
  isReversed: true,
}
ReversedScale.storyName = 'Reversed scale'

export const Disabled = Template.bind({})
Disabled.args = {
  domain: [0, 40],
  step: 10,
  mode: 1,
  values: [20],
  tracksLeft: true,
  hasMarkers: true,
  isDisabled: true,
}
