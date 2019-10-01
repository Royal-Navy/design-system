import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Formik as FormikControls } from '@royalnavy/react-component-library'

export const NumberForm = () => {
  const onSubmit = data => {
    console.log('Colour: ', data)
  }

  return (
    <div style={{ maxWidth: 300, padding: 50 }}>
      <h1>Form for numbers</h1>
      <Formik
        initialValues={{ muskets: 5, pistols: 10, guns: 100 }}
        onSubmit={onSubmit}
      >
        <Form>
          <Field
            className="is-valid"
            component={FormikControls.NumberInput}
            label="Muskets"
            max={10}
            min={1}
            name="muskets"
          />
          <Field
            className="is-invalid"
            component={FormikControls.NumberInput}
            label="Pistols"
            name="pistols"
          />
          <Field
            component={FormikControls.NumberInput}
            label="Guns"
            name="guns"
            step={5}
          />
        </Form>
      </Formik>
    </div>
  )
}
