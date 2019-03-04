import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('Primary', () => (
  <div>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'primary')}
      state={text('State', 'neutral')}
      size={text('Size', 'large')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'primary')}
      state={text('State', 'neutral')}
      size={text('size', 'regular')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'primary')}
      state={text('State', 'neutral')}
      size={text('size', 'small')}
    >
      {text('Button Text', 'Button')}
    </Button>
  </div>
))

stories.add('Secondary', () => (
  <div>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'secondary')}
      state={text('State', 'neutral')}
      size={text('Size', 'large')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'secondary')}
      state={text('State', 'neutral')}
      size={text('size', 'regular')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'secondary')}
      state={text('State', 'neutral')}
      size={text('size', 'small')}
    >
      {text('Button Text', 'Button')}
    </Button>
  </div>
))

stories.add('Tertiary', () => (
  <div>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'tertiary')}
      state={text('State', 'danger')}
      size={text('Size', 'large')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'tertiary')}
      state={text('State', 'danger')}
      size={text('size', 'regular')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'tertiary')}
      state={text('State', 'danger')}
      size={text('size', 'small')}
    >
      {text('Button Text', 'Button')}
    </Button>
  </div>
))

stories.add('Groups', () => (
  <div className="rn-btn-group">
    <Button
      onClick={action('clicked')}
      type={text('Type', 'primary')}
      state={text('State', 'neutral')}
      size={text('Size', 'regular')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'primary')}
      state={text('State', 'neutral')}
      size={text('size', 'regular')}
    >
      {text('Button Text', 'Button')}
    </Button>
    <Button
      onClick={action('clicked')}
      type={text('Type', 'primary')}
      state={text('State', 'neutral')}
      size={text('size', 'regular')}
    >
      {text('Button Text', 'Button')}
    </Button>
  </div>
))
