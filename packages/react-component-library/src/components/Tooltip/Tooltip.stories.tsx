import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { Tooltip, TooltipProps } from '.'

export default {
  component: Tooltip,
  title: 'Tooltip',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<TooltipProps> = ({ children, ...rest }) => (
  <div style={{ height: '4rem' }}>
    <Tooltip {...rest}>{children}</Tooltip>
  </div>
)

Default.args = {
  children: 'Hello, World!',
}

export const WithTitle: Story<TooltipProps> = (props) => (
  <div style={{ height: '4rem' }}>
    <Tooltip {...props} title="Example title">
      This tooltip has a title!
    </Tooltip>
  </div>
)

WithTitle.storyName = 'With title'
