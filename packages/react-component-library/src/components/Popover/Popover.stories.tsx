import React from 'react'
import { storiesOf } from '@storybook/react'

import { FLOATING_BOX_PLACEMENT } from '../../primitives/FloatingBox'
import { POPOVER_SCHEME } from './constants'

import { Popover } from '.'

const stories = storiesOf('Popover', module)

stories.add('Default', () => (
  <Popover
    placement={FLOATING_BOX_PLACEMENT.BELOW}
    popoverJSX={
      <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>
    }
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
    scheme={POPOVER_SCHEME.DARK}
    popoverJSX={
      <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>
    }
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
