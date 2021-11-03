import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'
import { selectors } from '@defencedigital/design-tokens'

import { SwitchE, SwitchEOption } from '.'

const { color } = selectors

describe('SwitchE', () => {
  let wrapper: RenderResult
  let onChangeSpy: (event: React.FormEvent<HTMLInputElement>) => void

  describe('when all props are specified', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      wrapper = render(
        <SwitchE
          className="custom-class"
          data-arbitrary="arbitrary"
          label="Switch label"
          name="switch-name"
          onChange={onChangeSpy}
          value="3"
        >
          <SwitchEOption label="Option 1" value="1" />
          <SwitchEOption label="Option 2" value="2" />
          <SwitchEOption label="Option 3" value="3" />
        </SwitchE>
      )
    })

    it('should spread arbitrary props', () => {
      expect(wrapper.getByTestId('switch')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })

    it('should drill the custom CSS class', () => {
      expect(wrapper.getByTestId('switch').classList).toContain('custom-class')
    })

    it('should render the label', () => {
      expect(wrapper.getByText('Switch label')).toBeInTheDocument()
    })

    it('should set the name', () => {
      const switchInputs = wrapper.getAllByTestId('switch-input')
      expect(switchInputs[0].getAttribute('name')).toEqual('switch-name')
      expect(switchInputs[1].getAttribute('name')).toEqual('switch-name')
      expect(switchInputs[2].getAttribute('name')).toEqual('switch-name')
    })

    it('should render 3 options', () => {
      expect(wrapper.getByText('Option 1')).toBeInTheDocument()
      expect(wrapper.getByText('Option 2')).toBeInTheDocument()
      expect(wrapper.getByText('Option 3')).toBeInTheDocument()
      expect(wrapper.getAllByTestId('switch-input')).toHaveLength(3)
    })

    it('should set the value', () => {
      expect(wrapper.getByText('Option 3')).toHaveStyleRule(
        'background-color',
        color('action', '600')
      )
    })

    describe('when the selected option is changed', () => {
      beforeEach(() => {
        wrapper.getByText('Option 1').click()
      })

      it('should set the value', () => {
        expect(wrapper.getByText('Option 1')).toHaveStyleRule(
          'background-color',
          color('action', '600')
        )
      })

      it('should call the onClick callback', () => {
        expect(onChangeSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when minimal props are specified', () => {
    beforeEach(() => {
      wrapper = render(
        <SwitchE name="switch-name">
          <SwitchEOption label="Option 1" value="1" />
          <SwitchEOption label="Option 2" value="2" />
          <SwitchEOption label="Option 3" value="3" />
        </SwitchE>
      )
    })

    it('should not render the label', () => {
      expect(wrapper.queryAllByTestId('switch-legend')).toHaveLength(0)
    })
  })

  describe('when the component is disabled', () => {
    beforeEach(() => {
      onChangeSpy = jest.fn()

      wrapper = render(
        <SwitchE name="switch-name" isDisabled onChange={onChangeSpy}>
          <SwitchEOption label="Option 1" value="1" />
          <SwitchEOption label="Option 2" value="2" />
          <SwitchEOption label="Option 3" value="3" />
        </SwitchE>
      )
    })

    it('should not invoke the onChange handler when an option is clicked', () => {
      wrapper.queryByText('Option 1').click()
      expect(onChangeSpy).not.toHaveBeenCalled()
    })
  })

  describe('when the component has a falsey child', () => {
    beforeEach(() => {
      const showThird = false

      wrapper = render(
        <SwitchE name="switch-name">
          <SwitchEOption label="Option 1" value="1" />
          <SwitchEOption label="Option 2" value="2" />
          {showThird && <SwitchEOption label="Option 3" value="3" />}
        </SwitchE>
      )
    })

    it('should not render the third option', () => {
      expect(wrapper.queryByText('Option 3')).not.toBeInTheDocument()
    })
  })
})
