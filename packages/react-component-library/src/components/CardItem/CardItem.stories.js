import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Button from '../Button'
import Card from '../Card'
import CardItem from './index'

const stories = storiesOf('Card', module)

stories.addDecorator(withKnobs)

stories.add('items', () => (
  <Card padding="flush">
    <CardItem>
      <h4>{text('title', 'Title one')}</h4>
      <p>
        {text(
          'Body one',
          `
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec
        ullamcorper nulla non metus auctor fringilla.`
        )}
      </p>
      <Button onClick={action('Click danger')} state="danger">
        Danger
      </Button>
    </CardItem>
    <CardItem>
      <p>
        {text(
          'Body two',
          `
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec
        ullamcorper nulla non metus auctor fringilla.`
        )}
      </p>
      <Button onClick={action('clicked')}>OK</Button>
    </CardItem>
  </Card>
))
