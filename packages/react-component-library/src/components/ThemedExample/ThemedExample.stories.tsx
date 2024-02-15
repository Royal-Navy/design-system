import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { storyAccessibilityConfig } from '../../a11y/storyAccessibilityConfig'
import {
  CustomTokenSets as CustomTokenSetsExample,
  StyledTheming as StyledThemingExample,
} from '.'

export default {
  component: CustomTokenSetsExample,
  title: 'Custom Theming',
  parameters: {
    a11y: {
      config: {
        rules: storyAccessibilityConfig['Custom Theming'],
      },
    },
  },
} as Meta<typeof CustomTokenSetsExample>

export const Default: StoryFn<typeof CustomTokenSetsExample> = () => (
  <CustomTokenSetsExample />
)

Default.args = {}
Default.storyName = 'Custom Token Sets'

export const StyledTheming: StoryFn<typeof CustomTokenSetsExample> = () => (
  <StyledThemingExample />
)

StyledTheming.args = {}
