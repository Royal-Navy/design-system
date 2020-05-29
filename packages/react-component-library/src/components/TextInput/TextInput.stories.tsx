import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import { Field, Formik, Form } from 'formik'
import React from 'react'
import * as yup from 'yup'

import { Search } from '../../icons'
import { Button } from '../Button'
import { TextInput } from '.'

import { withFormik } from '../../enhancers/withFormik'

const stories = storiesOf('TextInput', module)

stories.add('Vanilla', () => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        action('Submitted')(e)
      }}
    >
      <TextInput className="is-valid" name="colour" label="My Label" />
      <TextInput name="name" label="Name" />
      <TextInput name="hero" label="Hero" startAdornment={<Search />} />
      <TextInput name="fruit" label="Fruit" endAdornment={<Search />} />
      <button type="submit">Submit</button>
    </form>
  )
})

stories.add('Formik', () => {
  const TextInputForm = () => {
    interface Data {
      colour: string
      city: string
    }

    const initialValues: Data = {
      colour: 'Green',
      city: '',
    }

    const validationSchema = yup.object().shape({
      city: yup.string().required('Something went wrong!'),
    })

    const FormikTextInput = withFormik(TextInput)

    return (
      <Formik
        initialValues={initialValues}
        initialErrors={{ city: 'Something went wrong!' }}
        initialTouched={{ city: true }}
        validationSchema={validationSchema}
        onSubmit={action('Submit')}
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
          <Button variant="secondary" onClick={action('Cancel')}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Form>
      </Formik>
    )
  }

  return <TextInputForm />
})
