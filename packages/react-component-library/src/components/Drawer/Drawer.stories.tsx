import React from 'react'
import styled from 'styled-components'

import { Meta, StoryFn } from '@storybook/react'
import { color } from '@royalnavy/design-tokens'

import { Drawer } from '.'

export default {
  component: Drawer,
  title: 'Components/Drawer',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
} as Meta<typeof Drawer>

const StyledWrapper = styled.div`
  min-height: 300px;
  background-color: ${color('neutral', '000')};
`

export const Default: StoryFn<typeof Drawer> = (props) => (
  <StyledWrapper>
    <Drawer {...props}>
      <pre css={{ padding: '0 1rem' }}>Arbitrary JSX</pre>
    </Drawer>
  </StyledWrapper>
)

Default.args = {
  isOpen: true,
}
