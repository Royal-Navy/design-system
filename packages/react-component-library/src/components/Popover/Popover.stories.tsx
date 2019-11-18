import React from 'react'
import { storiesOf } from '@storybook/react'

import {
  POPOVER_ARROW_POSITION,
  POPOVER_SCHEME,
  POPOVER_PLACEMENT,
} from './constants'

import { Popover, PopoverOnHover } from '.'

const stories = storiesOf('Popover', module)

stories.add('Dark', () => (
  <div>
    <Popover
      top={100}
      left={100}
      height={200}
      width={200}
      position={POPOVER_POSITION.TOP_LEFT}
      scheme={POPOVER_SCHEME.LIGHT}
    >
      <p>Top Left</p>
    </Popover>
    <Popover
      top={100}
      left={350}
      height={200}
      width={200}
      position={POPOVER_POSITION.TOP_RIGHT}
    >
      <p>Top Right</p>
    </Popover>

    <Popover
      top={200}
      left={350}
      height={200}
      width={200}
      position={POPOVER_POSITION.RIGHT_TOP}
    >
      <p>Right Top</p>
    </Popover>

    <Popover
      top={300}
      left={350}
      height={200}
      width={200}
      position={POPOVER_POSITION.RIGHT_BOTTOM}
    >
      <p>Right Bottom</p>
    </Popover>

    <Popover
      top={400}
      left={350}
      height={200}
      width={200}
      position={POPOVER_POSITION.BOTTOM_RIGHT}
    >
      <p>Bottom Right</p>
    </Popover>

    <Popover
      top={400}
      left={100}
      height={200}
      width={200}
      position={POPOVER_POSITION.BOTTOM_LEFT}
    >
      <p>Bottom Left</p>
    </Popover>

    <Popover
      top={300}
      left={100}
      height={200}
      width={200}
      position={POPOVER_POSITION.LEFT_BOTTOM}
    >
      <p>Left Bottom</p>
    </Popover>

    <Popover
      top={200}
      left={100}
      height={200}
      width={200}
      position={POPOVER_POSITION.LEFT_TOP}
    >
      <p>Left Top</p>
    </Popover>
  </div>
))

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
