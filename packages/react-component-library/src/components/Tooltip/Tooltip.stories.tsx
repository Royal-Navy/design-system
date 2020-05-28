import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { Tooltip } from '.'

const stories = storiesOf('Tooltip', module)
const withTitleExamples = storiesOf('Tooltip/Examples/With title', module)
const withoutTitleExamples = storiesOf('Tooltip/Examples/Without title', module)

stories.addDecorator(withKnobs)

const MESSAGE = 'Tooltip message'

stories.add('Default', () => (
  <Tooltip>{text('Message', MESSAGE)}</Tooltip>
))

withTitleExamples.add('Above', () => (
  <Tooltip top={100} left={100} position="above" title="Above">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withTitleExamples.add('Below', () => (
  <Tooltip top={100} left={100} position="below" title="Below">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withTitleExamples.add('Left', () => (
  <Tooltip top={100} left={100} position="left" title="Left">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withTitleExamples.add('Right', () => (
  <Tooltip top={100} left={100} position="right" title="Right">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Above', () => (
  <Tooltip top={100} left={100} position="above">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Below', () => (
  <Tooltip top={100} left={100} position="below">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Left', () => (
  <Tooltip top={100} left={100} position="left">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Right', () => (
  <Tooltip top={100} left={100} position="right">
    {text('Message', MESSAGE)}
  </Tooltip>
))
