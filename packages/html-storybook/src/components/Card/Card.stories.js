import React from 'react'

import { storiesOf, action } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Card', module)

stories.addDecorator(withKnobs)

const wrapperStyle = {
  maxWidth: '440px',
}

stories.add('Card with title', () => (
  <div class="rn-card null null">
    <div class="rn-card__header">Do you understand your rights?</div>
    <div class="rn-card__body">
      <p class="h_mb-4">
        Sed posuere consectetur est at lobortis. Curabitur blandit tempus
        porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus
        ac
      </p>
      <button class="rn-btn--primary neutral regular h_w-full" type="button">
        Click Here
      </button>
    </div>
  </div>
))

stories.add('Card with no title', () => (
  <div class="rn-card null null">
    <div class="rn-card__body">
      <p class="h_mb-4">
        Sed posuere consectetur est at lobortis. Curabitur blandit tempus
        porttitor. Curabitur blandit tempus porttitor. Cras justo odio, dapibus
        ac
      </p>
      <button class="rn-btn--primary neutral regular h_w-full" type="button">
        Click Here
      </button>
    </div>
  </div>
))

stories.add('Card Items', () => (
  <div class="rn-card flush null">
    <div class="carditem">
      <h4>Title one</h4>
      <p>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec
        ullamcorper nulla non metus auctor fringilla.
      </p>
      <button class="rn-btn--primary danger regular " type="button">
        Danger
      </button>
    </div>
    <div class="carditem">
      <p>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
        ut fermentum massa justo sit amet risus. Aenean eu leo quam.
        Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec
        ullamcorper nulla non metus auctor fringilla.
      </p>
      <button class="rn-btn--primary neutral regular " type="button">
        OK
      </button>
    </div>
  </div>
))
