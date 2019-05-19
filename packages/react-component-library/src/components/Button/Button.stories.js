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
    <Button
      onClick={action('Clicked primary')}
      state="primary"
      variation="outline"
    >
      {text('Primary text', 'Primary')}
    </Button>
    <Button
      onClick={action('Clicked secondary')}
      state="secondary"
      variation="outline"
    >
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button
      onClick={action('Clicked tertiary')}
      state="tertiary"
      variation="outline"
    >
      {text('Tertiary text', 'Tertiary')}
    </Button>
    <Button
      onClick={action('Clicked danger')}
      state="danger"
      variation="outline"
    >
      {text('Danger text', 'Danger')}
    </Button>
    <Button
      onClick={action('Clicked warning')}
      state="warning"
      variation="outline"
    >
      {text('Warning text', 'Warning')}
    </Button>

    <Button
      onClick={action('Clicked success')}
      state="success"
      variation="outline"
    >
      {text('Success text', 'Success')}
    </Button>
  </div>
))
