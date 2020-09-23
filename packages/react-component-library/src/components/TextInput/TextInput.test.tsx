import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { withFormik } from '../../enhancers/withFormik'
import { TextInput } from '.'

describe('TextInput', () => {
  let wrapper: RenderResult

  describe('when all props are provided', () => {
    let onBlurSpy: (event: React.FormEvent) => void
    let onChangeSpy: (event: React.ChangeEvent<HTMLInputElement>) => void

    beforeEach(() => {
      onBlurSpy = jest.fn()
      onChangeSpy = jest.fn()

      wrapper = render(
        <>
          <TextInput
            autoFocus
            className="rn-textinput--custom"
            endAdornment={<span>end</span>}
            value="value"
            name="name"
            onBlur={onBlurSpy}
            onChange={onChangeSpy}
            footnote="footnote"
            id="id"
            label="label"
            placeholder="placeholder"
            startAdornment={<span>start</span>}
            type="text"
          />
          <input type="text" data-testid="next-input" />
        </>
      )
    })

    it('should have the has-content class', () => {
      expect(wrapper.getByTestId('container').classList).toContain(
        'has-content'
      )
    })

    it('should not have the no-label class', () => {
      expect(wrapper.getByTestId('container').classList).not.toContain(
        'no-label'
      )
    })

    it('should set the custom class', () => {
      expect(wrapper.getByTestId('container').classList).toContain(
        'rn-textinput--custom'
      )
    })

    it('should render the start adornment', () => {
      expect(wrapper.getByText('start')).toBeInTheDocument()
    })

    it('should render the label', () => {
      expect(wrapper.getByText('label')).toBeInTheDocument()
    })

    it('should associate the label with the input', () => {
      expect(wrapper.getByText('label')).toHaveAttribute('for', 'id')
    })

    it('should set the ID', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute('id', 'id')
    })

    it('should set the name', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute('name', 'name')
    })

    it('should set the placeholder', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute(
        'placeholder',
        'placeholder'
      )
    })

    it('should set the type', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute('type', 'text')
    })

    it('should set the value', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute('value', 'value')
    })

    it('should render the end adornment', () => {
      expect(wrapper.getByText('end')).toBeInTheDocument()
    })

    it('should render the footnote', () => {
      expect(wrapper.getByText('footnote')).toBeInTheDocument()
    })

    describe('and focusing on the input', () => {
      beforeEach(() => {
        wrapper.getByTestId('input').focus()
      })

      describe('and focusing on the next input', () => {
        beforeEach(() => {
          wrapper.getByTestId('next-input').focus()
        })

        it('should call the onBlur callback', () => {
          expect(onBlurSpy).toHaveBeenCalledTimes(1)
        })
      })
    })

    describe('when the value is changed', () => {
      beforeEach(async () => {
        await userEvent.type(
          wrapper.getByTestId('input'),
          '{backspace}'
        )
      })

      it('should update the value', () => {
        expect(wrapper.getByTestId('input')).toHaveValue('valu')
      })
    })

    describe('when the value is deleted', () => {
      beforeEach(async () => {
        await userEvent.type(
          wrapper.getByTestId('input'),
          '{backspace}{backspace}{backspace}{backspace}{backspace}'
        )
      })

      it('should remove the `has-content` to the container', () => {
        expect(
          wrapper.getByTestId('container').classList
        ).not.toContain('has-content')
      })

      it('should update the value', () => {
        expect(wrapper.getByTestId('input')).toHaveValue('')
      })
    })
  })

  describe('minimal props', () => {
    beforeEach(() => {
      wrapper = render(<TextInput name="name" />)
    })

    it('should have the no-label class', () => {
      expect(wrapper.getByTestId('container').classList).toContain('no-label')
    })
  })

  describe('disabled', () => {
    beforeEach(() => {
      wrapper = render(<TextInput name="name" isDisabled />)
    })

    it('should have the no-label class', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute('disabled', '')
    })
  })

  describe('type', () => {
    beforeEach(() => {
      wrapper = render(<TextInput name="name" type="password" />)
    })

    it('should have the no-label class', () => {
      expect(wrapper.getByTestId('input')).toHaveAttribute('type', 'password')
    })
  })

  describe('when the component has been enhanced with Formik', () => {
    describe('and not touched', () => {
      beforeEach(() => {
        const FormikTextInput = withFormik(TextInput)

        wrapper = render(
          <FormikTextInput
            field={{
              name: 'name',
              value: '',
              onBlur: () => null,
              onChange: () => null,
            }}
            form={{
              errors: {},
              touched: {},
            }}
          />
        )
      })

      it('should not add the aria attributes', () => {
        expect(wrapper.getByTestId('input')).not.toHaveAttribute('aria-invalid')
        expect(wrapper.getByTestId('input')).not.toHaveAttribute(
          'aria-describedBy'
        )
      })

      it('should not have an error', () => {
        expect(wrapper.getByTestId('container')).not.toHaveClass('is-invalid')
      })

      it('should not show the error', () => {
        expect(wrapper.queryAllByText('Something bad')).toHaveLength(0)
      })
    })

    describe('and the input has been touched', () => {
      beforeEach(() => {
        const FormikTextInput = withFormik(TextInput)

        wrapper = render(
          <FormikTextInput
            field={{
              name: 'name',
              value: '',
              onBlur: () => null,
              onChange: () => null,
            }}
            form={{
              errors: {
                name: 'error',
              },
              touched: {
                name: true,
              },
            }}
          />
        )
      })

      it('should add the aria attributes', () => {
        expect(wrapper.getByTestId('input')).toHaveAttribute(
          'aria-invalid',
          'true'
        )
        expect(wrapper.getByTestId('input')).toHaveAttribute('aria-describedby')
      })

      it('should have an error', () => {
        expect(wrapper.getByTestId('container')).toHaveClass('is-invalid')
      })

      it('should show the error', () => {
        expect(wrapper.getByText('error')).toBeInTheDocument()
      })
    })
  })
})
