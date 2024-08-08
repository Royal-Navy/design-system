import React from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { Text, textAlignments, textElements } from './Text'
import { getTheme } from '@royalnavy/design-tokens'

const tokens = getTheme().typographyTokens

export default {
  component: Text,
  title: 'Components/Text',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
  argTypes: {
    size: {
      control: 'select',
      options: Object.keys(tokens.typography),
    },
    children: {
      control: false,
    },
    el: {
      control: 'select',
      options: Object.values(textElements),
    },
    align: {
      control: 'select',
      options: Object.keys(textAlignments),
    },
  },
} as Meta<typeof Text>

export const Default: StoryFn<typeof Text> = (props) => (
  <div>
    <Text size="xxl" el="h1">
      This is a heading
    </Text>
    <Text {...props} />
  </div>
)

Default.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
}
