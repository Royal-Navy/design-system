import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { IconBrightnessHigh } from '@defencedigital/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import {
  NumberInputE,
  NumberInputProps,
  NumberInputWithIconProps,
  NumberInputWithPrefixProps,
  NumberInputWithSuffixProps,
} from './NumberInputE'

export default {
  component: NumberInputE,
  title: 'Number Input (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} />
)

Default.args = {
  id: undefined,
  name: 'number-input-default',
}

export const Small: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-small"
    size={COMPONENT_SIZE.SMALL}
  />
)

Small.storyName = 'Small'

export const Disabled: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} isDisabled name="number-input-disabled" />
)

Disabled.storyName = 'Disabled'

export const WithFootnote: Story<NumberInputProps> = (props) => (
  <NumberInputE
    {...props}
    footnote="Footnote"
    name="number-input-with-footnote"
  />
)

WithFootnote.storyName = 'With footnote'

export const WithLabel: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} label="Label" name="number-input-label" />
)

WithLabel.storyName = 'With label'

export const Icon: Story<NumberInputWithIconProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-icon"
    icon={<IconBrightnessHigh />}
  />
)

Icon.storyName = 'With icon'

export const Prefix: Story<NumberInputWithPrefixProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-prefix"
    value={1000}
    prefix="&pound;"
  />
)

Prefix.storyName = 'With prefix'

export const Suffix: Story<NumberInputWithSuffixProps> = (props) => (
  <NumberInputE
    {...props}
    name="number-input-suffix"
    value={1000}
    suffix="m&sup3;"
  />
)

Suffix.storyName = 'With suffix'

export const Error: Story<NumberInputProps> = (props) => (
  <NumberInputE {...props} isInvalid name="number-input-error" />
)

Error.storyName = 'With error'
