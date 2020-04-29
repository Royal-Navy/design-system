import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Context as ReactResponsiveContext } from 'react-responsive'
import { render, RenderResult } from '@testing-library/react'

import { ResponsiveSwitch, Switch } from '.'

describe('Switch', () => {
  let wrapper: RenderResult

  describe('when the device is desktop', () => {
    beforeEach(() => {
      wrapper = render(
        <ReactResponsiveContext.Provider value={{ deviceWidth: 768 }}>
          <ResponsiveSwitch
            name="switch-name"
            options={[
              { label: 'Day', value: '1' },
              { label: 'Week', value: '2' },
              { label: 'Month', value: '3' },
              { label: 'Year', value: '4' },
            ]}
          />
        </ReactResponsiveContext.Provider>
      )
    })

    it('should render with the `is-desktop` class', () => {
      expect(wrapper.getByTestId('responsive-switch').classList).toContain(
        'is-desktop'
      )
      expect(wrapper.getByTestId('responsive-switch').classList).not.toContain(
        'is-mobile'
      )
    })

    it('should render the switch component', () => {
      expect(wrapper.getByTestId('switch-wrapper')).toBeInTheDocument()
      expect(wrapper.getAllByTestId('switch-input')).toHaveLength(4)
    })
  })

  describe('when the device is mobile', () => {
    beforeEach(() => {
      wrapper = render(
        <ReactResponsiveContext.Provider value={{ deviceWidth: 767 }}>
          <ResponsiveSwitch
            name="switch-name"
            options={[
              { label: 'Day', value: '1' },
              { label: 'Week', value: '2' },
              { label: 'Month', value: '3' },
              { label: 'Year', value: '4' },
            ]}
          />
        </ReactResponsiveContext.Provider>
      )
    })

    it('should render with the `is-mobile` class', () => {
      expect(wrapper.getByTestId('responsive-switch').classList).not.toContain(
        'is-desktop'
      )
      expect(wrapper.getByTestId('responsive-switch').classList).toContain(
        'is-mobile'
      )
    })

    it('should render the select component', () => {
      const select = wrapper.container.children[0].children[0]
      expect(select.classList).toContain('rn-select')
    })
  })
})
