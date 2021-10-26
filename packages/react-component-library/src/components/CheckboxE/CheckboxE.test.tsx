import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { CheckboxE } from '.'
import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'
import { withFormik } from '../../enhancers/withFormik'

describe('Checkbox', () => {
  let field: FieldProps
  let form: FormProps
  let label: string
  let checkbox: RenderResult

  beforeEach(() => {
    label = ''

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

  describe('when a field has no errors, a label and a value', () => {
    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'false'

      checkbox = render(
        <CheckboxE
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should render a field with a label', () => {
      expect(checkbox.getByTestId('checkbox-label')).toHaveTextContent(
        'My Label 1'
      )
    })

    it('should populate the field value', () => {
      expect(checkbox.queryByTestId('checkbox-input')).toHaveAttribute(
        'value',
        'false'
      )
    })

    it('should not initially render as checked', () => {
      expect(checkbox.getByTestId('checkbox-input')).not.toHaveAttribute(
        'checked'
      )
    })
  })

  describe('when a field has defaultChecked prop set', () => {
    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'false'

      checkbox = render(
        <CheckboxE
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
          defaultChecked
        />
      )
    })

    it('should initially render as checked', () => {
      expect(checkbox.getByTestId('checkbox-input')).toHaveAttribute('checked')
    })
  })

  describe('when a field has checked prop set', () => {
    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'false'

      checkbox = render(
        <CheckboxE
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
          checked
        />
      )
    })

    it('should initially render as checked', () => {
      expect(checkbox.getByTestId('checkbox-input')).toHaveAttribute('checked')
    })
  })

  describe('when a field has an error and the form has not been touched', () => {
    beforeEach(() => {
      form.errors = {
        example1: 'Something bad',
      }

      form.touched = {}

      const FormikCheckbox = withFormik(CheckboxE)

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
      expect(checkbox.queryByTestId('checkbox')).not.toHaveClass('is-invalid')
    })

    it('should not show the error', () => {
      expect(checkbox.queryAllByText('Something bad')).toHaveLength(0)
    })
  })

  describe('when a field has na error and the form has been touched', () => {
    beforeEach(() => {
      form.errors = {
        example1: 'Something bad',
      }

      form.touched.example1 = true

      const FormikCheckbox = withFormik(CheckboxE)

      checkbox = render(<FormikCheckbox field={field} form={form} />)
    })

    it('should add the aria attributes', () => {
      expect(checkbox.getByTestId('checkbox-input')).toHaveAttribute(
        'aria-invalid',
        'true'
      )
      expect(checkbox.getByTestId('checkbox-input')).toHaveAttribute(
        'aria-describedby'
      )
    })

    it('should indicate the field has an error', () => {
      expect(checkbox.queryByTestId('checkbox')).toHaveClass('is-invalid')
    })

    it('should show the error', () => {
      expect(checkbox.getByText('Something bad')).toBeInTheDocument()
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      checkbox = render(
        <CheckboxE
          className="test"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(checkbox.queryByTestId('checkbox')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      checkbox = render(
        <CheckboxE
          id="test"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should attach the id to the field', () => {
      expect(checkbox.queryByTestId('checkbox-input')).toHaveAttribute(
        'id',
        'test'
      )
    })

    it('should associate the label to the field with the custom id', () => {
      expect(checkbox.queryByTestId('checkbox-label')).toHaveAttribute(
        'for',
        'test'
      )
    })
  })

  describe('when an arbitrary prop is provided', () => {
    beforeEach(() => {
      checkbox = render(
        <CheckboxE
          data-arbitrary="arbitrary"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should drill the arbitrary prop', () => {
      expect(checkbox.queryByTestId('checkbox-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
