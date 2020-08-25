import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'
import { RadioEnhanced } from '.'
import { withFormik } from '../../enhancers/withFormik'

describe('RadioEnhanced', () => {
  let field: FieldProps
  let form: FormProps
  let label: string
  let radio: RenderResult

  beforeEach(() => {
    label = ''

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

  describe('when the field has no errors, a label and a value', () => {
    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'option1'

      radio = render(
        <RadioEnhanced
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          title={label}
          tabIndex={0}
        />
      )
    })

    it('should not output the description', () => {
      expect(
        radio.queryByTestId('radioenhanced-description')
      ).not.toBeInTheDocument()
    })

    it('should render a field with a label', () => {
      expect(radio.getByTestId('label')).toHaveTextContent('My Label 1')
    })

    it('should populate the field value', () => {
      expect(radio.queryByTestId('radio')).toHaveAttribute('value', 'option1')
    })

    it('does not check the nested radio', () => {
      expect(radio.getByTestId('radio')).not.toBeChecked()
    })

    describe('and the user clicks the component', () => {
      beforeEach(() => {
        fireEvent(
          radio.getByTestId('radioenhanced-wrapper'),
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('checks the nested radio', () => {
        expect(radio.getByTestId('radio')).toBeChecked()
      })
    })

    describe('and the user keys to the component', () => {
      beforeEach(() => {
        userEvent.tab()
        userEvent.type(radio.getByTestId('radioenhanced-wrapper'), '{enter}')
      })

      it('focusses the nested radio', () => {
        expect(radio.getByTestId('radio')).toHaveFocus()
        expect(radio.getByTestId('radio')).toBeChecked()
      })
    })
  })

  describe('when a field has an error and the form has not been touched', () => {
    beforeEach(() => {
      form.errors = {
        colour: 'Something bad',
      }

      form.touched = {}

      const FormikRadioEnhanced = withFormik(RadioEnhanced)

      radio = render(<FormikRadioEnhanced field={field} form={form} />)
    })

    it('should not add the aria attributes', () => {
      expect(radio.getByTestId('radio')).not.toHaveAttribute('aria-invalid')
      expect(radio.getByTestId('radio')).not.toHaveAttribute('aria-describedBy')
    })

    it('should not indicate the field has an error', () => {
      expect(radio.queryByTestId('container')).not.toHaveClass('is-invalid')
    })

    it('should not show the error', () => {
      expect(radio.queryAllByText('Something bad')).toHaveLength(0)
    })
  })

  describe('when a field has an error and the form has been touched', () => {
    beforeEach(() => {
      form.errors = {
        colour: 'Something bad',
      }

      form.touched.colour = true

      const FormikRadioEnhanced = withFormik(RadioEnhanced)

      radio = render(<FormikRadioEnhanced field={field} form={form} />)
    })

    it('should add the aria attributes', () => {
      expect(radio.getByTestId('radio')).toHaveAttribute('aria-invalid')
      expect(radio.getByTestId('radio')).toHaveAttribute('aria-describedby')
    })

    it('should indicate the field has an error', () => {
      expect(radio.queryByTestId('container')).toHaveClass('is-invalid')
    })

    it('should show the error', () => {
      expect(radio.getByText('Something bad')).toBeInTheDocument()
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      radio = render(
        <RadioEnhanced
          className="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          title={label}
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
        <RadioEnhanced
          id="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          title={label}
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

  describe('when a description is provided', () => {
    beforeEach(() => {
      radio = render(
        <RadioEnhanced
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
      expect(radio.getByTestId('radioenhanced-description').innerHTML).toEqual(
        'Hello, World!'
      )
    })
  })
})
