import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { ClassificationBar } from './ClassificationBar'
import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'

const disableColorContrastRule = {
  a11y: {
    config: {
      rules: storyAccessibilityConfig['Classification Bar'],
    },
  },
}

export default {
  title: 'Components/Classification Bar',
  component: ClassificationBar,
} as Meta<typeof ClassificationBar>

const Template: StoryFn<typeof ClassificationBar> = (args) => (
  <ClassificationBar {...args} />
)

export const Default = Template.bind({})
Default.args = {
  isSecret: false,
}

export const Secret = Template.bind({})
Secret.parameters = disableColorContrastRule
Secret.args = {
  isSecret: true,
}

export const Condensed = Template.bind({})
Condensed.args = {
  isCondensed: true,
}
