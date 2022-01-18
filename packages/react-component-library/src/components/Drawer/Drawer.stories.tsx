import React from 'react'
import styled from 'styled-components'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Drawer } from '.'

export default {
  component: Drawer,
  title: 'Drawer',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Drawer>

const StyledDrawer = styled(Drawer)`
  position: absolute;
  height: calc(100% - 10px);
  transform: translate(-10px, 10px);
`

export const Default: ComponentStory<typeof Drawer> = (props) => (
  <div style={{ height: '20rem' }}>
    {/* Styles extended for Storybook presentation */}
    <StyledDrawer {...props}>
      <pre style={{ padding: '0 1rem' }}>Arbitrary JSX</pre>
    </StyledDrawer>
  </div>
)

Default.args = {
  isOpen: true,
}
