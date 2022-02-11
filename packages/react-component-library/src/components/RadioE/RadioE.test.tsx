import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'
import { RadioE } from '.'

describe('RadioE', () => {
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
    let input: HTMLElement

    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'option1'

      radio = render(
        <RadioE
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )

      input = radio.getByTestId('radio-input')
    })

    it('should render a field with a label', () => {
      expect(radio.getByTestId('radio-label')).toHaveTextContent('My Label 1')
    })

    it('should populate the field value', () => {
      expect(input).toHaveAttribute('value', 'option1')
    })

    describe('and tab is pressed', () => {
      beforeEach(() => {
        userEvent.tab()
      })

      it('focuses the input', () => {
        expect(input).toHaveFocus()
      })

      describe('and space is pressed', () => {
        beforeEach(() => {
          userEvent.keyboard('[Space]')
        })

        it('checks the input', () => {
          expect(input).toBeChecked()
        })

        it('calls onChange once', () => {
          expect(field.onChange).toHaveBeenCalledTimes(1)
        })
      })
    })
  })

  describe('when an additional class is provided', () => {
    beforeEach(() => {
      radio = render(
        <RadioE
          className="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(radio.queryByTestId('radio')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      radio = render(
        <RadioE
          id="test"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the id to the field', () => {
      expect(radio.queryByTestId('radio-input')).toHaveAttribute('id', 'test')
    })

    it('should associate the label to the field with the custom id', () => {
      expect(radio.queryByTestId('radio-label')).toHaveAttribute('for', 'test')
    })
  })

  describe('when arbitrary props are provided', () => {
    beforeEach(() => {
      radio = render(
        <RadioE
          data-arbitrary="arbitrary"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should spread arbitrary props', () => {
      expect(radio.getByTestId('radio-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
