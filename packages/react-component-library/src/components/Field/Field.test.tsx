import React from 'react'

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

  describe('with `reserveErrorSpace`', () => {
    it('holds a line for the error while there is none', () => {
      wrapper = render(
        <Field reserveErrorSpace>
          <TextInput label="Example text input" name="example" />
        </Field>
      )

      const placeholder = wrapper.getByTestId('field-error-placeholder')

      expect(placeholder).toHaveAttribute('aria-hidden', 'true')
      expect(placeholder).toHaveStyleRule('min-height', '1rem')
      expect(placeholder).toHaveStyleRule('display', 'block')
    })

    it('lets the line stand in for the margin', () => {
      wrapper = render(
        <Field reserveErrorSpace>
          <TextInput label="Example text input" name="example" />
        </Field>
      )

      expect(wrapper.container.firstChild).toHaveStyleRule(
        'margin',
        '0.25rem 0 0'
      )
    })

    it('gives the line to the error once one is raised', () => {
      wrapper = render(
        <Field reserveErrorSpace errors={[{ error: 'Required' }]}>
          <TextInput label="Example text input" name="example" />
        </Field>
      )

      expect(
        wrapper.queryByTestId('field-error-placeholder')
      ).not.toBeInTheDocument()
      expect(wrapper.getByTestId('field-error-message')).toHaveStyleRule(
        'min-height',
        '1rem'
      )
    })

    it('keeps the line for an error without a message', () => {
      wrapper = render(
        <Field reserveErrorSpace errors={[{ error: true }]}>
          <TextInput label="Example text input" name="example" />
        </Field>
      )

      expect(wrapper.getByTestId('field-error-placeholder')).toBeInTheDocument()
    })
  })

  describe('without `reserveErrorSpace`', () => {
    it('does not hold a line for the error', () => {
      wrapper = render(
        <Field>
          <TextInput label="Example text input" name="example" />
        </Field>
      )

      expect(
        wrapper.queryByTestId('field-error-placeholder')
      ).not.toBeInTheDocument()
    })

    it('keeps the default margin', () => {
      wrapper = render(
        <Field>
          <TextInput label="Example text input" name="example" />
        </Field>
      )

      expect(wrapper.container.firstChild).toHaveStyleRule(
        'margin',
        '1.25rem 0'
      )
    })
  })
})
