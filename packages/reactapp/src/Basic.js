import React from 'react'
import { Formik, Field } from 'formik'
import { Select, withFormik } from '@royalnavy/react-component-library'

export const Basic = () => {
  const SelectWithFormik = withFormik(Select)

  const options = [
    { value: 'chocolate', label: 'Chocolate', badge: 100 },
    { value: 'chozbun', label: 'Chozo Bun', badge: 21 },
    { value: 'melon', label: 'Melon', badge: 321 },
    { value: 'strawberry', label: 'Strawberry', badge: 200 },
    { value: 'snozberry', label: 'Snozberry' },
    { value: 'vanilla', label: 'Vanilla', badge: 50 },
  ]

  const initialValues = {
    colour: '',
  }

  const onSubmit = data => {
    console.log('Colour: ', data)
  }

  return (
    <div>
      <h1>Anywhere in your app!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Field
              component={SelectWithFormik}
              options={options}
              name="colour"
              label="Colours"
              all
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}
