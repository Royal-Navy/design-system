import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import State from '@royalnavy/storybook-react-input-state'

import Input from './index'

const stories = storiesOf('Input', module)
stories.addDecorator(withKnobs)
stories.addParameters({
  info: { inline: true, header: false, propTablesExclude: [State] },
})

stories.add('Text', () => (
  <State>
    <Input
      name="user"
      label="User"
      type="text"
      value="fred"
      onChange={() => {}}
    />
    <Input
      name="colour"
      label="Colour"
      type="text"
      value=""
      onChange={() => {}}
    />
  </State>
))

stories.add('TextArea', () => (
  <State>
    <Input
      name="description"
      label="Description"
      type="textarea"
      value=""
      onChange={() => {}}
    />
  </State>
))

stories.add('Tel', () => (
  <State>
    <Input
      name="number"
      label="Number"
      type="tel"
      value=""
      onChange={() => {}}
    />
  </State>
))
