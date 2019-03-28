import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Button', module)

stories.addDecorator(withKnobs)

stories.add('Primary', () => (
  <div>
    <button class="rn-btn--primary neutral large " type="button">
      Button
    </button>
    <button class="rn-btn--primary neutral regular " type="button">
      Button
    </button>
    <button class="rn-btn--primary neutral small " type="button">
      Button
    </button>
  </div>
))

stories.add('Secondary', () => (
  <div>
    <button class="rn-btn--secondary neutral large " type="button">
      Button
    </button>
    <button class="rn-btn--secondary neutral regular " type="button">
      Button
    </button>
    <button class="rn-btn--secondary neutral small " type="button">
      Button
    </button>
  </div>
))

stories.add('Tertiary', () => (
  <div>
    <button class="rn-btn--tertiary danger large " type="button">
      Button
    </button>
    <button class="rn-btn--tertiary danger regular " type="button">
      Button
    </button>
    <button class="rn-btn--tertiary danger small " type="button">
      Button
    </button>
  </div>
))

stories.add('Groups', () => (
  <div class="rn-btn-group">
    <button class="rn-btn--primary neutral regular " type="button">
      Button
    </button>
    <button class="rn-btn--primary neutral regular " type="button">
      Button
    </button>
    <button class="rn-btn--primary neutral regular " type="button">
      Button
    </button>
  </div>
))
