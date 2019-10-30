import '@testing-library/jest-dom/extend-expect'
import React, { FormEvent } from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { ButtonGroup, ButtonGroupProps } from './index'

describe('ButtonGroup', () => {
  let wrapper: RenderResult
  let oneClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let twoClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let threeClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let props: ButtonGroupProps

  beforeEach(() => {
    oneClickSpy = jest.fn()
    twoClickSpy = jest.fn()
    threeClickSpy = jest.fn()
  })

  describe('default props', () => {
    beforeEach(() => {
      const items = [
        {
          label: 'One',
          onClick: oneClickSpy,
        },
        {
          label: 'Two',
          onClick: twoClickSpy,
        },
        {
          disabled: true,
          label: 'Three',
          onClick: threeClickSpy,
        },
      ]

      props = {
        items,
      }

      wrapper = render(<ButtonGroup {...props} />)
    })

    it('should render a button group wrapper', () => {
      expect(wrapper.getByTestId('rn-buttongroup')).toBeInTheDocument()
    })

    it('should render 3 buttons', () => {
      expect(wrapper.getAllByTestId('rn-button')).toHaveLength(3)
    })

    it('should style the buttons as secondary buttons', () => {
      const buttons = wrapper.getAllByTestId('rn-button')
      buttons.forEach(button => expect(button).toHaveClass('rn-btn--secondary'))
    })

    it('should set the default size', () => {
      const buttons = wrapper.getAllByTestId('rn-button')
      buttons.forEach(button => expect(button).toHaveClass('rn-btn--regular'))
    })

    it('should default the type to "button"', () => {
      const buttons = wrapper.getAllByTestId('rn-button')
      buttons.forEach(button =>
        expect(button).toHaveAttribute('type', 'button')
      )
    })

    describe('when a button is clicked', () => {
      let buttons

      beforeEach(() => {
        buttons = wrapper.getAllByTestId('rn-button')

        fireEvent(
          buttons[1],
          new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
          })
        )
      })

      it('should notify which button was clicked', () => {
        expect(oneClickSpy).not.toHaveBeenCalled()
        expect(twoClickSpy).toHaveBeenCalledTimes(1)
        expect(threeClickSpy).not.toHaveBeenCalled()
      })
    })
  })

  describe('provide custom className', () => {
    beforeEach(() => {
      const items = [
        {
          label: 'One',
          onClick: oneClickSpy,
        },
        {
          label: 'Two',
          onClick: twoClickSpy,
        },
        {
          disabled: true,
          label: 'Three',
          onClick: threeClickSpy,
        },
      ]

      props = {
        className: 'Scooby',
        items,
      }

      wrapper = render(<ButtonGroup {...props} />)
    })

    it('should render a button group wrapper', () => {
      expect(wrapper.getByTestId('rn-buttongroup')).toHaveClass('Scooby')
    })
  })

  describe('when the size is specified', () => {
    it.each`
      size         | expected
      ${'small'}   | ${'rn-btn--small'}
      ${'regular'} | ${'rn-btn--regular'}
      ${'large'}   | ${'rn-btn--large'}
      ${'xlarge'}  | ${'rn-btn--xlarge'}
    `('styles the button when the size is $size', ({ size, expected }) => {
      const items = [
        {
          label: 'One',
          onClick: oneClickSpy,
        },
        {
          label: 'Two',
          onClick: twoClickSpy,
        },
        {
          disabled: true,
          label: 'Three',
          onClick: threeClickSpy,
        },
      ]

      props = {
        items,
        size,
      }

      wrapper = render(<ButtonGroup {...props} />)

      const buttons = wrapper.getAllByTestId('rn-button')
      buttons.forEach(button => expect(button).toHaveClass(expected))
    })
  })
})
