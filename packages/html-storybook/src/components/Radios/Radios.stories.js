import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Radios', module)

stories.addDecorator(withKnobs)

stories.add('Simple', () => (
  <div class="rn-check">
    <div class="rn-check">
      <label class="rn-check__label">
        <span class="rn-check__label-inner">One</span>
        <input class="rn-check__input" name="number" type="radio" value="1" />
      </label>
    </div>
    <div class="rn-check">
      <label class="rn-check__label">
        <span class="rn-check__label-inner">Two</span>
        <input class="rn-check__input" name="number" type="radio" value="2" />
      </label>
    </div>
  </div>
))

stories.add('Legend', () => (
  <fieldset class="rn-check rn-check--has-legend">
    <legend class="rn-check__legend">Numbers</legend>
    <div class="rn-check">
      <label class="rn-check__label">
        <span class="rn-check__label-inner">One</span>
        <input class="rn-check__input" type="radio" value="1" />
      </label>
    </div>
    <div class="rn-check">
      <label class="rn-check__label">
        <span class="rn-check__label-inner">Two</span>
        <input class="rn-check__input" type="radio" value="2" />
      </label>
    </div>
  </fieldset>
))
