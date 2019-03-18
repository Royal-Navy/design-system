import React from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, text } from '@storybook/addon-knobs'

const stories = storiesOf('Badge', module)

stories.addDecorator(withKnobs)

stories.add('Faded', () => (
  <div>
    <span class="rn-badge--faded neutral small ">Neutral</span>
    <span class="rn-badge--faded primary small ">Primary</span>
    <span class="rn-badge--faded success small ">Success</span>
    <span class="rn-badge--faded warning small ">Warning</span>
    <span class="rn-badge--faded danger small ">Danger</span>
  </div>
))

stories.add('Solid', () => (
  <div>
    <span class="rn-badge--solid neutral small ">Neutral</span>
    <span class="rn-badge--solid primary small ">Primary</span>
    <span class="rn-badge--solid success small ">Success</span>
    <span class="rn-badge--solid warning small ">Warning</span>
    <span class="rn-badge--solid danger small ">Danger</span>
  </div>
))

stories.add('Sizes', () => (
  <div>
    <span class="rn-badge--solid neutral large ">Large</span>
    <span class="rn-badge--solid neutral regular ">Regular</span>
    <span class="rn-badge--solid neutral small ">Small</span>
  </div>
))

stories.add('Pills', () => (
  <div>
    <span class="rn-badge--solid neutral large pill">Large</span>
    <span class="rn-badge--solid neutral regular pill">Regular</span>
    <span class="rn-badge--solid neutral small pill">Small</span>
  </div>
))
