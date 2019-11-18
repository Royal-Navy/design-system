import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  POPOVER_ARROW_POSITION,
  POPOVER_SCHEME,
  POPOVER_PLACEMENT,
} from './constants'

import { Popover, PopoverOnHover } from '.'

const stories = storiesOf('Popover', module)

stories.add('Light', () => (
  <Popover
    top={25}
    left={25}
    height={200}
    position={POPOVER_ARROW_POSITION.BOTTOM_LEFT}
  >
    <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>
  </Popover>
))

stories.add('Dark', () => (
  <Popover
    top={25}
    left={25}
    height={200}
    position={POPOVER_ARROW_POSITION.BOTTOM_LEFT}
    scheme={POPOVER_SCHEME.DARK}
  >
    <pre style={{ padding: '1rem' }}>This is some arbitrary JSX</pre>
  </Popover>
))

stories.add('On hover', () => (
  <PopoverOnHover
    placement={POPOVER_PLACEMENT.BELOW}
    scheme={POPOVER_SCHEME.LIGHT}
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
  </PopoverOnHover>
))
