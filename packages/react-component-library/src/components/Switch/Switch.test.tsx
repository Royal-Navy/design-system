import 'jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'

import { OptionType } from '../../types/Switch'

import ResponsiveSwitch from './index'
import Switch from './Switch'

describe('Switch', () => {
  let label: string
  let className: string
  let onChange: (previous: OptionType, active: OptionType) => void
  let options: OptionType[]
  let size: string
  let component: RenderResult

  describe('when the component is provided onChange callback and options', () => {
    beforeEach(() => {
      onChange = jest.fn()
      options = [
        { name: 'Day', value: '1' },
        { name: 'Week', value: '2' },
        { name: 'Month', value: '3' },
        { name: 'Year', value: '4' },
      ]
    })

    it('renders without the legend', () => {
      component = render(<Switch onChange={onChange} options={options} />)

      expect(component.queryByTestId('legend')).toBeNull()
    })

    describe('and has a label', () => {
      beforeEach(() => {
        label = 'Date Range'
      })

      describe('and has a size', () => {
        beforeEach(() => {
          size = 'small'
        })

        describe('and has a customClass', () => {
          beforeEach(() => {
            className = 'test-class'

            component = render(
              <Switch
                label={label}
                onChange={onChange}
                options={options}
                size={size}
                className={className}
              />
            )
          })

          it('renders with the legend', () => {
            expect(component.getByTestId('legend')).toHaveTextContent(label)
          })

          it('renders correct number of options', () => {
            expect(component.queryAllByTestId('option').length).toEqual(4)
          })

          it('outputs the correct size modifier class', () => {
            expect(component.getByTestId('wrapper')).toHaveClass(
              `rn-switch--${size}`
            )
          })

          it('outputs the customClass', () => {
            expect(component.getByTestId('wrapper')).toHaveClass(className)
          })

          describe('and the user clicks an option', () => {
            beforeEach(() => {
              fireEvent(
                component.getAllByTestId('option')[0],
                new MouseEvent('click', {
                  bubbles: true,
                  cancelable: true,
                })
              )
            })

            it('invokes the onChange callback with correct arguments', () => {
              expect(onChange).toHaveBeenCalledWith(undefined, options[0])
            })
          })
        })
      })
    })
  })
})

describe('ResponsiveSwitch', () => {
  //
})
