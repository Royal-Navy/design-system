import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import {
  CustomTokenSets as CustomTokenSetsExample,
  StyledTheming as StyledThemingExample,
} from '.'

export default {
  component: CustomTokenSetsExample,
  title: 'Custom Theming',
  parameters: {
    a11y: {
      disabled: true,
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
} as Meta

export const Default: Story<ComponentWithClass> = () => (
  <CustomTokenSetsExample />
)

Default.args = {}
Default.storyName = 'Custom Token Sets'

export const StyledTheming: Story<ComponentWithClass> = () => (
  <StyledThemingExample />
)

StyledTheming.args = {}
StyledTheming.storyName = 'Styled Theming'
