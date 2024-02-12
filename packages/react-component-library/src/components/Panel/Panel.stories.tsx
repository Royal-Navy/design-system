import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Panel } from './index'

export default { component: Panel, title: 'Panel' } as Meta<typeof Panel>

export const Default: StoryFn<typeof Panel> = ({ children, ...rest }) => (
  <Panel {...rest}>{children}</Panel>
)

Default.args = {
  children: 'Hello, World!',
}
