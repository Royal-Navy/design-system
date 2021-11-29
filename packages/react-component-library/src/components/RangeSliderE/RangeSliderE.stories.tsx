import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react'

import {
  IconBrightnessLow,
  IconBrightnessHigh,
} from '@defencedigital/icon-library'
import { RangeSliderE, RangeSliderEProps } from './index'

export default {
  component: RangeSliderE,
  title: 'Range Slider (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

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

const StyledWrapper = styled.div`
  display: flex;
  height: 5rem;
  padding: 0 1.5rem;
`

const Template: Story<RangeSliderEProps> = (props) => (
  <StyledWrapper>
    <RangeSliderE {...props} />
  </StyledWrapper>
)

export const Default = Template.bind({})
Default.args = {
  domain: [0, 40],
  mode: 1,
  values: [20],
  tracksLeft: true,
}
Default.parameters = disableColorContrastRule

export const MultipleHandles = Template.bind({})
MultipleHandles.args = {
  domain: [0, 40],
  mode: 2,
  values: [10, 20, 30],
  tracksLeft: true,
  tickCount: 10,
  thresholds: [40, 60],
  hasMarkers: true,
  displayUnit: 'pt',
}
MultipleHandles.storyName = 'Multiple handles'
MultipleHandles.parameters = disableColorContrastRule

export const SingleThreshold = Template.bind({})
SingleThreshold.args = {
  domain: [0, 40],
  mode: 1,
  values: [20],
  tracksLeft: true,
  hasMarkers: true,
  thresholds: [40],
}
SingleThreshold.storyName = 'Single threshold'
SingleThreshold.parameters = disableColorContrastRule

export const DoubleThreshold = Template.bind({})
DoubleThreshold.args = {
  domain: [0, 40],
  mode: 1,
  values: [20],
  tracksLeft: true,
  hasMarkers: true,
  thresholds: [40, 60],
}
DoubleThreshold.storyName = 'Double threshold'
DoubleThreshold.parameters = disableColorContrastRule

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
CustomValueFormatter.parameters = disableColorContrastRule

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
Stepped.storyName = 'Stepped'
Stepped.parameters = disableColorContrastRule

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
WithIcons.storyName = 'With icons'
WithIcons.parameters = disableColorContrastRule

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
WithLabels.storyName = 'With labels'
WithLabels.parameters = disableColorContrastRule

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
ReversedScale.parameters = disableColorContrastRule

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
Disabled.storyName = 'Disabled'
Disabled.parameters = disableColorContrastRule
