import '@testing-library/jest-dom/extend-expect'
import React, { FormEvent } from 'react'
import { render, RenderResult, fireEvent } from '@testing-library/react'

import { ButtonGroup, ButtonGroupItem } from './index'
import { BUTTON_SIZE } from '..'

describe('ButtonGroup', () => {
  let wrapper: RenderResult
  let oneClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let twoClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let threeClickSpy: (event: FormEvent<HTMLButtonElement>) => void
  let consoleWarnSpy: jest.SpyInstance

  beforeEach(() => {
    oneClickSpy = jest.fn()
    twoClickSpy = jest.fn()
    threeClickSpy = jest.fn()
    consoleWarnSpy = jest.spyOn(global.console, 'warn')
  })

  describe('default props', () => {
    beforeEach(() => {
      wrapper = render(
        <ButtonGroup>
          <ButtonGroupItem onClick={oneClickSpy}>One</ButtonGroupItem>
          <ButtonGroupItem onClick={twoClickSpy}>Two</ButtonGroupItem>
          <ButtonGroupItem onClick={threeClickSpy} isDisabled>
            Three
          </ButtonGroupItem>
        </ButtonGroup>
      )
    })

    it('should not warn the consumer about specifying sizes for each item', () => {
      expect(consoleWarnSpy).not.toHaveBeenCalled()
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
      wrapper = render(
        <ButtonGroup className="Scooby">
          <ButtonGroupItem onClick={oneClickSpy}>One</ButtonGroupItem>
          <ButtonGroupItem onClick={twoClickSpy}>Two</ButtonGroupItem>
          <ButtonGroupItem onClick={threeClickSpy} isDisabled>
            Three
          </ButtonGroupItem>
        </ButtonGroup>
      )
    })

    it('should render a button group wrapper', () => {
      expect(wrapper.getByTestId('rn-buttongroup')).toHaveClass('Scooby')
    })
  })

  describe('when a different size is provided for each item', () => {
    beforeEach(() => {
      wrapper = render(
        <ButtonGroup size={BUTTON_SIZE.REGULAR}>
          <ButtonGroupItem onClick={oneClickSpy} size={BUTTON_SIZE.SMALL}>
            One
          </ButtonGroupItem>
          <ButtonGroupItem onClick={twoClickSpy} size={BUTTON_SIZE.REGULAR}>
            Two
          </ButtonGroupItem>
          <ButtonGroupItem onClick={threeClickSpy} isDisabled size={BUTTON_SIZE.LARGE}>
            Three
          </ButtonGroupItem>
        </ButtonGroup>
      )
    })

    it('should warn the consumer about specifying sizes for each item', () => {
      expect(consoleWarnSpy).toHaveBeenCalledTimes(3)
      expect(consoleWarnSpy).toHaveBeenCalledWith(
        'Prop `size` on `ButtonGroupItem` will be replaced by `size` from `ButtonGroup`'
      )
    })

    it('should set the button size to the same as the size specified by the parent', () => {
      const buttons = wrapper.getAllByTestId('rn-button')
      buttons.forEach(button => expect(button).toHaveClass('rn-btn--regular'))
    })
  })
})
