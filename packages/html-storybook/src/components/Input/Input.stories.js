import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)

stories.add('Text', () => (
  <div class="rn-inputBlock">
    <label class="inputLabel" for="802a3a0e-b9b7-483a-9e5d-d33d753cb890">
      User
    </label>
    <input
      class="input hasContent"
      id="802a3a0e-b9b7-483a-9e5d-d33d753cb890"
      name="user"
      value="fred"
    />
  </div>
))

stories.add('TextArea', () => (
  <div class="rn-inputBlock">
    <label class="inputLabel" for="802a3a0e-b9b7-483a-9e5d-d33d753cb890">
      Description
    </label>
    <textarea
      class="textarea "
      id="802a3a0e-b9b7-483a-9e5d-d33d753cb890"
      rows="5"
      cols="80"
      name="description"
    />
  </div>
))

stories.add('Tel', () => (
  <div class="rn-inputBlock">
    <label class="inputLabel" for="802a3a0e-b9b7-483a-9e5d-d33d753cb890">
      Number
    </label>
    <input
      class="input "
      id="802a3a0e-b9b7-483a-9e5d-d33d753cb890"
      name="number"
      value=""
    />
  </div>
))
