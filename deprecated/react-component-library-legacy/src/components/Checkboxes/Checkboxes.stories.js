import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'

import State from '@royalnavy/storybook-react-input-state'

import Checkboxes from './index'

const stories = storiesOf('Checkboxes', module)
stories.addDecorator(withKnobs)
stories.addParameters({
  info: { inline: true, header: false, propTablesExclude: [State] },
})

const options = [{ label: 'One', value: '1' }, { label: 'Two', value: '2' }]

stories.add('Simple', () => (
  <State>
    <Checkboxes values={['1']} options={options} onChange={() => {}} />
  </State>
))

stories.add('Legend', () => (
  <State>
    <Checkboxes
      values={['1']}
      legend="Numbers"
      name="number"
      options={options}
      onChange={() => {}}
    />
  </State>
))
