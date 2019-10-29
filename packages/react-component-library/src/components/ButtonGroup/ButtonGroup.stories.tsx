import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import { TriangleUp } from '../../icons'
import { Button, ButtonGroup } from '../index'

const stories = storiesOf('Button group', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => (
  <>
    <ButtonGroup>
      <Button onClick={action('Clicked primary')} variant="primary">
        {text('Primary text', 'Primary')}
      </Button>
      <Button
        onClick={action('Clicked secondary')}
        variant="primary"
        color="danger"
      >
        {text('Secondary text', 'Secondary')}
      </Button>
      <Button onClick={action('Clicked tertiary')} variant="tertiary">
        {text('Tertiary text', 'Tertiary')}
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button onClick={action('Clicked primary')} variant="primary">
        {text('Primary text', 'Primary')}
      </Button>
      <Button
        onClick={action('Clicked secondary')}
        variant="secondary"
        color="danger"
      >
        {text('Secondary text', 'Secondary')}
      </Button>
      <Button onClick={action('Clicked tertiary')} variant="tertiary">
        {text('Tertiary text', 'Tertiary')}
      </Button>
    </ButtonGroup>
  </>
))

stories.add('Icons', () => (
  <>
    <ButtonGroup>
      <Button onClick={action('Clicked primary')} variant="primary">
        {text('Primary text', 'Primary')}
      </Button>
      <Button
        onClick={action('Clicked secondary')}
        variant="primary"
        color="danger"
      >
        {text('Secondary text', 'Secondary')}
      </Button>
      <Button
        onClick={action('Clicked tertiary')}
        variant="tertiary"
        icon={<TriangleUp />}
      >
        {text('Tertiary text', 'Tertiary')}
      </Button>
    </ButtonGroup>
  </>
))

stories.add('Sizes', () => (
  <>
    <ButtonGroup>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="small"
      >
        {text('Primary text', 'Primary')}
      </Button>
      <Button
        onClick={action('Clicked secondary')}
        variant="secondary"
        color="danger"
        size="small"
      >
        {text('Secondary text', 'Secondary')}
      </Button>
      <Button
        onClick={action('Clicked tertiary')}
        variant="tertiary"
        size="small"
      >
        {text('Tertiary text', 'Tertiary')}
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="regular"
      >
        {text('Primary text', 'Primary')}
      </Button>
      <Button
        onClick={action('Clicked secondary')}
        variant="secondary"
        color="danger"
        size="regular"
      >
        {text('Secondary text', 'Secondary')}
      </Button>
      <Button
        onClick={action('Clicked tertiary')}
        variant="tertiary"
        size="regular"
      >
        {text('Tertiary text', 'Tertiary')}
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="large"
      >
        {text('Primary text', 'Primary')}
      </Button>
      <Button
        onClick={action('Clicked secondary')}
        variant="secondary"
        color="danger"
        size="large"
      >
        {text('Secondary text', 'Secondary')}
      </Button>
      <Button
        onClick={action('Clicked tertiary')}
        variant="tertiary"
        size="large"
      >
        {text('Tertiary text', 'Tertiary')}
      </Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button
        onClick={action('Clicked primary')}
        variant="primary"
        size="xlarge"
      >
        {text('Primary text', 'Primary')}
      </Button>
      <Button
        onClick={action('Clicked secondary')}
        variant="secondary"
        color="danger"
        size="xlarge"
      >
        {text('Secondary text', 'Secondary')}
      </Button>
      <Button
        onClick={action('Clicked tertiary')}
        variant="tertiary"
        size="xlarge"
      >
        {text('Tertiary text', 'Tertiary')}
      </Button>
    </ButtonGroup>
  </>
))
