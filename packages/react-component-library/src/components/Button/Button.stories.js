import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from './index'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('Default (Solid)', () => (
  <div>
    <Button onClick={action('Clicked primary')} state="primary">
      {text('Primary text', 'Primary')}
    </Button>
    <Button onClick={action('Clicked secondary')} state="secondary">
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button onClick={action('Clicked tertiary')} state="tertiary">
      {text('Tertiary text', 'Tertiary')}
    </Button>
    <Button onClick={action('Clicked danger')} state="danger">
      {text('Danger text', 'Danger')}
    </Button>
    <Button onClick={action('Clicked warning')} state="warning">
      {text('Warning text', 'Warning')}
    </Button>

    <Button onClick={action('Clicked success')} state="success">
      {text('Success text', 'Success')}
    </Button>
  </div>
))

stories.add('Outline', () => (
  <div>
    <Button onClick={action('Clicked primary')} state="primary" type="outline">
      {text('Primary text', 'Primary')}
    </Button>
    <Button
      onClick={action('Clicked secondary')}
      state="secondary"
      type="outline"
    >
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button
      onClick={action('Clicked tertiary')}
      state="tertiary"
      type="outline"
    >
      {text('Tertiary text', 'Tertiary')}
    </Button>
    <Button onClick={action('Clicked danger')} state="danger" type="outline">
      {text('Danger text', 'Danger')}
    </Button>
    <Button onClick={action('Clicked warning')} state="warning" type="outline">
      {text('Warning text', 'Warning')}
    </Button>

    <Button onClick={action('Clicked success')} state="success" type="outline">
      {text('Success text', 'Success')}
    </Button>
  </div>
))
