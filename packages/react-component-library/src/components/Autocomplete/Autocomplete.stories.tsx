import React from 'react'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@defencedigital/icon-library'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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

const Template: ComponentStory<typeof Autocomplete> = (args) => (
  <div style={{ height: args.isDisabled ? 'initial' : '18rem' }}>
    <Autocomplete {...args}>
      <AutocompleteOption value="one">One</AutocompleteOption>
      <AutocompleteOption value="two">Two</AutocompleteOption>
      <AutocompleteOption value="three">Three</AutocompleteOption>
      <AutocompleteOption value="four">Four</AutocompleteOption>
    </Autocomplete>
  </div>
)

const TemplateWithIconsAndBadges: ComponentStory<typeof Autocomplete> = (
  args
) => (
  <div style={{ height: args.isDisabled ? 'initial' : '18rem' }}>
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
  </div>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const NoClearButton = Template.bind({})
NoClearButton.args = {
  hideClearButton: true,
  value: 'two',
}

export const WithError = Template.bind({})
WithError.args = {
  isInvalid: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'two',
}

export const WithIconsAndBadges = TemplateWithIconsAndBadges.bind({})
