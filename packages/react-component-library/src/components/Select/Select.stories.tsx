import React from 'react'
import { action } from '@storybook/addon-actions'
import { IconAnchor } from '@royalnavy/icon-library'
import { storiesOf } from '@storybook/react'

import { Select } from './index'

const stories = storiesOf('Select', module)
const examples = storiesOf('Select/Examples', module)

const options = [
  { value: 'chocolate', label: 'Chocolate', badge: 100 },
  { value: 'chozbun', label: 'Chozo Bun', badge: 21 },
  { value: 'melon', label: 'Melon', badge: 321 },
  { value: 'strawberry', label: 'Strawberry', badge: 200 },
  { value: 'snozberry', label: 'Snozberry' },
  { value: 'vanilla', label: 'Vanilla', badge: 50 },
]

const iconOptions = options.map(option => ({
  ...option,
  icon: <IconAnchor />,
}))

stories.add('Default', () => (
  <Select
    options={options}
    label="Example label"
    onChange={action('onChange')}
  />
))

examples.add('Disabled', () => (
  <Select
    options={options}
    label="Example label"
    onChange={action('onChange')}
    isDisabled
  />
))

examples.add('Icons', () => (
  <Select
    options={iconOptions}
    label="Example label"
    onChange={action('onChange')}
  />
))
