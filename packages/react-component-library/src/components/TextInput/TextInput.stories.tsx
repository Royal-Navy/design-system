import React from 'react'
import { StoryFn, Meta } from '@storybook/react'

import { IconSearch, IconSettings } from '@royalnavy/icon-library'
import { TextInput } from '.'

export default {
  argTypes: {
    startAdornment: {
      // TODO - why doesn't this get picked up from the props
      description:
        'Optional adornment to display to the left of the input value.',
      control: 'select',
      options: ['None', 'Search', 'Settings'],
      mapping: {
        None: null,
        Search: <IconSearch />,
        Settings: <IconSettings />,
      },
    },
    endAdornment: {
      description:
        'Optional adornment to display to the right of the input value.',
      control: 'select',
      options: ['None', 'Search', 'Settings'],
      mapping: {
        None: null,
        Search: <IconSearch />,
        Settings: <IconSettings />,
      },
    },
    isDisabled: {
      control: 'boolean',
    },
    isInvalid: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: [
        'color',
        'date',
        'datatime-local',
        'email',
        'file',
        'image',
        'month',
        'number',
        'password',
        'search',
        'tel',
        'text',
        'time',
        'url',
        'week',
      ],
    },
  },
  component: TextInput,
  title: 'Components/Text Input',
  parameters: {
    argTypes: {
      onBlur: { action: 'onBlur' },
    },
  },
} as Meta<typeof TextInput>

export const Default: StoryFn<typeof TextInput> = (props) => (
  <TextInput {...props} />
)

Default.args = {
  name: 'text-input-default',
  label: 'Example label',
}

export const Disabled: StoryFn<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    name="text-input-disabled"
    label="Example label"
    isDisabled
  />
)

export const WithStartAdornment: StoryFn<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    name="text-input-start-adornment"
    label="Example label"
    startAdornment={<IconSearch />}
  />
)

WithStartAdornment.storyName = 'Start adornment'

export const WithEndAdornment: StoryFn<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    name="text-input-end-adornment"
    label="Example label"
    endAdornment={<IconSearch />}
  />
)

WithEndAdornment.storyName = 'End adornment'

export const WithError: StoryFn<typeof TextInput> = (props) => (
  <TextInput
    {...props}
    isInvalid
    label="Example label"
    name="text-input-end-adornment"
  />
)

WithError.storyName = 'Error'

export const WithLongLabel: StoryFn<typeof TextInput> = (props) => (
  <div
    css={`
      max-width: 400px;
    `}
  >
    <TextInput
      {...props}
      label="This text input has a long label that doesn't fit in the container"
      name="text-input-long-label"
    />
  </div>
)

WithLongLabel.storyName = 'Long label'
