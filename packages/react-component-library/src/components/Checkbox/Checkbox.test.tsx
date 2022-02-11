import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Checkbox } from '.'
import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'

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

    it('should not initially render as checked', () => {
      expect(checkbox.getByTestId('checkbox')).not.toHaveAttribute('checked')
    })
  })

  describe('when a field has defaultChecked prop set', () => {
    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'false'

      checkbox = render(
        <Checkbox
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
          defaultChecked
        />
      )
    })

    it('should initially render as checked', () => {
      expect(checkbox.getByTestId('checkbox')).toHaveAttribute('checked')
    })
  })

  describe('when a field has checked prop set', () => {
    beforeEach(() => {
      label = 'My Label 1'
      field.value = 'false'

      checkbox = render(
        <Checkbox
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
          checked
        />
      )
    })

    it('should initially render as checked', () => {
      expect(checkbox.getByTestId('checkbox')).toHaveAttribute('checked')
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

  describe('when an arbitrary prop is provided', () => {
    beforeEach(() => {
      checkbox = render(
        <Checkbox
          data-arbitrary="arbitrary"
          name={field.name}
          value={field.value}
          label={label}
          onChange={field.onChange}
        />
      )
    })

    it('should drill the arbitrary prop', () => {
      expect(checkbox.queryByTestId('checkbox')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })
})
