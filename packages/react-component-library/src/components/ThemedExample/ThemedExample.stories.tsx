import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

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
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
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
