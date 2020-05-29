import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { withFormik } from '../../enhancers/withFormik'
import FieldProps from '../../types/FieldProps'
import FormProps from '../../types/FormProps'
import { Radio } from '.'

describe('Radio', () => {
  let field: FieldProps
  let form: FormProps
  let label = ''
  let radio: RenderResult

  beforeEach(() => {
    field = {
      name: 'colour',
      value: '',
      onChange: jest.fn(),
      onBlur: jest.fn(),
    }

    form = {
      errors: {},
      touched: {},
    }
  })

  describe('when a field has no errors', () => {
    beforeEach(() => {
      form.errors = {}
    })

    describe('and the field has a label', () => {
      beforeEach(() => {
        label = 'My Label 1'
      })

      describe('and the field has a value', () => {
        beforeEach(() => {
          field.value = 'option1'

          radio = render(
            <Radio
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              label={label}
            />
          )
        })

        it('should render a field with a label', () => {
          expect(radio.getByTestId('label')).toHaveTextContent('My Label 1')
        })

        it('should populate the field value', () => {
          expect(radio.queryByTestId('radio')).toHaveAttribute(
            'value',
            'option1'
          )
        })
      })
    })
  })

  describe('when a field has an error', () => {
    beforeEach(() => {
      form.errors = {
        colour: 'Something bad',
      }
    })

    describe('and the form has not been touched', () => {
      beforeEach(() => {
        form.touched = {}

        const FormikRadio = withFormik(Radio)

        radio = render(<FormikRadio field={field} form={form} />)
      })

      it('should not indicate the field has an error', () => {
        expect(radio.queryByTestId('container')).not.toHaveClass('is-invalid')
      })
    })

    describe('and the form has been touched', () => {
      beforeEach(() => {
        form.touched.colour = true

        const FormikRadio = withFormik(Radio)

        radio = render(<FormikRadio field={field} form={form} />)
      })

      it('should indicate the field has an error', () => {
        expect(radio.queryByTestId('container')).toHaveClass('is-invalid')
      })
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          className="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(radio.queryByTestId('container')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          id="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the id to the field', () => {
      expect(radio.queryByTestId('radio')).toHaveAttribute('id', 'test')
    })

    it('should associate the label to the field with the custom id', () => {
      expect(radio.queryByTestId('label')).toHaveAttribute('for', 'test')
    })
  })
})
