import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import State from '@royalnavy/storybook-react-input-state'

import Checkboxes from './index'

const stories = storiesOf('Radios', module)

stories.addDecorator(withKnobs)
stories.addParameters({
  info: { inline: true, header: false, propTablesExclude: [State] },
})

const options = [{ label: 'One', value: '1' }, { label: 'Two', value: '2' }]

stories.add('Simple', () => (
  <State>
    <Checkboxes name="number" onChange={() => {}} options={options} value="1" />
  </State>
))

stories.add('Legend', () => (
  <State>
    <Checkboxes
      legend="Numbers"
      onChange={() => {}}
      options={options}
      value="1"
    />
  </State>
))
