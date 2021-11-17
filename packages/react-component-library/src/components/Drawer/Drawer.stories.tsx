import React from 'react'
import styled from 'styled-components'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Drawer, DrawerProps } from '.'

export default {
  component: Drawer,
  title: 'Drawer',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
    layout: 'fullscreen',
  },
} as Meta

const StyledDrawer = styled(Drawer)`
  position: absolute;
  height: calc(100% - 10px);
  transform: translate(-10px, 10px);
`

export const Default: Story<DrawerProps> = (props) => (
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
