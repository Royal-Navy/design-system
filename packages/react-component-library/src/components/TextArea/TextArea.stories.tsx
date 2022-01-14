import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Field, Formik, Form } from 'formik'
import * as yup from 'yup'

import { Button } from '../Button'
import { TextArea } from '.'

import { withFormik } from '../../enhancers/withFormik'

export default {
  component: TextArea,
  title: 'Text Area',
  parameters: {
    actions: { argTypesRegex: '^on.*' },
  },
} as ComponentMeta<typeof TextArea>

export const Default: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} />
)

Default.args = {
  name: 'textarea-default',
  label: 'Example label',
}

export const WithLabel: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} label="Example label" />
)

WithLabel.storyName = 'With label'

export const WithFootnote: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} label="Example label" footnote="Example footnote" />
)

WithFootnote.storyName = 'With footnote'

export const Disabled: ComponentStory<typeof TextArea> = (props) => (
  <TextArea {...props} label="Example label" isDisabled />
)

Disabled.storyName = 'Disabled'

export const WithFormik: ComponentStory<typeof TextArea> = (props) => {
  interface Data {
    'textarea-formik': string
  }

  const initialValues: Data = {
    'textarea-formik': '',
  }

  const validationSchema = yup.object().shape({
    'textarea-formik': yup.string().required('Something went wrong!'),
  })

  const FormikTextArea = withFormik(TextArea)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={action('onSubmit')}
      validationSchema={validationSchema}
    >
      <Form>
        <Field
          name="textarea-formik"
          component={FormikTextArea}
          label="Example label"
        />
        <br />
        <Button type="submit">Submit</Button>
      </Form>
    </Formik>
  )
}

WithFormik.storyName = 'Formik'
