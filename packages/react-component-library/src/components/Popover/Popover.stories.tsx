import React from 'react'
import { storiesOf } from '@storybook/react'

import Popover from './index'

const stories = storiesOf('Popover', module)

stories.add('Dark', () => (
  <div>
    <Popover top={100} left={100} height={200} width={200} position="top_left">
      <p>Top Left</p>
    </Popover>
    <Popover top={100} left={350} height={200} width={200} position="top_right">
      <p>Top Right</p>
    </Popover>

    <Popover top={200} left={350} height={200} width={200} position="right_top">
      <p>Right Top</p>
    </Popover>

    <Popover
      top={300}
      left={350}
      height={200}
      width={200}
      position="right_bottom"
    >
      <p>Right Bottom</p>
    </Popover>

    <Popover
      top={400}
      left={350}
      height={200}
      width={200}
      position="bottom_right"
    >
      <p>Bottom Right</p>
    </Popover>

    <Popover
      top={400}
      left={100}
      height={200}
      width={200}
      position="bottom_left"
    >
      <p>Bottom Left</p>
    </Popover>

    <Popover
      top={300}
      left={100}
      height={200}
      width={200}
      position="left_bottom"
    >
      <p>Left Bottom</p>
    </Popover>

    <Popover top={200} left={100} height={200} width={200} position="left_top">
      <p>Left Top</p>
    </Popover>
  </div>
))

stories.add('Light', () => (
  <div>
    <Popover
      top={100}
      left={100}
      height={200}
      width={200}
      position="top_left"
      scheme="light"
    >
      <p>Top Left</p>
    </Popover>
    <Popover
      top={100}
      left={350}
      height={200}
      width={200}
      position="top_right"
      scheme="light"
    >
      <p>Top Right</p>
    </Popover>

    <Popover
      top={200}
      left={350}
      height={200}
      width={200}
      position="right_top"
      scheme="light"
    >
      <p>Right Top</p>
    </Popover>

    <Popover
      top={300}
      left={350}
      height={200}
      width={200}
      position="right_bottom"
      scheme="light"
    >
      <p>Right Bottom</p>
    </Popover>

    <Popover
      top={400}
      left={350}
      height={200}
      width={200}
      position="bottom_right"
      scheme="light"
    >
      <p>Bottom Right</p>
    </Popover>

    <Popover
      top={400}
      left={100}
      height={200}
      width={200}
      position="bottom_left"
      scheme="light"
    >
      <p>Bottom Left</p>
    </Popover>

    <Popover
      top={300}
      left={100}
      height={200}
      width={200}
      position="left_bottom"
      scheme="light"
    >
      <p>Left Bottom</p>
    </Popover>

    <Popover
      top={200}
      left={100}
      height={200}
      width={200}
      position="left_top"
      scheme="light"
    >
      <p>Left Top</p>
    </Popover>
  </div>
))
