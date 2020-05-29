import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import withFormik from '../../enhancers/withFormik'
import FieldProps from '../../types/FieldProps'
import FormProps from '../../types/FormProps'
import { TextArea } from '.'

describe('TextArea', () => {
  let field: FieldProps
  let form: FormProps
  let label = ''
  let textInput: RenderResult

  beforeEach(() => {
    field = {
      name: 'colour',
      value: '',
      onBlur: null,
      onChange: jest.fn(),
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
            <TextArea
              value={field.value}
              name={field.name}
              onChange={field.onChange}
              label={label}
            />
          )
        })

        it('should render a field with a label', () => {
          expect(textInput.getByTestId('textarea-label')).toHaveTextContent(
            'Colour'
          )
        })

        it('should indicate that the field has content so the field is shrunk', () => {
          expect(textInput.queryByTestId('textarea-container')).toHaveClass(
            'has-content'
          )
        })

        it('should populate the field value', () => {
          expect(textInput.queryByTestId('textarea-input')).toHaveTextContent(
            'Green'
          )
        })
      })
    })

    describe('and the field has no label but a placeholder', () => {
      beforeEach(() => {
        textInput = render(
          <TextArea
            value={field.value}
            name={field.name}
            onChange={field.onChange}
            placeholder="Search"
          />
        )
      })

      it('should not include a label', () => {
        expect(textInput.queryByTestId('textarea-label')).toBeNull()
      })

      it('should adjust the styles to signify there is no label', () => {
        expect(textInput.queryByTestId('textarea-container')).toHaveClass(
          'no-label'
        )
      })

      it('should include the placeholder in the field', () => {
        expect(textInput.getByTestId('textarea-input')).toHaveAttribute(
          'placeholder',
          'Search'
        )
      })
    })
  })

  describe('when a Formik enhanced field has an error', () => {
    beforeEach(() => {
      form.errors = {
        colour: 'Something bad',
      }
    })

    describe('and the form has not been touched', () => {
      beforeEach(() => {
        form.touched = {}

        const FormikTextArea = withFormik(TextArea)

        textInput = render(<FormikTextArea field={field} form={form} />)
      })

      it('should not indicate the field has an error', () => {
        expect(textInput.queryByTestId('textarea-container')).not.toHaveClass(
          'is-invalid'
        )
      })
    })

    describe('and the form has been touched', () => {
      beforeEach(() => {
        form.touched.colour = true

        const FormikTextArea = withFormik(TextArea)

        textInput = render(<FormikTextArea field={field} form={form} />)
      })

      it('should indicate the field has an error', () => {
        expect(textInput.queryByTestId('textarea-container')).toHaveClass(
          'is-invalid'
        )
      })
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      textInput = render(
        <TextArea
          className="test"
          value={field.value}
          name={field.name}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the class to the wrapper', () => {
      expect(textInput.queryByTestId('textarea-container')).toHaveClass('test')
    })
  })

  describe('when an id is provided', () => {
    beforeEach(() => {
      textInput = render(
        <TextArea
          id="test"
          value={field.value}
          name={field.name}
          onChange={field.onChange}
          label={label}
        />
      )
    })

    it('should attach the id to the field', () => {
      expect(textInput.queryByTestId('textarea-input')).toHaveAttribute(
        'id',
        'test'
      )
    })

    it('should associate the label to the field with the custom id', () => {
      expect(textInput.queryByTestId('textarea-label')).toHaveAttribute(
        'for',
        'test'
      )
    })
  })

  describe('when the onBlur callback is provided', () => {
    let onBlurSpy: jest.SpyInstance

    beforeEach(() => {
      field.onBlur = () => {
        return true
      }
      onBlurSpy = jest.spyOn(field, 'onBlur')

      textInput = render(
        <div>
          <TextArea {...field} />
          <input type="text" data-testid="next-field" />
        </div>
      )
    })

    describe('when the text area loses focus', () => {
      beforeEach(() => {
        textInput.getByTestId('textarea-input').focus()
        textInput.getByTestId('next-field').focus()
      })

      it('should call the onBlur callback once', () => {
        expect(onBlurSpy).toHaveBeenCalledTimes(1)
      })
    })
  })
})
