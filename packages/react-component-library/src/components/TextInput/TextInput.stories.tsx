import { Field, Formik, Form } from 'formik'
import React from 'react'
import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as yup from 'yup'

import Icons from '../../icons'
import Button from '../Button'
import TextInput from './index'

const { Search } = Icons

const stories = storiesOf('TextInput', module)

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

stories.add('Formik', () => (
  <Formik
    initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}
  >
    <Form>
      <Field
        className="rn-textinput--is-valid"
        name="colour"
        component={TextInput}
        label="My Label"
      />

      <Field name="name" component={TextInput} label="Name" />
      <Field name="city" component={TextInput} label="City" />
      <Field
        name="hero"
        component={TextInput}
        label="Hero"
        endAdornment={<Search />}
      />
      <Field
        name="fruit"
        component={TextInput}
        label="Fruit"
        startAdornment={<Search />}
      />
      <Field
        name="search"
        component={TextInput}
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
