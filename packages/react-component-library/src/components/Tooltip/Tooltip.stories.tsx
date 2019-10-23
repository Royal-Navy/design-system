import React from 'react'
import { storiesOf } from '@storybook/react'

import { Tooltip } from './index'

const stories = storiesOf('Tooltip', module)

stories.add('With title', () => (
  <div>
    <Tooltip top={100} left={100} position="above" title="Above">
      Tooltip message
    </Tooltip>

    <Tooltip top={200} left={100} position="left" title="Left">
      Tooltip message
    </Tooltip>
    <Tooltip top={300} left={100} position="below" title="Below">
      Tooltip message
    </Tooltip>
    <Tooltip top={400} left={100} position="right" title="Right">
      Tooltip message
    </Tooltip>
  </div>
))

stories.add('Without Title', () => (
  <div>
    <Tooltip top={100} left={100} position="above">
      Tooltip message
    </Tooltip>
    <Tooltip top={200} left={100} position="left">
      Tooltip message
    </Tooltip>
    <Tooltip top={300} left={100} position="below">
      Tooltip message
    </Tooltip>
    <Tooltip top={400} left={100} position="right">
      Tooltip message
    </Tooltip>
  </div>
))

stories.add('Single', () => (
  <div>
    <Tooltip top={100} left={100} position="above" title="Above">
      Tooltip message
    </Tooltip>
  </div>
))
