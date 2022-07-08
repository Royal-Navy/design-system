import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { css } from 'styled-components'

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
} as ComponentMeta<typeof Drawer>

export const Default: ComponentStory<typeof Drawer> = (props) => (
  <Drawer {...props}>
    <pre css={{ padding: '0 1rem' }}>Arbitrary JSX</pre>
  </Drawer>
)

Default.args = {
  isOpen: true,
}
