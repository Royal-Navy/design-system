import React from 'react'
import { IconAcUnit, IconExitToApp } from '@royalnavy/icon-library'
import { storiesOf } from '@storybook/react'

import { Dropdown } from './Dropdown'

const stories = storiesOf('Dropdown', module)

const hotkey5 = () => (
  <>
    <IconExitToApp /> 5
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
]

const iconOptions = options.map(option => ({
  ...option,
  icon: IconAcUnit,
}))

stories.add('Default', () => (
  <div style={{ margin: 50 }}>
    <Dropdown
      options={options}
      label="Layers"
      onSelect={value => console.log(value)}
    />
  </div>
))

stories.add('Icons', () => (
  <div style={{ margin: 50 }}>
    <Dropdown
      options={iconOptions}
      label="Layers"
      onSelect={value => console.log(value)}
    />
  </div>
))

stories.add('Scroll', () => (
  <div style={{ margin: 50 }}>
    <Dropdown
      options={scrollOptions}
      label="Layers"
      onSelect={value => console.log(value)}
    />
  </div>
))
