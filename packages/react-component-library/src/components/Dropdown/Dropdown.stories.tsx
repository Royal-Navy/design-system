import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Bell, Tools } from '../../icons'
import { Dropdown } from './Dropdown'

const stories = storiesOf('Dropdown', module)

const hotkey5 = () => (
  <>
    <Tools /> 5
  </>
)

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chozbun', label: 'Chozo Bun', hidden: true },
  { value: 'melon', label: 'Melon', visible: true, isDisabled: true },
  { value: 'strawberry', label: 'Strawberry', isDisabled: true },
  { value: 'vanilla', label: 'Vanilla', rightContent: hotkey5 },
]

const scrollOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'chozbun', label: 'Chozo Bun', hidden: true },
  { value: 'melon', label: 'Melon', visible: true },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'snozberry', label: 'Snozberry' },
  { value: 'vanilla', label: 'Vanilla', rightContent: hotkey5 },
  { value: 'Wombat', label: 'Wombat' },
  { value: 'Yowler', label: 'Yowler' },
  { value: 'Zombie', label: 'Zombie' },
]

const iconOptions = options.map(option => ({
  ...option,
  icon: Bell,
}))

stories.add('Default', () => (
  <div style={{ margin: 50 }}>
    <Dropdown
      options={options}
      label="Layers"
      onSelect={action('onSelect')}
    />
  </div>
))

stories.add('Icons', () => (
  <div style={{ margin: 50 }}>
    <Dropdown
      options={iconOptions}
      label="Layers"
      onSelect={action('onSelect')}
    />
  </div>
))

stories.add('Scroll', () => (
  <div style={{ margin: 50 }}>
    <Dropdown
      options={scrollOptions}
      label="Layers"
      onSelect={action('onSelect')}
    />
  </div>
))
