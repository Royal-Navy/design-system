import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import { IconBrightnessLow, IconBrightnessHigh } from '@royalnavy/icon-library'
import { Button } from './index'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('Styles', () => (
  <div>
    <Button onClick={action('Clicked primary')} variant="primary">
      {text('Primary text', 'Primary')}
    </Button>
    <Button onClick={action('Clicked secondary')} variant="secondary">
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button onClick={action('Clicked tertiary')} variant="tertiary">
      {text('Tertiary text', 'Tertiary')}
    </Button>
    <br />
    <Button
      onClick={action('Clicked primary')}
      variant="primary"
      color="danger"
    >
      {text('Primary text', 'Primary')}
    </Button>
    <Button
      onClick={action('Clicked secondary')}
      variant="secondary"
      color="danger"
    >
      {text('Secondary text', 'Secondary')}
    </Button>
    <Button
      onClick={action('Clicked tertiary')}
      variant="tertiary"
      color="danger"
    >
      {text('Tertiary text', 'Tertiary')}
    </Button>
  </div>
))

stories.add('Icon', () => (
  <div>
    <Button
      variant="primary"
      onClick={action('Clicked primary')}
      icon={<IconBrightnessLow />}
    >
      Decrease Brightness
    </Button>
    <Button
      variant="primary"
      onClick={action('Clicked primary')}
      icon={<IconBrightnessHigh />}
    >
      Increase Brightness
    </Button>
  </div>
))

stories.add('Sizes', () => (
  <div>
    <p>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="small"
      >
        Small
      </Button>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="regular"
      >
        Regular
      </Button>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="large"
      >
        Large
      </Button>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="xlarge"
      >
        xLarge
      </Button>
    </p>

    <p>
      <Button
        onClick={action('Clicked primary')}
        variant="secondary"
        size="small"
      >
        Small
      </Button>
      <Button
        onClick={action('Clicked primary')}
        variant="secondary"
        size="regular"
      >
        Regular
      </Button>
      <Button
        onClick={action('Clicked primary')}
        variant="secondary"
        size="large"
      >
        Large
      </Button>
      <Button
        onClick={action('Clicked primary')}
        variant="secondary"
        size="xlarge"
      >
        xLarge
      </Button>
    </p>

    <p>
      <Button onClick={action('Clicked primary')} size="small">
        Small
      </Button>
      <Button onClick={action('Clicked primary')} size="regular">
        Regular
      </Button>
      <Button onClick={action('Clicked primary')} size="large">
        Large
      </Button>
      <Button onClick={action('Clicked primary')} size="xlarge">
        xLarge
      </Button>
    </p>
  </div>
))
