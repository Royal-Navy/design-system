import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  FLOATING_BOX_SCHEME,
  FLOATING_BOX_PLACEMENT,
} from '../../primitives/FloatingBox'

import { Popover } from '.'

const stories = storiesOf('Popover', module)

stories.add('Default', () => (
  <Popover
    placement={POPOVER_PLACEMENT.BELOW}
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
  >
    <div
      style={{
        display: 'inline-block',
        padding: '1rem',
        backgroundColor: '#c9c9c9',
      }}
    >
      Hover on me!
    </div>
  </Popover>
))

stories.add('Dark', () => (
  <Popover
    placement={FLOATING_BOX_PLACEMENT.BELOW}
    scheme={FLOATING_BOX_SCHEME.DARK}
    content={<pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>}
  >
    <div
      style={{
        display: 'inline-block',
        padding: '1rem',
        backgroundColor: '#c9c9c9',
      }}
    >
      Hover on me!
    </div>
  </Popover>
))
