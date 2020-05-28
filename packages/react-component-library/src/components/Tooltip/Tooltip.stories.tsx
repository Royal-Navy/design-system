import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import { Tooltip, TOOLTIP_POSITION } from '.'

const stories = storiesOf('Tooltip', module)
const withTitleExamples = storiesOf('Tooltip/Examples/With title', module)
const withoutTitleExamples = storiesOf('Tooltip/Examples/Without title', module)

stories.addDecorator(withKnobs)

const MESSAGE = 'Tooltip message'

stories.add('Default', () => (
  <Tooltip>{text('Message', MESSAGE)}</Tooltip>
))

withTitleExamples.add('Above', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.ABOVE} title="Above">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withTitleExamples.add('Below', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.BELOW} title="Below">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withTitleExamples.add('Left', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.LEFT} title="Left">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withTitleExamples.add('Right', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.RIGHT} title="Right">
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Above', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.ABOVE}>
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Below', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.BELOW}>
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Left', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.LEFT}>
    {text('Message', MESSAGE)}
  </Tooltip>
))

withoutTitleExamples.add('Right', () => (
  <Tooltip top={100} left={100} position={TOOLTIP_POSITION.RIGHT}>
    {text('Message', MESSAGE)}
  </Tooltip>
))
