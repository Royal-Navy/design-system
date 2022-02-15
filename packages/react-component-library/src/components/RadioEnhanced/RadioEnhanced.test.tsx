import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'
import { RadioEnhanced } from '.'

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

  describe('when an additional class is provided', () => {
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

  describe('when arbitrary props are provided', () => {
    beforeEach(() => {
      radio = render(
        <RadioEnhanced
          data-arbitrary="arbitrary"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          title={label}
        />
      )
    })

    it('should spread arbitrary props', () => {
      expect(radio.getByTestId('radio')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
