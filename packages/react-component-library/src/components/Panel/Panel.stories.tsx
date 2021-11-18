import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Panel } from './index'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export default { component: Panel, title: 'Panel' } as Meta

export const Default: Story<ComponentWithClass> = ({ children, ...rest }) => (
  <Panel {...rest}>{children}</Panel>
)

Default.args = {
  children: 'Hello, World!',
}
