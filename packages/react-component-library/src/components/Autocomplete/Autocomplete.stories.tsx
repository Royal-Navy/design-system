import React from 'react'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@defencedigital/icon-library'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import styled from 'styled-components'
import { useArgs } from '@storybook/addons'

import { Autocomplete, AutocompleteOption } from './index'

export default {
  component: Autocomplete,
  title: 'Autocomplete',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  args: {
    label: 'Some label',
  },
} as ComponentMeta<typeof Autocomplete>

const StyledWrapper = styled.div<{ $isDisabled?: boolean }>`
  height: ${({ $isDisabled }) => ($isDisabled ? 'initial' : '18rem')};
  max-width: 20rem;
`

const Template: ComponentStory<typeof Autocomplete> = (args) => {
  const [{ value }, updateArgs] = useArgs()
  const defaultArgs = { ...args }
  delete defaultArgs.value
  delete defaultArgs.onChange

  return (
    <StyledWrapper $isDisabled={args.isDisabled}>
      {value}
      <Autocomplete
        {...defaultArgs}
        value={value}
        onNotInList={(v) => {
          console.log('not in list', v)
          updateArgs({value:v})
        }}
        onChange={(v) => {
          console.log(v)
          updateArgs({ value: v })
        }}
      >
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
}

const TemplateWithIconsAndBadges: ComponentStory<typeof Autocomplete> = (
  args
) => (
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

export const WithError = Template.bind({})
WithError.args = {
  isInvalid: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  initialValue: 'two',
}

export const WithIconsAndBadges = TemplateWithIconsAndBadges.bind({})
