import React from 'react'
import { storiesOf } from '@storybook/react'

import { POPOVER_PLACEMENT } from './constants'
import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'

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
    placement={POPOVER_PLACEMENT.BELOW}
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
