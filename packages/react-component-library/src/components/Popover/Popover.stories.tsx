import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { Popover, PopoverProps, POPOVER_PLACEMENT } from '.'

export default {
  component: Popover,
  title: 'Popover',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

const popoverContent = (text = 'Hover on me') => (
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
  <Popover {...props}>{popoverContent()}</Popover>
)

Default.args = {
  content: <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>,
  placement: POPOVER_PLACEMENT.BELOW,
}

export const Dark: Story<PopoverProps> = () => (
  <Popover
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
    placement={POPOVER_PLACEMENT.BELOW}
    scheme={FLOATING_BOX_SCHEME.DARK}
  >
    {popoverContent()}
  </Popover>
)

Dark.storyName = 'Dark'

export const ClickToActivate: Story<PopoverProps> = () => (
  <Popover
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
    isClick
    placement={POPOVER_PLACEMENT.BELOW}
  >
    {popoverContent('Click on me')}
  </Popover>
)

ClickToActivate.storyName = 'Click to activate'
