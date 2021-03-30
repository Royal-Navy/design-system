import React from 'react'
import { Meta } from '@storybook/react/types-6-0'

import { Panel } from './index'

export default { component: Panel, title: 'Panel' } as Meta

export const Default = ({ children, ...rest }: any) => (
  <Panel {...rest}>{children}</Panel>
)

Default.args = {
  children: 'Hello, World!',
}
