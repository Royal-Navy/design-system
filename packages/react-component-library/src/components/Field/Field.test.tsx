import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Field } from '.'
import { TextInput } from '../TextInput'

describe('Field', () => {
  let wrapper: RenderResult

  describe('with `hintText` and `errors` props', () => {
    beforeEach(() => {
      wrapper = render(
        <Field hintText="Example hint text." errors={[{ error: 'Required' }]}>
          <TextInput
            label="Example text input"
            name="example"
            data-testid="example-component"
          />
        </Field>
      )
    })

    it('renders the hint text', () => {
      expect(wrapper.queryByText('Example hint text.')).toBeInTheDocument()
    })

    it('renders the error message', () => {
      const errorMessages = wrapper.getAllByTestId('field-error-message')

      expect(errorMessages).toHaveLength(1)
      expect(errorMessages[0]).toHaveTextContent('Required')
    })

    it('adds the aria aria-invalid attribute', () => {
      expect(wrapper.getByTestId('example-component')).toHaveAttribute(
        'aria-invalid',
        'true'
      )
    })

    it('adds the `aria-describedby` attribute', () => {
      expect(wrapper.getByTestId('example-component')).toHaveAttribute(
        'aria-describedby',
        expect.stringMatching(/(?<=field-)(.*)(?!-errormessage)/)
      )
    })

    it('sets the `aria-errormessage` attribute', () => {
      expect(wrapper.getByTestId('example-component')).toHaveAttribute(
        'aria-errormessage',
        expect.stringMatching(/(?<=field-)(.*)(?=-errormessage)/)
      )
    })
  })
})
