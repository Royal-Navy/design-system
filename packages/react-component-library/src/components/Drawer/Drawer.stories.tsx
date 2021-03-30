import React from 'react'
import styled from 'styled-components'
import { Meta } from '@storybook/react/types-6-0'

import { Drawer } from '.'

export default { component: Drawer, title: 'Drawer' } as Meta

const StyledDrawer = styled(Drawer)`
  position: absolute;
  height: calc(100% - 10px);
  transform: translate(-10px, 10px);
`

export const Default = (props: any) => (
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
