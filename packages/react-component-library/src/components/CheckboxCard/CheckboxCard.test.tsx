import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { CheckboxCard } from '.'
import { withFormik } from '../../enhancers/withFormik'
import FieldProps from '../../types/FieldProps'
import FormProps from '../../types/FormProps'

describe('CheckboxCard', () => {
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
        <CheckboxCard
          name={field.name}
          value={field.value}
          title={label}
          onChange={field.onChange}
          tabIndex={0}
        />
      )
    })

    it('should not output the description', () => {
      expect(
        checkbox.queryByTestId('checkboxcard-description')
      ).not.toBeInTheDocument()
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

    it('does not check the nested checkbox', () => {
      expect(checkbox.getByTestId('checkbox')).not.toBeChecked()
    })

    describe('and the user clicks the component', () => {
      beforeEach(() => {
        fireEvent(
          checkbox.getByTestId('checkboxcard-wrapper'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('checks the nested checkbox', () => {
        expect(checkbox.getByTestId('checkbox')).toBeChecked()
      })
    })

    describe('and the user keys to the component', () => {
      beforeEach(() => {
        userEvent.tab()
        userEvent.type(checkbox.getByTestId('checkboxcard-wrapper'), '{enter}')
      })

      it('focusses the nested checkbox', () => {
        expect(checkbox.getByTestId('checkbox')).toHaveFocus()
        expect(checkbox.getByTestId('checkbox')).toBeChecked()
      })
    })
  })

  describe('when a field has an error and the form has not been touched', () => {
    beforeEach(() => {
      form.errors = {
        example1: 'Something bad',
      }

      form.touched = {}

      const FormikCheckboxCard = withFormik(CheckboxCard)

      checkbox = render(<FormikCheckboxCard field={field} form={form} />)
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
      expect(checkbox.queryByTestId('container')).not.toHaveClass('is-invalid')
    })

    it('should not show the error', () => {
      expect(checkbox.queryAllByText('Something bad')).toHaveLength(0)
    })
  })

  describe('when a field has an error and the form has been touched', () => {
    beforeEach(() => {
      form.errors = {
        example1: 'Something bad',
      }

      form.touched.example1 = true

      const FormikCheckboxCard = withFormik(CheckboxCard)

      checkbox = render(<FormikCheckboxCard field={field} form={form} />)
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

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      checkbox = render(
        <CheckboxCard
          className="test"
          name={field.name}
          value={field.value}
          title={label}
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
        <CheckboxCard
          id="test"
          name={field.name}
          value={field.value}
          title={label}
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

  describe('when a description is provided', () => {
    beforeEach(() => {
      checkbox = render(
        <CheckboxCard
          id="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          title={label}
          description="Hello, World!"
        />
      )
    })

    it('should output the description', () => {
      expect(
        checkbox.getByTestId('checkboxcard-description').innerHTML
      ).toEqual('Hello, World!')
    })
  })
})
