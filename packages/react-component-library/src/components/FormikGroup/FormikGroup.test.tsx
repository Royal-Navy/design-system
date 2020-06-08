import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Field, Formik, Form } from 'formik'
import { render, RenderResult } from '@testing-library/react'

import { FormikGroup } from './FormikGroup'
import { Radio } from '../Radio'
import { withFormik } from '../../enhancers'

const TestForm = ({
  initialErrors = {},
  initialValues = {},
  initialTouched = {},
}) => {
  const FormikRadio = withFormik(Radio)

  return (
    <Formik
      initialErrors={initialErrors}
      initialValues={initialValues}
      initialTouched={initialTouched}
      onSubmit={jest.fn()}
    >
      <Form>
        <FormikGroup className="class" label="Select an option">
          <Field
            component={FormikRadio}
            name="example"
            label="Option 1"
            value="1"
          />
          <Field
            component={FormikRadio}
            name="example"
            label="Option 2"
            value="2"
          />
          <Field
            component={FormikRadio}
            name="example"
            label="Option 3"
            value="3"
          />
        </FormikGroup>
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

describe('FormikGroup', () => {
  let wrapper: RenderResult

  describe('no errors', () => {
    beforeEach(() => {
      wrapper = render(<TestForm />)
    })

    it('should add the class name', () => {
      expect(wrapper.getByTestId('formik-group').classList).toContain('class')
    })

    it('should add the role attribute', () => {
      expect(wrapper.getByTestId('formik-group')).toHaveAttribute('role', 'group')
    })

    it('should add the legend', () => {
      expect(wrapper.getByTestId('formik-group-legend')).toHaveTextContent(
        'Select an option'
      )
    })

    it('should render the radios without aria attributes', () => {
      const radios = wrapper.getAllByTestId('radio')

      expect(radios[0]).not.toHaveAttribute('aria-describedby')
      expect(radios[0]).not.toHaveAttribute('aria-invalid')
      expect(radios[1]).not.toHaveAttribute('aria-describedby')
      expect(radios[1]).not.toHaveAttribute('aria-invalid')
      expect(radios[2]).not.toHaveAttribute('aria-describedby')
      expect(radios[2]).not.toHaveAttribute('aria-invalid')
    })

    it('should not render the error', () => {
      expect(wrapper.queryAllByTestId('formik-group-error')).toHaveLength(0)
    })
  })

  describe('with errors', () => {
    beforeEach(() => {
      wrapper = render(
        <TestForm
          initialErrors={{
            example: 'There is an error',
          }}
          initialValues={{
            example: '',
          }}
          initialTouched={{
            example: true,
          }}
        />
      )
    })

    it('should render the radios with aria attributes', () => {
      const radios = wrapper.getAllByTestId('radio')
      const errorId = wrapper
        .getByTestId('formik-group-error')
        .getAttribute('id')

      expect(radios[0]).toHaveAttribute('aria-describedby', errorId)
      expect(radios[0]).toHaveAttribute('aria-invalid', 'true')
      expect(radios[1]).toHaveAttribute('aria-describedby', errorId)
      expect(radios[1]).toHaveAttribute('aria-invalid', 'true')
      expect(radios[2]).toHaveAttribute('aria-describedby', errorId)
      expect(radios[2]).toHaveAttribute('aria-invalid', 'true')
    })

    it('should render the error', () => {
      expect(wrapper.getByTestId('formik-group-error')).toHaveTextContent(
        'There is an error'
      )
    })
  })
})
