import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Select } from './index'

const stories = storiesOf('Select', module)

const options = [
  { value: 'chocolate', label: 'Chocolate', badge: 100 },
  { value: 'chozbun', label: 'Chozo Bun', badge: 21 },
  { value: 'melon', label: 'Melon', badge: 321 },
  { value: 'strawberry', label: 'Strawberry', badge: 200 },
  { value: 'snozberry', label: 'Snozberry' },
  { value: 'vanilla', label: 'Vanilla', badge: 50 },
]

stories.add('Default', () => (
  <div style={{ margin: 50 }}>
    <Select
      options={options}
      label="Hello"
      onChange={action('onChange')}
    />
  </div>
))
