import React, { FormEvent } from 'react'

import { IconBrightnessLow } from '@royalnavy/icon-library'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from './index'

describe('Button', () => {
  let onClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let button: HTMLElement

  beforeEach(() => {
    onClickSpy = jest.fn()
  })

  describe('default props', () => {
    beforeEach(() => {
      render(<Button onClick={onClickSpy}>Click me</Button>)
      button = screen.getByLabelText('Click me')
    })

    it('should default the type to "button"', () => {
      expect(button).toHaveAttribute('type', 'button')
    })

    it('should not render an icon', () => {
      expect(screen.queryByTestId('button-icon')).toBeNull()
    })

    describe('when the button is clicked', () => {
      beforeEach(async () => {
        await userEvent.click(button)
      })

      it('should handle the click event', () => {
        expect(onClickSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when the onClick callback has not been specified', () => {
    beforeEach(() => {
      render(<Button>Click me</Button>)
      button = screen.getByLabelText('Click me')
    })

    it('does not throw an error when the button is clicked', () => {
      expect(() => userEvent.click(button)).not.toThrow()
    })
  })

  describe('when the type is specified', () => {
    it.each`
      type        | expected
      ${'button'} | ${'button'}
      ${'submit'} | ${'submit'}
    `('should set the type attribute to $type', ({ type, expected }) => {
      render(
        <Button onClick={onClickSpy} type={type}>
          Click me
        </Button>
      )
      button = screen.getByLabelText('Click me')

      expect(button).toHaveAttribute('type', expected)
    })
  })

  describe('when an icon is specified', () => {
    beforeEach(() => {
      render(<Button icon={<IconBrightnessLow />}>Click me</Button>)
    })

    it('should render an icon', () => {
      expect(screen.getByTestId('button-icon')).toBeInTheDocument()
    })

    it('should render the icon with an `aria-hidden` attribute', () => {
      expect(screen.queryByTestId('button-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })
  })

  describe('when the button is loading', () => {
    beforeEach(() => {
      render(
        <Button icon={<IconBrightnessLow />} isLoading>
          Click me
        </Button>
      )
    })

    it('disables the button', () => {
      expect(screen.getByTestId('button')).toBeDisabled()
    })

    it('hides the user-provided icon', () => {
      expect(screen.getByTestId('button-icon')).toHaveStyleRule(
        'visibility',
        'hidden'
      )
    })

    it('hides the button text', () => {
      expect(screen.getByTestId('button-icon')).toHaveStyleRule(
        'visibility',
        'hidden'
      )
    })

    it('shows a loading icon with the `aria-hidden` attribute', () => {
      expect(screen.getByTestId('loading-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })
  })

  describe('when the button is loading with text', () => {
    beforeEach(() => {
      render(
        <Button icon={<IconBrightnessLow />} isLoading showLoadingText>
          Click me
        </Button>
      )
    })

    it('disables the button', () => {
      expect(screen.getByTestId('button')).toBeDisabled()
    })

    it('hides the user-provided icon', () => {
      expect(screen.getByTestId('button-icon')).toHaveStyleRule(
        'visibility',
        'hidden'
      )
    })

    it('shows the button text', () => {
      expect(screen.getByText('Click me')).toBeInTheDocument()
    })

    it('shows a loading icon with the `aria-hidden` attribute', () => {
      expect(screen.getByTestId('loading-icon')).toHaveAttribute(
        'aria-hidden',
        'true'
      )
    })
  })
})
