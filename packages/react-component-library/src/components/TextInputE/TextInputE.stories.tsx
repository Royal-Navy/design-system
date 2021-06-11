import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { IconSearch } from '@royalnavy/icon-library'
import { Button } from '../Button'
import { TextInputE, TextInputEProps } from '.'

import { withFormik } from '../../enhancers/withFormik'

export default {
  component: TextInputE,
  title: 'Text Input (Experimental)',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as Meta

export const Default: Story<TextInputEProps> = (props) => (
  <TextInputE {...props} />
)

Default.args = {
  name: 'text-input-default',
  label: 'Example label',
}

export const Disabled: Story<TextInputEProps> = (props) => (
  <TextInputE
    {...props}
    name="text-input-disabled"
    label="Example label"
    isDisabled
  />
)

Disabled.storyName = 'Disabled'

export const WithStartAdornment: Story<TextInputEProps> = (props) => (
  <TextInputE
    {...props}
    name="text-input-start-adornment"
    label="Example label"
    startAdornment={<IconSearch />}
  />
)

WithStartAdornment.storyName = 'With start adornment'

export const WithEndAdornment: Story<TextInputEProps> = (props) => (
  <TextInputE
    {...props}
    name="text-input-end-adornment"
    label="Example label"
    endAdornment={<IconSearch />}
  />
)

WithEndAdornment.storyName = 'With end adornment'

export const WithError: Story<TextInputEProps> = (props) => (
  <TextInputE
    {...props}
    isInvalid
    label="Example label"
    name="text-input-end-adornment"
  />
)

WithError.storyName = 'With error'
