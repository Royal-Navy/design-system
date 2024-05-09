import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { Tooltip } from '.'

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta<typeof Tooltip>

export const Default: StoryFn<typeof Tooltip> = ({ children, ...rest }) => (
  <div css={{ height: '4rem' }}>
    <Tooltip {...rest}>{children}</Tooltip>
  </div>
)

Default.args = {
  children: 'Hello, World!',
}

export const WithTitle: StoryFn<typeof Tooltip> = (props) => (
  <div css={{ height: '4rem' }}>
    <Tooltip {...props} title="Example title">
      This tooltip has a title!
    </Tooltip>
  </div>
)

WithTitle.storyName = 'Title'
