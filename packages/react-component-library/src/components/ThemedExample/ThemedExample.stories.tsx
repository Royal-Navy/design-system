import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
} as ComponentMeta<typeof CustomTokenSetsExample>

export const Default: ComponentStory<typeof CustomTokenSetsExample> = () => (
  <CustomTokenSetsExample />
)

Default.args = {}
Default.storyName = 'Custom Token Sets'

export const StyledTheming: ComponentStory<
  typeof CustomTokenSetsExample
> = () => <StyledThemingExample />

StyledTheming.args = {}
StyledTheming.storyName = 'Styled Theming'
