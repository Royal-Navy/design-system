import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Badge from './index'

const stories = storiesOf('Badge', module)

stories.addDecorator(withKnobs)

stories.add('Faded', () => (
  <div>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'neutral')}
      type={text('type', 'faded')}
    >
      Neutral
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'primary')}
      type={text('type', 'faded')}
    >
      Primary
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'success')}
      type={text('type', 'faded')}
    >
      Success
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'warning')}
      type={text('type', 'faded')}
    >
      Warning
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'danger')}
      type={text('type', 'faded')}
    >
      Danger
    </Badge>
  </div>
))

stories.add('Solid', () => (
  <div>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'neutral')}
      type={text('type', 'solid')}
    >
      Neutral
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'primary')}
      type={text('type', 'solid')}
    >
      Primary
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'success')}
      type={text('type', 'solid')}
    >
      Success
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'warning')}
      type={text('type', 'solid')}
    >
      Warning
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'danger')}
      type={text('type', 'solid')}
    >
      Danger
    </Badge>
  </div>
))

stories.add('Sizes', () => (
  <div>
    <Badge
      size={text('size', 'large')}
      state={text('state', 'neutral')}
      type={text('type', 'solid')}
    >
      Large
    </Badge>
    <Badge
      size={text('size', 'regular')}
      state={text('state', 'neutral')}
      type={text('type', 'solid')}
    >
      Regular
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'neutral')}
      type={text('type', 'solid')}
    >
      Small
    </Badge>
  </div>
))

stories.add('Pills', () => (
  <div>
    <Badge
      size={text('size', 'large')}
      state={text('state', 'neutral')}
      type={text('type', 'solid')}
      variation={text('variation', 'pill')}
    >
      Large
    </Badge>
    <Badge
      size={text('size', 'regular')}
      state={text('state', 'neutral')}
      type={text('type', 'solid')}
      variation={text('variation', 'pill')}
    >
      Regular
    </Badge>
    <Badge
      size={text('size', 'small')}
      state={text('state', 'neutral')}
      type={text('type', 'solid')}
      variation={text('variation', 'pill')}
    >
      Small
    </Badge>
  </div>
))
