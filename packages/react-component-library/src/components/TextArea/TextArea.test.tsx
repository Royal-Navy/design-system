import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { TextArea } from '.'

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
          id="id"
          label="label"
          name="name"
          onBlur={onBlurSpy}
          onChange={onChangeSpy}
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

  describe('when the default `id` is used and text is typed in the input', () => {
    let initialId: string

    beforeEach(() => {
      wrapper = render(<TextArea label="label" name="name" />)
      const input = wrapper.getByTestId('textarea-input')
      initialId = input.id
      return userEvent.type(input, 'some text')
    })

    it('does not generate a new `id`', () => {
      expect(wrapper.getByTestId('textarea-input')).toHaveAttribute(
        'id',
        initialId
      )
    })
  })
})
