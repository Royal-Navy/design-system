import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'
import { TextArea } from '.'
import { withFormik } from '../../enhancers/withFormik'

describe('TextArea', () => {
  let onBlurSpy: (event: React.FormEvent) => void
  let onChangeSpy: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  let wrapper: RenderResult

  describe('all props', () => {
    beforeEach(() => {
      onBlurSpy = jest.fn()
      onChangeSpy = jest.fn()

      wrapper = render(
        <TextArea
          className="rn-textarea--modifier"
          footnote="footnote"
          id="id"
          label="label"
          name="name"
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
          placeholder="placeholder"
          value="ab"
          data-arbitrary="123"
        />
      )
    })

    it('adds the CSS modifier', () => {
      expect(wrapper.getByTestId('textarea-container').classList).toContain(
        'rn-textarea--modifier'
      )
    })

    it('renders the footnote', () => {
      expect(wrapper.getByText('footnote')).toBeInTheDocument()
    })

    it('sets the `id` on the input', () => {
      expect(wrapper.getByTestId('textarea-input')).toHaveAttribute('id', 'id')
    })

    it('renders the label', () => {
      expect(wrapper.getByText('label')).toBeInTheDocument()
    })

    it('should associate the label to the field with the custom id', () => {
      expect(wrapper.getByTestId('textarea-label')).toHaveAttribute('for', 'id')
    })

    it('sets the `name` on the input', () => {
      expect(wrapper.getByTestId('textarea-input')).toHaveAttribute(
        'name',
        'name'
      )
    })

    it('sets the `placeholder` on the input', () => {
      expect(wrapper.getByTestId('textarea-input')).toHaveAttribute(
        'placeholder',
        'placeholder'
      )
    })

    it('sets the `value` on the input', () => {
      expect(wrapper.getByTestId('textarea-input')).toHaveValue('ab')
    })

    it('drills arbitrary props to the input', () => {
      expect(wrapper.getByTestId('textarea-input')).toHaveAttribute(
        'data-arbitrary',
        '123'
      )
    })

    describe('when the text area loses focus', () => {
      beforeEach(() => {
        wrapper.getByTestId('textarea-input').focus()
        wrapper.getByTestId('textarea-input').blur()
      })

      it('should call the onBlur callback once', () => {
        expect(onBlurSpy).toHaveBeenCalledTimes(1)
      })
    })

    describe('when the value is changed', () => {
      beforeEach(async () => {
        await userEvent.type(
          wrapper.getByTestId('textarea-input'),
          '{backspace}'
        )
      })

      it('should update the value', () => {
        expect(wrapper.getByTestId('textarea-input')).toHaveValue('a')
      })
    })

    describe('when the value is deleted', () => {
      beforeEach(async () => {
        await userEvent.type(
          wrapper.getByTestId('textarea-input'),
          '{backspace}{backspace}'
        )
      })

      it('should remove the `has-content` to the container', () => {
        expect(
          wrapper.getByTestId('textarea-container').classList
        ).not.toContain('has-content')
      })

      it('should update the value', () => {
        expect(wrapper.getByTestId('textarea-input')).toHaveValue('')
      })
    })
  })

  describe('when a Formik enhanced field has an error', () => {
    let field: FieldProps
    let form: FormProps

    describe('and the form has not been touched', () => {
      beforeEach(() => {
        field = {
          name: 'colour',
          value: '',
          onBlur: null,
          onChange: jest.fn(),
        }
        form = {
          errors: {
            colour: 'Something bad',
          },
          touched: {},
        }

        const FormikTextArea = withFormik(TextArea)

        wrapper = render(<FormikTextArea field={field} form={form} />)
      })

      it('should add the aria attributes', () => {
        expect(wrapper.getByTestId('textarea-input')).not.toHaveAttribute(
          'aria-invalid'
        )
        expect(wrapper.getByTestId('textarea-input')).not.toHaveAttribute(
          'aria-describedby'
        )
      })

      it('should not indicate the field has an error', () => {
        expect(wrapper.queryByTestId('textarea-container')).not.toHaveClass(
          'is-invalid'
        )
      })

      it('should not show the error', () => {
        expect(wrapper.queryAllByText('Something bad')).toHaveLength(0)
      })
    })

    describe('and the form has been touched', () => {
      beforeEach(() => {
        field = {
          name: 'colour',
          value: '',
          onBlur: null,
          onChange: jest.fn(),
        }
        form = {
          errors: {
            colour: 'Something bad',
          },
          touched: {
            colour: true,
          },
        }

        const FormikTextArea = withFormik(TextArea)

        wrapper = render(<FormikTextArea field={field} form={form} />)
      })

      it('should add the aria attributes', () => {
        expect(wrapper.getByTestId('textarea-input')).toHaveAttribute(
          'aria-invalid'
        )
        expect(wrapper.getByTestId('textarea-input')).toHaveAttribute(
          'aria-describedby'
        )
      })

      it('should indicate the field has an error', () => {
        expect(wrapper.queryByTestId('textarea-container')).toHaveClass(
          'is-invalid'
        )
      })

      it('should show the error', () => {
        expect(wrapper.getByText('Something bad')).toBeInTheDocument()
      })
    })
  })
})
