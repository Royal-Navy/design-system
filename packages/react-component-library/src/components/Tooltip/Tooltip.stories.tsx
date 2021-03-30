import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Tooltip } from '.'

export default { component: Tooltip, title: 'Tooltip' } as Meta

export const Default = ({ children, ...rest }: any) => (
  <div style={{ height: '4rem' }}>
    <Tooltip {...rest}>{children}</Tooltip>
  </div>
)

Default.args = {
  children: 'Hello, World!',
}

export const WithTitle = () => (
  <div style={{ height: '4rem' }}>
    <Tooltip title="Example title">This tooltip has a title!</Tooltip>
  </div>
)

WithTitle.storyName = 'With title'
