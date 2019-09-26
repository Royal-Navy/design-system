import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { calculateNewValue, NumberInput, NumberInputProps } from './NumberInput'

describe('NumberInput', () => {
  let props: NumberInputProps
  let wrapper: RenderResult

  beforeEach(() => {
    props = {
      name: 'balloons',
      onChange: jest.fn(),
      onBlur: jest.fn(),
    }

    wrapper = undefined
  })

  describe('When the field has a label', () => {
    beforeEach(() => {
      props.label = 'Balloons'
    })

    describe('and the field has a value', () => {
      beforeEach(() => {
        props.value = 1
        wrapper = render(<NumberInput {...props} />)
      })

      it('should render a field with a label', () => {
        expect(wrapper.getByTestId('number-input-label')).toHaveTextContent(
          'Balloons'
        )
      })

      it('should indicate that the field has content so the label is shrunk', () => {
        expect(wrapper.queryByTestId('number-input-container')).toHaveClass(
          'has-content'
        )
      })

      it('should populate the field value', () => {
        expect(wrapper.queryByTestId('number-input-input')).toHaveAttribute(
          'value',
          '1'
        )
      })
    })

    describe('and the field has no value', () => {
      beforeEach(() => {
        wrapper = render(<NumberInput {...props} />)
      })

      it('should render a field with a label', () => {
        expect(wrapper.getByTestId('number-input-label')).toHaveTextContent(
          'Balloons'
        )
      })

      it('should indicate that the field has no content so the label is not', () => {
        expect(wrapper.queryByTestId('number-input-container')).not.toHaveClass(
          'has-content'
        )
      })

      it('should render a field with an empty value', () => {
        expect(wrapper.queryByTestId('number-input-input')).toHaveAttribute(
          'value',
          ''
        )
      })

      describe('When the user focuses on the field', () => {
        beforeEach(() => {
          const input = wrapper.getByTestId('number-input-input')
          input.focus()
        })

        it('should indicate that the field has content so the label is shrunk', () => {
          expect(wrapper.queryByTestId('number-input-container')).toHaveClass(
            'has-focus'
          )
        })
      })
    })

    describe('and the field value is 0', () => {
      beforeEach(() => {
        props.value = 0
        wrapper = render(<NumberInput {...props} />)
      })

      it('should populate the field value', () => {
        expect(wrapper.queryByTestId('number-input-input')).toHaveAttribute(
          'value',
          '0'
        )
      })
    })

    describe('when an id is provided', () => {
      beforeEach(() => {
        props.id = 'myid'
        wrapper = render(<NumberInput {...props} />)
      })

      it('should attach the id to the field', () => {
        expect(wrapper.queryByTestId('number-input-input')).toHaveAttribute(
          'id',
          'myid'
        )
      })

      it('should associate the label to the field with the custom id', () => {
        expect(wrapper.queryByTestId('number-input-label')).toHaveAttribute(
          'for',
          'myid'
        )
      })
    })
  })

  describe('When the field has no label', () => {
    beforeEach(() => {
      wrapper = render(<NumberInput {...props} />)
    })

    it('should not render a field with a label', () => {
      expect(wrapper.queryByTestId('number-input-label')).toBeNull()
    })
  })

  describe('when the user selects the increase value option', () => {
    describe('and no maximum value has been set', () => {
      beforeEach(() => {
        props.value = 1
        wrapper = render(<NumberInput {...props} />)
        const button = wrapper.getByTestId('number-input-increase')
        button.click()
      })

      it('should notify the parent the value has increased', () => {
        expect(props.onChange).toHaveBeenCalledWith({
          target: {
            name: 'balloons',
            value: 2,
          },
        })
      })
    })

    describe('and a maximum value bas been defined', () => {
      beforeEach(() => {
        props.max = 10
      })

      describe('and increasing the value would take it over the maximum', () => {
        beforeEach(() => {
          props.value = 10
          wrapper = render(<NumberInput {...props} />)
          const button = wrapper.getByTestId('number-input-increase')
          button.click()
        })

        it('should not notify the parent the value has increased', () => {
          expect(props.onChange).not.toHaveBeenCalled()
        })
      })

      describe('and increasing the value would not take it over the maximum', () => {
        beforeEach(() => {
          props.value = 1
          wrapper = render(<NumberInput {...props} />)
          const button = wrapper.getByTestId('number-input-increase')
          button.click()
        })

        it('should not notify the parent the value has increased', () => {
          expect(props.onChange).toHaveBeenCalledWith({
            target: {
              name: 'balloons',
              value: 2,
            },
          })
        })
      })
    })

    describe('and the step is provided', () => {
      beforeEach(() => {
        props.value = 5
        props.step = 5
        wrapper = render(<NumberInput {...props} />)
        const button = wrapper.getByTestId('number-input-increase')
        button.click()
      })

      it('should notify the parent the value has increased', () => {
        expect(props.onChange).toHaveBeenCalledWith({
          target: {
            name: 'balloons',
            value: 10,
          },
        })
      })
    })
  })

  describe('when the user selects the decrease value option', () => {
    describe('and no minimum value has been set', () => {
      beforeEach(() => {
        props.value = 1
        wrapper = render(<NumberInput {...props} />)
        const button = wrapper.getByTestId('number-input-decrease')
        button.click()
      })

      it('should notify the parent the value has decreased', () => {
        expect(props.onChange).toHaveBeenCalledWith({
          target: {
            name: 'balloons',
            value: 0,
          },
        })
      })
    })

    describe('and a minimum value bas been defined', () => {
      beforeEach(() => {
        props.min = 1
      })

      describe('and decreasing the value would take it under the minimum', () => {
        beforeEach(() => {
          props.value = 1
          wrapper = render(<NumberInput {...props} />)
          const button = wrapper.getByTestId('number-input-decrease')
          button.click()
        })

        it('should not notify the parent the value has decreased', () => {
          expect(props.onChange).not.toHaveBeenCalled()
        })
      })

      describe('and decreasing the value would not take it below the minimum', () => {
        beforeEach(() => {
          props.value = 10
          props.min = 3
          wrapper = render(<NumberInput {...props} />)
          const button = wrapper.getByTestId('number-input-decrease')
          button.click()
        })

        it('should not notify the parent the value has increased', () => {
          expect(props.onChange).toHaveBeenCalledWith({
            target: {
              name: 'balloons',
              value: 9,
            },
          })
        })
      })
    })

    describe('and the step is provided', () => {
      beforeEach(() => {
        props.value = 10
        props.step = 5
        wrapper = render(<NumberInput {...props} />)
        const button = wrapper.getByTestId('number-input-decrease')
        button.click()
      })

      it('should notify the parent the value has increased', () => {
        expect(props.onChange).toHaveBeenCalledWith({
          target: {
            name: 'balloons',
            value: 5,
          },
        })
      })
    })
  })

  describe('when an additional class it provided', () => {
    beforeEach(() => {
      props.className = 'test-class'
      wrapper = render(<NumberInput {...props} />)
    })

    it('should attach the class to the wrapper', () => {
      expect(wrapper.queryByTestId('number-input-container')).toHaveClass(
        'test-class'
      )
    })
  })

  describe('calculate new value based on direct input', () => {
    let currentValue: number | undefined
    let newInputValue: string | undefined
    let newValue: number | undefined
    let max: number | undefined
    let min: number | undefined

    beforeEach(() => {
      currentValue = undefined
      max = undefined
      min = undefined
      newInputValue = undefined
      newValue = undefined
    })

    describe('when there is an existing value', () => {
      beforeEach(() => {
        currentValue = 1
      })

      describe('and the user clears the field', () => {
        beforeEach(() => {
          newInputValue = ''
          newValue = calculateNewValue({
            currentValue,
            max,
            min,
            newInputValue,
          })
        })

        it('indicate the field value is empty', () => {
          expect(newValue).toEqual(null)
        })
      })

      describe('and the user enters a non-numeric character', () => {
        beforeEach(() => {
          newInputValue = 'a'
          newValue = calculateNewValue({
            currentValue,
            max,
            min,
            newInputValue,
          })
        })

        it('should indicate the value should not be changed', () => {
          expect(newValue).toEqual(1)
        })
      })

      describe('and the user enters a new number', () => {
        beforeEach(() => {
          newInputValue = '12'
          newValue = calculateNewValue({
            currentValue,
            max,
            min,
            newInputValue,
          })
        })

        it('should indicate there is a new value', () => {
          expect(newValue).toEqual(12)
        })
      })

      describe('when there is a maximum number specified', () => {
        beforeEach(() => {
          currentValue = 10
          max = 99
        })

        describe('and the user enters a valid value', () => {
          beforeEach(() => {
            newInputValue = '11'
            newValue = calculateNewValue({
              currentValue,
              max,
              min,
              newInputValue,
            })
          })

          it('should indicate the value should change', () => {
            expect(newValue).toEqual(11)
          })
        })

        describe('and the user enters a number bigger than the maximum', () => {
          beforeEach(() => {
            newInputValue = '100'
            newValue = calculateNewValue({
              currentValue,
              max,
              min,
              newInputValue,
            })
          })

          it('should indicate the value should not change', () => {
            expect(newValue).toEqual(10)
          })
        })
      })

      describe('when there is a minimum number specified', () => {
        beforeEach(() => {
          currentValue = 10
          min = 5
        })

        describe('and the user enters a valid value', () => {
          beforeEach(() => {
            newInputValue = '11'
            newValue = calculateNewValue({
              currentValue,
              max,
              min,
              newInputValue,
            })
          })

          it('should indicate the value should change', () => {
            expect(newValue).toEqual(11)
          })
        })

        describe('and the user enters a number smaller than the minimum', () => {
          beforeEach(() => {
            newInputValue = '1'
            newValue = calculateNewValue({
              currentValue,
              max,
              min,
              newInputValue,
            })
          })

          it('should indicate the value should not change', () => {
            expect(newValue).toEqual(10)
          })
        })
      })
    })

    describe('when there is no existing value', () => {
      beforeEach(() => {
        currentValue = null
      })

      describe('and the user enters a non-numeric character', () => {
        beforeEach(() => {
          newInputValue = 'a'
          newValue = calculateNewValue({
            currentValue,
            max,
            min,
            newInputValue,
          })
        })

        it('should indicate that the value should not be changed', () => {
          expect(newValue).toEqual(null)
        })
      })

      describe('and the user enters a new number', () => {
        beforeEach(() => {
          newInputValue = '3'

          newValue = calculateNewValue({
            currentValue,
            max,
            min,
            newInputValue,
          })
        })

        it('should indicate there is a new value', () => {
          expect(newValue).toEqual(3)
        })
      })
    })
  })
})
