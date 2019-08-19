import { Field, Formik, Form } from 'formik'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as yup from 'yup'

import { Search } from '../../icons'
import Button from '../Button'
import TextInput from './index'

import withFormik from '../../enhancers/withFormik'

const stories = storiesOf('TextInput', module)

stories.add('Vanilla', () => (
  <Form>
    <TextInput className="is-valid" name="colour" label="My Label" />
    <TextInput name="name" label="Name" />
    <TextInput name="hero" label="Hero" startAdornment={<Search />} />
    <TextInput name="fruit" label="Fruit" endAdornment={<Search />} />
  </Form>
))

interface Data {
  colour: string
}

const initialValues: Data = {
  colour: 'Green',
}

const onSubmit = (data: Data): void => {
  action(`Form Submit ${JSON.stringify(data)}`)
}

const onCancel = () => {
  action('Cancel')
}

const validationSchema = yup.object().shape({
  city: yup.string().required('Hey, enter a city!'),
})

const FormikTextInput = withFormik(TextInput)

stories.add('Formik', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form>
      <Field
        className="is-valid"
        name="colour"
        label="My Label"
        component={FormikTextInput}
      />
      <Field name="name" label="Name" component={FormikTextInput} />
      <Field name="city" component={FormikTextInput} label="City" />
      <Field
        name="hero"
        component={FormikTextInput}
        label="Hero"
        endAdornment={<Search />}
      />
      <Field
        name="fruit"
        component={FormikTextInput}
        label="Fruit"
        startAdornment={<Search />}
      />
      <Field
        name="search"
        component={FormikTextInput}
        placeholder="search"
        endAdornment={<Search />}
      />
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit" variant="primary">
        Save
      </Button>
    </Form>
  </Formik>
))
