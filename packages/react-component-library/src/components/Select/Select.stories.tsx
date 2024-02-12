import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@royalnavy/icon-library'
import styled from 'styled-components'

import { Select } from './index'
import { SelectOption } from './SelectOption'

export default {
  component: Select,
  title: 'Select',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    docs: {
      description: {
        component:
          'This component wraps a popular open-source library. See comprehensive documentation [here](https://www.downshift-js.com/downshift/).',
      },
    },
    options: {
      enableShortcuts: false,
    },
  },
  args: {
    label: 'Some label',
  },
} as Meta<typeof Select>

const StyledWrapper = styled.div<{ $isDisabled?: boolean }>`
  height: ${({ $isDisabled }) => ($isDisabled ? 'initial' : '18rem')};
  max-width: 20rem;
`

const Template: StoryFn<typeof Select> = (args) => (
  <StyledWrapper $isDisabled={args.isDisabled}>
    <Select {...args}>
      <SelectOption value="one">A</SelectOption>
      <SelectOption value="two">B</SelectOption>
      <SelectOption value="long">
        This is a really, really long select option label that overflows the
        container when selected
      </SelectOption>
      <SelectOption value="three" isDisabled>
        Three (disabled)
      </SelectOption>
    </Select>
  </StyledWrapper>
)

const TemplateWithIconsAndBadges: StoryFn<typeof Select> = (args) => (
  <StyledWrapper $isDisabled={args.isDisabled}>
    <Select {...args}>
      <SelectOption badge={100} icon={<IconAnchor />} value="one">
        One
      </SelectOption>
      <SelectOption badge={110} icon={<IconRemove />} value="two">
        Two
      </SelectOption>
      <SelectOption badge={111} icon={<IconAgriculture />} value="three">
        Three
      </SelectOption>
      <SelectOption badge={112} icon={<IconBrightnessAuto />} value="four">
        Four
      </SelectOption>
    </Select>
  </StyledWrapper>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const NoClearButton = Template.bind({})
NoClearButton.args = {
  hideClearButton: true,
  initialValue: 'two',
}

export const Open = Template.bind({})
Open.args = {
  initialIsOpen: true,
}

export const WithError = Template.bind({})
WithError.args = {
  isInvalid: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  initialValue: 'two',
}

export const WithIconsAndBadges = TemplateWithIconsAndBadges.bind({})
