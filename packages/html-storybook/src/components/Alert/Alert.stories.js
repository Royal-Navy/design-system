import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'


const stories = storiesOf('Alert', module)

stories.addDecorator(withKnobs)

stories.add('With title', () => (
  <div class="rn-alert neutral h_mb-4">
    <h4 class="rn-alert__title">Alert Title</h4>
    <p class="rn-alert__message">This is some text</p>
    <button type="button" class="rn-alert__close">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        <path fill="currentColor" fill-rule="evenod" d="M8.09 6l3.48 3.48a1.48 1.48 0 1 1-2.09 2.09L6 8.09l-3.48 3.48A1.48 1.48 0 0 1 .43 9.48L3.91 6 .43 2.52A1.48 1.48 0 1 1 2.52.43L6 3.91 9.48.43a1.48 1.48 0 0 1 2.09 2.09L8.09 6z"></path>
      </svg>
    </button>
  </div>
))

stories.add('Event Alert', () => (
  <div class="rn-alert neutral event">
    <p class="rn-alert__message">This is some text</p>
    <button type="button" class="rn-alert__close">
      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
        <path fill="currentColor" fill-rule="evenod" d="M8.09 6l3.48 3.48a1.48 1.48 0 1 1-2.09 2.09L6 8.09l-3.48 3.48A1.48 1.48 0 0 1 .43 9.48L3.91 6 .43 2.52A1.48 1.48 0 1 1 2.52.43L6 3.91 9.48.43a1.48 1.48 0 0 1 2.09 2.09L8.09 6z"></path>
      </svg>
    </button>
  </div>
))
