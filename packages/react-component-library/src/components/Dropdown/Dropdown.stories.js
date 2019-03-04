import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text } from '@storybook/addon-knobs'

import Dropdown from './index'

const options = [
  { label: 'One', value: '1', helper: 'ctrl + x' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' },
  { label: 'Four', value: '1', helper: 'ctrl + y' },
  { label: 'Five', value: '1', helper: 'ctrl + y' },
  { label: 'Six', value: '1', helper: 'ctrl + y' },
  { label: 'Seven', value: '1', helper: 'ctrl + y' },
  { label: 'Eight', value: '1', helper: 'ctrl + y' },
  { label: 'Nine', value: '1', helper: 'ctrl + y' },
  { label: 'Ten', value: '1', helper: 'ctrl + y' },
  { label: 'Eleven', value: '1', helper: 'ctrl + y' },
  { label: 'Twelve', value: '1', helper: 'ctrl + y' },
  { label: 'Thirteen', value: '1', helper: 'ctrl + y' },
  { label: 'Fourteen', value: '1', helper: 'ctrl + y' },
  { label: 'Very long item', value: '1', helper: 'ctrl + y' },
]

const stories = storiesOf('Dropdown', module)

stories.addDecorator(withKnobs)

stories.add('default', () => (
  <Dropdown
    options={options}
    onChange={value => {
      action(`Select ${value}`)
    }}
    label={text('Label', 'Dropdown')}
    size={text('Size', 'regular')}
  />
))
