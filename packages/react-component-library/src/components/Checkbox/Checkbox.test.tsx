import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Checkbox } from '.'
import { withFormik } from '../../enhancers/withFormik'
import FieldProps from '../../types/FieldProps'
import FormProps from '../../types/FormProps'

describe('Checkbox', () => {
  let field: FieldProps
  let form: FormProps
  let label = ''
  let checkbox: RenderResult

  beforeEach(() => {
    field = {
      name: 'example1',
      value: 'false',
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
          field.value = 'false'

          checkbox = render(
            <Checkbox
              name={field.name}
              value={field.value}
              label={label}
              onChange={field.onChange}
            />
          )
        })

        it('should render a field with a label', () => {
          expect(checkbox.getByTestId('label')).toHaveTextContent('My Label 1')
        })

        it('should populate the field value', () => {
          expect(checkbox.queryByTestId('checkbox')).toHaveAttribute(
            'value',
            'false'
          )
        })
      })
    })
  })

  describe('when a field has an error', () => {
    beforeEach(() => {
      form.errors = {
        example1: 'Something bad',
      }
    })

    describe('and the form has not been touched', () => {
      beforeEach(() => {
        form.touched = {}

        const FormikCheckbox = withFormik(Checkbox)

        checkbox = render(<FormikCheckbox field={field} form={form} />)
      })

      it('should not add the aria attributes', () => {
        expect(checkbox.getByTestId('checkbox')).not.toHaveAttribute(
          'aria-invalid'
        )
        expect(checkbox.getByTestId('checkbox')).not.toHaveAttribute(
          'aria-describedBy'
        )
      })

      it('should not indicate the field has an error', () => {
        expect(checkbox.queryByTestId('container')).not.toHaveClass(
          'is-invalid'
        )
      })

      it('should not show the error', () => {
        expect(checkbox.queryAllByText('Something bad')).toHaveLength(0)
      })
    })

    describe('and the form has been touched', () => {
      beforeEach(() => {
        form.touched.example1 = true

        const FormikCheckbox = withFormik(Checkbox)

        checkbox = render(<FormikCheckbox field={field} form={form} />)
      })

      it('should add the aria attributes', () => {
        expect(checkbox.getByTestId('checkbox')).toHaveAttribute(
          'aria-invalid',
          'true'
        )
        expect(checkbox.getByTestId('checkbox')).toHaveAttribute(
          'aria-describedby'
        )
      })

      it('should indicate the field has an error', () => {
        expect(checkbox.queryByTestId('container')).toHaveClass('is-invalid')
      })

      it('should show the error', () => {
        expect(checkbox.getByText('Something bad')).toBeInTheDocument()
      })
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          className="test"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(checkbox.queryByTestId('container')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          id="test"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should attach the id to the field', () => {
      expect(checkbox.queryByTestId('checkbox')).toHaveAttribute('id', 'test')
    })

    it('should associate the label to the field with the custom id', () => {
      expect(checkbox.queryByTestId('label')).toHaveAttribute('for', 'test')
    })
  })
})
