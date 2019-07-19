import React from 'react'

import { storiesOf, action } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Card from './index'
import Button from '../Button'

const stories = storiesOf('Card', module)

stories.addDecorator(withKnobs)

const wrapperStyle = {
  maxWidth: '440px',
}

stories.add('Card with title', () => (
  <Card
    style={wrapperStyle}
    title={text('Title', 'Do you understand your rights?')}
  >
    <div className="rn-card__body">
      <p className="h_mb-4">
        {text(
          'Body',
          `Sed posuere consectetur est at lobortis.
          Curabitur blandit tempus porttitor. Curabitur
          blandit tempus porttitor. Cras justo odio, dapibus ac`
        )}
      </p>
      <Button className="h_w-full" click={() => action('Click button')}>
        Click Here
      </Button>
    </div>
    <div className="rn-card__body">
      <p className="h_mb-4">
        {text(
          'Body',
          `Sed posuere consectetur est at lobortis.
          Curabitur blandit tempus porttitor. Curabitur
          blandit tempus porttitor. Cras justo odio, dapibus ac`
        )}
      </p>
      <Button className="h_w-full" click={() => action('Click button')}>
        Click Here
      </Button>
    </div>
  </Card>
))

stories.add('Card with no title', () => (
  <Card style={wrapperStyle} title={text('Title', null)}>
    <div className="rn-card__body">
      <p className="h_mb-4">
        {text(
          'Body',
          `Sed posuere consectetur est at lobortis.
          Curabitur blandit tempus porttitor. Curabitur
          blandit tempus porttitor. Cras justo odio, dapibus ac`
        )}
      </p>
      <Button className="h_w-full" click={() => action('Click button')}>
        Click Here
      </Button>
    </div>
  </Card>
))
