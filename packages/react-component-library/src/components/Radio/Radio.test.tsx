import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'
import { Radio } from '.'

describe('Radio', () => {
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
      expect(radio.queryByTestId('radio')).toHaveAttribute('value', 'option1')
    })
  })

  describe('when an additional class is provided', () => {
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

  describe('when arbitrary props are provided', () => {
    beforeEach(() => {
      radio = render(
        <Radio
          data-arbitrary="arbitrary"
          name={field.name}
          value={field.value}
          onChange={field.onChange}
          label={label}
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
