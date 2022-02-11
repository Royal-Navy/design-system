import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { Field } from '.'
import { TextInputE } from '../TextInputE'

describe('Field', () => {
  let wrapper: RenderResult

  describe('with `hintText` and `errors` props', () => {
    beforeEach(() => {
      wrapper = render(
        <Field hintText="Example hint text." errors={[{ error: 'Required' }]}>
          <TextInputE label="Example text input" name="example" />
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
  })
})
