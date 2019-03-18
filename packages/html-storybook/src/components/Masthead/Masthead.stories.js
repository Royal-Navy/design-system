import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Masthead', module)

stories.addDecorator(withKnobs)

stories.add('Default', () => (
  <div class="rn-masthead h_mb-4">
    <div class="rn-masthead__head">
      <h4 class="rn-masthead__title">NELSON Apps</h4>
      <button
        class="rn-btn--primary neutral regular rn-masthead__action"
        type="button"
      >
        Action
      </button>
    </div>
    <nav class="rn-masthead__nav" />
  </div>
))

stories.add('With Links', () => (
  <div class="rn-masthead h_mb-4">
    <div class="rn-masthead__head">
      <h4 class="rn-masthead__title">NELSON Apps</h4>
      <button
        class="rn-btn--primary neutral regular rn-masthead__action"
        type="button"
      >
        Action
      </button>
    </div>
    <nav class="rn-masthead__nav">
      <a class="rn-masthead__link h_mr-1" href="/">
        Home
      </a>
      <a class="rn-masthead__link h_mr-1" href="/dashboard">
        Dashboard
      </a>
      <a class="rn-masthead__link h_mr-1" href="/settings">
        Settings
      </a>
    </nav>
  </div>
))
