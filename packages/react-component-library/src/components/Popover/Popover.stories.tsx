import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { Popover, PopoverProps } from '.'

export default {
  component: Popover,
  title: 'Popover',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const popoverTarget = (text = 'Hover on me') => (
  <div
    style={{
      display: 'inline-block',
      padding: '1rem',
      backgroundColor: '#c9c9c9',
    }}
  >
    {text}
  </div>
)

export const Default: Story<PopoverProps> = (props) => (
  <Popover {...props}>{popoverTarget()}</Popover>
)

Default.args = {
  content: <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>,
}

export const Dark: Story<PopoverProps> = () => (
  <Popover
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
    scheme={FLOATING_BOX_SCHEME.DARK}
  >
    {popoverTarget()}
  </Popover>
)

Dark.storyName = 'Dark'

export const ClickToActivate: Story<PopoverProps> = () => (
  <Popover
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
    isClick
  >
    {popoverTarget('Click on me')}
  </Popover>
)

ClickToActivate.storyName = 'Click to activate'
