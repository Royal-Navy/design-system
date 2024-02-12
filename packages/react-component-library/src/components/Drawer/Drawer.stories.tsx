import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Drawer } from '.'

export default {
  component: Drawer,
  title: 'Drawer',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta<typeof Drawer>

export const Default: StoryFn<typeof Drawer> = (props) => (
  <Drawer {...props}>
    <pre css={{ padding: '0 1rem' }}>Arbitrary JSX</pre>
  </Drawer>
)

Default.args = {
  isOpen: true,
}
