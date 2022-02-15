import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

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
            className="custom-class"
            data-arbitrary="arbitrary"
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

    it('should apply the `$hasContent` style rule to label', () => {
      expect(wrapper.getByTestId('text-input-label')).toHaveStyleRule(
        'transform',
        'translate(0.75rem,0.75rem) scale(1)'
      )
    })

    it('should not apply the `$noLabel` style rule to the input', () => {
      expect(wrapper.getByTestId('text-input-input')).not.toHaveStyleRule(
        'padding',
        '0.75rem'
      )
    })

    it('should set the custom class', () => {
      expect(wrapper.getByTestId('text-input-container').classList).toContain(
        'custom-class'
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
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
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'id',
        'id'
      )
    })

    it('should set the name', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'name',
        'name'
      )
    })

    it('should set the placeholder', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'placeholder',
        'placeholder'
      )
    })

    it('should set the type', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'type',
        'text'
      )
    })

    it('should set the value', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'value',
        'value'
      )
    })

    it('should render the end adornment', () => {
      expect(wrapper.getByText('end')).toBeInTheDocument()
    })

    it('should render the footnote', () => {
      expect(wrapper.getByText('footnote')).toBeInTheDocument()
    })

    describe('and focusing on the input', () => {
      beforeEach(() => {
        wrapper.getByTestId('text-input-input').focus()
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
          wrapper.getByTestId('text-input-input'),
          '{backspace}'
        )
      })

      it('should update the value', () => {
        expect(wrapper.getByTestId('text-input-input')).toHaveValue('valu')
      })
    })

    describe('when the value is deleted', () => {
      beforeEach(async () => {
        await userEvent.type(
          wrapper.getByTestId('text-input-input'),
          '{backspace}{backspace}{backspace}{backspace}{backspace}'
        )
      })

      it('should remove the `$hasContent` style rule from label', () => {
        expect(wrapper.getByTestId('text-input-label')).toHaveStyleRule(
          'transform',
          'translate(0.75rem,0.75rem) scale(1)'
        )
      })

      it('should update the value', () => {
        expect(wrapper.getByTestId('text-input-input')).toHaveValue('')
      })
    })
  })

  describe('minimal props', () => {
    beforeEach(() => {
      wrapper = render(<TextInput name="name" />)
    })

    it('should have the no-label class', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveStyleRule(
        'padding',
        '1.25rem 0.75rem 0.25rem'
      )
    })
  })

  describe('disabled', () => {
    beforeEach(() => {
      wrapper = render(<TextInput name="name" isDisabled />)
    })

    it('should correctly apply the `disabled` attribute to the input element', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'disabled',
        ''
      )
    })
  })

  describe('type', () => {
    beforeEach(() => {
      wrapper = render(<TextInput name="name" type="password" />)
    })

    it('should correctly apply the custom `type` attribute to the input element', () => {
      expect(wrapper.getByTestId('text-input-input')).toHaveAttribute(
        'type',
        'password'
      )
    })
  })
})
