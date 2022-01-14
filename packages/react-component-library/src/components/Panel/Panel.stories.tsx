import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Panel } from './index'

export default { component: Panel, title: 'Panel' } as ComponentMeta<
  typeof Panel
>

export const Default: ComponentStory<typeof Panel> = ({
  children,
  ...rest
}) => <Panel {...rest}>{children}</Panel>

Default.args = {
  children: 'Hello, World!',
}
