import React from 'react'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@royalnavy/icon-library'
import { StoryFn, Meta } from '@storybook/react'
import styled from 'styled-components'

import { Autocomplete, AutocompleteOption } from './index'

export default {
  component: Autocomplete,
  title: 'Components/Autocomplete',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    label: 'Some label',
  },
  argTypes: {
    hideClearButton: {
      control: 'boolean',
    },
  },
} as Meta<typeof Autocomplete>

const StyledWrapper = styled.div<{ $isDisabled?: boolean }>`
  height: ${({ $isDisabled }) => ($isDisabled ? 'initial' : '18rem')};
  max-width: 20rem;
`

const Template: StoryFn<typeof Autocomplete> = (args) => (
  <StyledWrapper $isDisabled={args.isDisabled}>
    <Autocomplete {...args}>
      <AutocompleteOption value="one">One</AutocompleteOption>
      <AutocompleteOption value="two">Two</AutocompleteOption>
      <AutocompleteOption value="three">Three</AutocompleteOption>
      <AutocompleteOption value="long">
        This is a really, really long select option label that overflows the
        container when selected
      </AutocompleteOption>
    </Autocomplete>
  </StyledWrapper>
)

const TemplateWithIconsAndBadges: StoryFn<typeof Autocomplete> = (args) => (
  <StyledWrapper $isDisabled={args.isDisabled}>
    <Autocomplete {...args}>
      <AutocompleteOption badge={100} icon={<IconAnchor />} value="one">
        One
      </AutocompleteOption>
      <AutocompleteOption badge={110} icon={<IconRemove />} value="two">
        Two
      </AutocompleteOption>
      <AutocompleteOption badge={111} icon={<IconAgriculture />} value="three">
        Three
      </AutocompleteOption>
      <AutocompleteOption
        badge={112}
        icon={<IconBrightnessAuto />}
        value="four"
      >
        Four
      </AutocompleteOption>
    </Autocomplete>
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

export const Error = Template.bind({})
Error.args = {
  isInvalid: true,
}

export const Value = Template.bind({})
Value.args = {
  initialValue: 'two',
}

export const IconsAndBadges = TemplateWithIconsAndBadges.bind({})
