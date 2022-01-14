import React from 'react'
import {
  IconAgriculture,
  IconAnchor,
  IconBrightnessAuto,
  IconRemove,
} from '@defencedigital/icon-library'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { AutocompleteE, AutocompleteEOption } from './index'

export default {
  component: AutocompleteE,
  title: 'Autocomplete (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof AutocompleteE>

const Template: ComponentStory<typeof AutocompleteE> = (args) => (
  <div style={{ height: args.isDisabled ? 'initial' : '18rem' }}>
    <AutocompleteE label="Some label" {...args}>
      <AutocompleteEOption value="one">One</AutocompleteEOption>
      <AutocompleteEOption value="two">Two</AutocompleteEOption>
      <AutocompleteEOption value="three">Three</AutocompleteEOption>
      <AutocompleteEOption value="four">Four</AutocompleteEOption>
    </AutocompleteE>
  </div>
)

const TemplateWIthIconsAndBadges: ComponentStory<typeof AutocompleteE> = (
  args
) => (
  <div style={{ height: args.isDisabled ? 'initial' : '18rem' }}>
    <AutocompleteE label="Some label" {...args}>
      <AutocompleteEOption badge={100} icon={<IconAnchor />} value="one">
        One
      </AutocompleteEOption>
      <AutocompleteEOption badge={110} icon={<IconRemove />} value="two">
        Two
      </AutocompleteEOption>
      <AutocompleteEOption badge={111} icon={<IconAgriculture />} value="three">
        Three
      </AutocompleteEOption>
      <AutocompleteEOption
        badge={112}
        icon={<IconBrightnessAuto />}
        value="four"
      >
        Four
      </AutocompleteEOption>
    </AutocompleteE>
  </div>
)

export const Default = Template.bind({})

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const WithError = Template.bind({})
WithError.args = {
  isInvalid: true,
}

export const WithValue = Template.bind({})
WithValue.args = {
  value: 'two',
}

export const WithIconsAndBadges = TemplateWIthIconsAndBadges.bind({})
