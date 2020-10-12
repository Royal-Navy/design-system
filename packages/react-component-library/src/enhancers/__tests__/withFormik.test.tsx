import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import React from 'react'

import { FieldProps } from '../../common/FieldProps'
import { FormProps } from '../../common/FormProps'
import { withFormik } from '../withFormik'

const DummyComponent: React.FC = (props) => (
  <div data-testid="dummy-component" {...props} />
)
const DummyFormikComponent = withFormik(DummyComponent)

describe('withFormik', () => {
  let field: FieldProps
  let form: FormProps
  let wrapper: RenderResult
  const errorText = 'Test error'

  describe('when a touched nested field has an error', () => {
    beforeEach(() => {
      field = {
        name: 'nested.field',
        value: 'false',
        onChange: jest.fn(),
        onBlur: jest.fn(),
      }

      form = {
        errors: {
          nested: {
            field: errorText,
          },
        },
        touched: {
          nested: {
            field: true,
          },
        },
      }

      wrapper = render(<DummyFormikComponent field={field} form={form} />)
    })

    it('adds the aria aria-invalid attribute', () => {
      expect(wrapper.getByTestId('dummy-component')).toHaveAttribute(
        'aria-invalid',
        'true'
      )
    })

    it('sets the aria aria-describedby attribute', () => {
      expect(wrapper.getByTestId('dummy-component')).toHaveAttribute(
        'aria-describedby',
        expect.stringMatching(/^nested\.field-error-/)
      )
    })

    it('adds the is-invalid CSS class', () => {
      expect(wrapper.getByTestId('dummy-component')).toHaveClass('is-invalid')
    })

    it('displays the error text', () => {
      expect(wrapper.getByTestId('error')).toHaveTextContent(errorText)
    })
  })
})
