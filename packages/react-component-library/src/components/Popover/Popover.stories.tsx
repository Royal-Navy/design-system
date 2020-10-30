import React from 'react'
import { storiesOf } from '@storybook/react'

import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'

import { Popover, POPOVER_PLACEMENT } from '.'

const stories = storiesOf('Popover', module)
const examples = storiesOf('Popover/Examples', module)

const popoverContent = (text = 'Hover on me!') => (
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

stories.add('Default', () => (
  <Popover
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
    placement={POPOVER_PLACEMENT.BELOW}
  >
    {popoverContent()}
  </Popover>
))

examples.add('Dark', () => (
  <Popover
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
    placement={POPOVER_PLACEMENT.BELOW}
    scheme={FLOATING_BOX_SCHEME.DARK}
  >
    {popoverContent()}
  </Popover>
))

examples.add('Click', () => (
  <Popover
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
    isClick
    placement={POPOVER_PLACEMENT.BELOW}
  >
    {popoverContent('Click on me')}
  </Popover>
))
