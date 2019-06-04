import 'jest-dom/extend-expect'
import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import FieldProps from '../../types/FieldProps'
import FormProps from '../../types/FormProps'
import TextInput from './index'

describe('TextInput', () => {
  let field: FieldProps
  let form: FormProps
  let label = ''
  let textInput: RenderResult

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
        label = 'Colour'
      })

      describe('and the field has a value', () => {
        beforeEach(() => {
          field.value = 'Green'

          textInput = render(
            <TextInput field={field} form={form} label={label} />
          )
        })

        it('should render a field with a label', () => {
          expect(textInput.getByTestId('label')).toHaveTextContent('Colour')
        })

        it('should indicate that the field has content so the field is shrunk', () => {
          expect(textInput.queryByTestId('container')).toHaveClass(
            'rn-textinput--has-content'
          )
        })

        it('should populate the field value', () => {
          expect(textInput.queryByTestId('input')).toHaveAttribute(
            'value',
            'Green'
          )
        })
      })
    })

    describe('and the field has no label but a placeholder', () => {
      beforeEach(() => {
        textInput = render(
          <TextInput field={field} form={form} placeholder="Search" />
        )
      })

      it('should not include a label', () => {
        expect(textInput.queryByTestId('label')).toBeNull()
      })

      it('should adjust the styles to signify there is no label', () => {
        expect(textInput.queryByTestId('container')).toHaveClass(
          'rn-textinput--no-label'
        )
      })

      it('should include the placeholder in the field', () => {
        expect(textInput.getByTestId('input')).toHaveAttribute(
          'placeholder',
          'Search'
        )
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

        textInput = render(
          <TextInput field={field} form={form} label={label} />
        )
      })

      it('should not indicate the field has an error', () => {
        expect(textInput.queryByTestId('container')).not.toHaveClass(
          'rn-textinput--is-invalid'
        )
      })
    })

    describe('and the form has been touched', () => {
      beforeEach(() => {
        form.touched.colour = true

        textInput = render(
          <TextInput field={field} form={form} label={label} />
        )
      })

      it('should indicate the field has an error', () => {
        expect(textInput.queryByTestId('container')).toHaveClass(
          'rn-textinput--is-invalid'
        )
      })
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      textInput = render(
        <TextInput className="test" field={field} form={form} label={label} />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(textInput.queryByTestId('container')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      textInput = render(
        <TextInput id="test" field={field} form={form} label={label} />
      )
    })

    it('should attach the id to the field', () => {
      expect(textInput.queryByTestId('input')).toHaveAttribute('id', 'test')
    })

    it('should associate the label to the field with the custom id', () => {
      expect(textInput.queryByTestId('label')).toHaveAttribute('for', 'test')
    })
  })

  describe('when a start adornment is provided', () => {
    beforeEach(() => {
      textInput = render(
        <TextInput
          field={field}
          form={form}
          placeholder="Search"
          startAdornment={<span>test1234</span>}
        />
      )
    })

    it('should include the adornment', () => {
      expect(textInput.getByTestId('start-adornment')).toHaveClass(
        'rn-textinput__start-adornment'
      )
      expect(textInput.getByTestId('start-adornment')).toHaveTextContent(
        'test1234'
      )
    })
  })

  describe('when an end adornment is provided', () => {
    beforeEach(() => {
      textInput = render(
        <TextInput
          field={field}
          form={form}
          placeholder="Search"
          endAdornment={<span>test4321</span>}
        />
      )
    })

    it('should include the adornment', () => {
      expect(textInput.getByTestId('end-adornment')).toHaveClass(
        'rn-textinput__end-adornment'
      )
      expect(textInput.getByTestId('end-adornment')).toHaveTextContent(
        'test4321'
      )
    })
  })
})
