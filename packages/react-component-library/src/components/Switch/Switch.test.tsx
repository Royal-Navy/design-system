import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'

import { OptionType } from '../../types/Switch'

import Switch from './Switch'

describe('Switch', () => {
  let name: string
  let value: string
  let label: string
  let className: string
  let onChange: (event: any) => void
  let options: OptionType[]
  let size: string
  let component: RenderResult

  describe('when the component is provided onChange callback and options', () => {
    beforeEach(() => {
      name = 'example-switch-field'
      value = '3'
      onChange = jest.fn()
      options = [
        { label: 'Day', value: '1' },
        { label: 'Week', value: '2' },
        { label: 'Month', value: '3' },
        { label: 'Year', value: '4' },
      ]
    })

    it('renders without the legend', () => {
      component = render(
        <Switch
          name={name}
          value={value}
          onChange={onChange}
          options={options}
        />
      )

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
                name={name}
                value={value}
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
              expect(onChange).toHaveBeenCalled()
            })
          })
        })
      })
    })
  })
})

