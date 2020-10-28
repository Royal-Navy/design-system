import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button, NumberInput } from '../..'
import { UNIT_POSITION } from './constants'

describe('NumberInput', () => {
  let wrapper: RenderResult
  let onChangeSpy: (event: any) => void

  function assertInputValue(expectedValue: string, expectedUnit?: string) {
    it('should set the input value', () => {
      expect(wrapper.getByTestId('number-input-input')).toHaveValue(
        expectedValue
      )
    })

    if (expectedUnit) {
      it('should display the unit', () => {
        expect(wrapper.getByTestId('number-input-unit')).toHaveTextContent(
          expectedUnit
        )
      })
    } else {
      it('should not show the unit', () => {
        expect(wrapper.queryAllByTestId('number-input-unit')).toHaveLength(0)
      })
    }
  }

  function assertAriaValueAttributes({
    min,
    max,
    now,
    text,
  }: {
    min?: number
    max?: number
    now: number
    text: string
  }) {
    it('should set the `aria-value*` attribute', () => {
      const container = wrapper.getByTestId(
        'number-input-container'
      ) as HTMLDivElement

      if (min) {
        expect(container).toHaveAttribute('aria-valuemin', min.toString())
      } else {
        expect(container).not.toHaveAttribute('aria-valuemin')
      }

      if (max) {
        expect(container).toHaveAttribute('aria-valuemax', max.toString())
      } else {
        expect(container).not.toHaveAttribute('aria-valuemax')
      }

      expect(container).toHaveAttribute('aria-valuenow', now.toString())
      expect(container).toHaveAttribute('aria-valuetext', text)
    })
  }

  function assertOnChangeCall(expected: number, expectedNumberOfTimes = 1) {
    it('should call the onChange callback with the new value', () => {
      expect(onChangeSpy).toHaveBeenCalledTimes(expectedNumberOfTimes)
      expect(onChangeSpy).toHaveBeenCalledWith({
        target: {
          name: 'number-input',
          value: expected,
        },
      })
    })
  }

  beforeEach(() => {
    onChangeSpy = jest.fn()
  })

  describe('when minimal props', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput name="number-input" onChange={onChangeSpy} />
      )
    })

    it('should set the default `aria-label` attribute', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
        'aria-label',
        'Number input'
      )
    })

    it('should apply the `aria-label` attribute to buttons', () => {
      expect(wrapper.getByTestId('number-input-decrease')).toHaveAttribute(
        'aria-label',
        'Decrease the input value'
      )

      expect(wrapper.getByTestId('number-input-increase')).toHaveAttribute(
        'aria-label',
        'Increase the input value'
      )
    })

    it('should apply the correct `role` attribute', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
        'role',
        'spinbutton'
      )
    })

    assertAriaValueAttributes({ min: null, max: null, now: 0, text: '0' })

    it('should not display a start adornment', () => {
      expect(
        wrapper.queryAllByTestId('number-input-start-adornment')
      ).toHaveLength(0)
    })

    it('should not display a label', () => {
      expect(wrapper.queryAllByTestId('number-input-label')).toHaveLength(0)
    })

    assertInputValue('0')

    it('should set the `aria-labelledby` attribute', () => {
      const numberInputId = wrapper
        .getByTestId('number-input-container')
        .getAttribute('id')

      expect(
        wrapper
          .getByTestId('number-input-input')
          .getAttribute('aria-labelledby')
      ).toEqual(numberInputId)
    })

    it('should set the name attribute', () => {
      expect(
        wrapper.getByTestId('number-input-input').getAttribute('name')
      ).toEqual('number-input')
    })

    it('should not display a footnote', () => {
      expect(wrapper.queryAllByTestId('number-input-footnote')).toHaveLength(0)
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-increase').click()
      })

      assertInputValue('1')
      assertOnChangeCall(1)

      describe('and the decrease button is clicked', () => {
        beforeEach(() => {
          wrapper.getByTestId('number-input-decrease').click()
        })

        assertInputValue('0')
        assertOnChangeCall(0, 2)

        describe('and the decrease button is clicked', () => {
          beforeEach(() => {
            wrapper.getByTestId('number-input-decrease').click()
          })

          assertInputValue('-1')
          assertOnChangeCall(-1, 3)
        })
      })
    })

    describe('and the user types values', () => {
      beforeEach(async () => {
        const input = wrapper.getByTestId('number-input-input')

        await userEvent.type(input, '1')
        await userEvent.type(input, '2')
        await userEvent.type(input, '3')
      })

      assertInputValue('123')
      assertOnChangeCall(1, 3)
      assertOnChangeCall(12, 3)
      assertOnChangeCall(123, 3)
    })

    describe('and the user types a value', () => {
      beforeEach(async () => {
        const input = wrapper.getByTestId('number-input-input')

        await userEvent.type(input, '1')
      })

      assertInputValue('1')
      assertOnChangeCall(1, 1)

      describe('and the user deletes the value', () => {
        beforeEach(async () => {
          const input = wrapper.getByTestId('number-input-input')

          await userEvent.type(input, '{backspace}')
        })

        assertInputValue('')
        assertOnChangeCall(null, 2)

        describe('and the decrease button is clicked', () => {
          beforeEach(() => {
            wrapper.getByTestId('number-input-decrease').click()
          })

          assertInputValue('-1')
          assertOnChangeCall(-1, 3)
        })
      })
    })
  })

  describe('when there is a footnote', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          footnote="Footnote"
          name="number-input"
          onChange={onChangeSpy}
        />
      )
    })

    it('should display the footnote', () => {
      expect(wrapper.getByTestId('number-input-footnote').textContent).toEqual(
        'Footnote'
      )
    })
  })

  describe('when there is a label', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput label="Label" name="number-input" onChange={onChangeSpy} />
      )
    })

    it('should apple the `aria-label` attribute to the root element', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
        'aria-label',
        'Label'
      )
    })

    it('should display the footnote', () => {
      expect(wrapper.getByTestId('number-input-label').textContent).toEqual(
        'Label'
      )
    })
  })

  describe('when max and min are specified', () => {
    beforeEach(() => {
      wrapper = render(
        <>
          <NumberInput
            max={3}
            min={0}
            name="number-input"
            onChange={onChangeSpy}
          />
          <input type="text" data-testid="next-field" />
        </>
      )
    })

    it('should apply the correct `aria-valuemin` attribute', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
        'aria-valuemin',
        '0'
      )
    })

    it('should apply the correct `aria-valuemax` attribute', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
        'aria-valuemax',
        '3'
      )
    })

    describe('and the increase button is clicked four times', () => {
      beforeEach(() => {
        const increase = wrapper.getByTestId('number-input-increase')
        increase.click()
        increase.click()
        increase.click()
        increase.click()
      })

      assertInputValue('3')

      describe('and the decrease button is clicked four times', () => {
        beforeEach(() => {
          const decrease = wrapper.getByTestId('number-input-decrease')
          decrease.click()
          decrease.click()
          decrease.click()
          decrease.click()
        })

        assertInputValue('0')
      })
    })

    describe('and the increase button is clicked once', () => {
      beforeEach(() => {
        const increase = wrapper.getByTestId('number-input-increase')
        increase.click()

        wrapper.getByTestId('number-input-input').focus()
      })

      describe('and the user types an invalid character', () => {
        beforeEach(() => {
          fireEvent.change(wrapper.getByTestId('number-input-input'), {
            target: {
              value: 'a',
            },
          })
        })

        assertInputValue('1')
      })

      describe('and the user types a valid number', () => {
        beforeEach(() => {
          fireEvent.change(wrapper.getByTestId('number-input-input'), {
            target: {
              value: '3',
            },
          })
        })

        assertInputValue('3')
      })

      describe('and the user types an number outside the max min range', () => {
        beforeEach(() => {
          fireEvent.change(wrapper.getByTestId('number-input-input'), {
            target: {
              value: '4',
            },
          })
        })

        assertInputValue('1')

        describe('and the number input loses focus', () => {
          beforeEach(() => {
            wrapper.getByTestId('next-field').focus()
          })

          assertInputValue('1')
        })
      })
    })
  })

  describe('when the step is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput name="number-input" step={3} onChange={onChangeSpy} />
      )
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        const increase = wrapper.getByTestId('number-input-increase')
        increase.click()
      })

      assertInputValue('3')

      describe('and the decrease button is clicked', () => {
        beforeEach(() => {
          const decrease = wrapper.getByTestId('number-input-decrease')
          decrease.click()
        })

        assertInputValue('0')
      })
    })
  })

  describe('when the start adornment is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          name="number-input"
          startAdornment="Example"
          onChange={onChangeSpy}
        />
      )
    })

    it('should render the text', () => {
      expect(
        wrapper.getByTestId('number-input-start-adornment')
      ).toHaveTextContent('Example')
    })
  })

  describe('when a CSS class name is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          className="number-input__custom"
          name="number-input"
          onChange={onChangeSpy}
        />
      )
    })

    it('should add the CSS modifier', () => {
      expect(wrapper.getByTestId('number-input-container').classList).toContain(
        'number-input__custom'
      )
    })
  })

  describe('when an ID is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          id="number-input-id"
          label="Label"
          name="number-input"
          onChange={onChangeSpy}
        />
      )
    })

    it('should add the ID attribute', () => {
      expect(
        wrapper.getByTestId('number-input-input').getAttribute('id')
      ).toEqual('number-input-id')
    })

    it('should associate the label with the field', () => {
      expect(
        wrapper.getByTestId('number-input-label').getAttribute('for')
      ).toEqual('number-input-id')
    })
  })

  describe('when the onBlur callback is specified', () => {
    let onBlurSpy: (event: React.FormEvent) => void

    beforeEach(() => {
      onBlurSpy = jest.fn()

      wrapper = render(
        <>
          <NumberInput
            name="number-input"
            onBlur={onBlurSpy}
            onChange={onChangeSpy}
          />
          <input type="text" data-testid="next-field" />
        </>
      )
    })

    describe('and the number input loses focus', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-input').focus()
        wrapper.getByTestId('next-field').focus()
      })

      it('should call the onBlur callback', () => {
        expect(onBlurSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when there is a unit', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          name="number-input"
          onChange={onChangeSpy}
          value={1000}
          unit="m"
        />
      )
    })

    assertInputValue('1000', 'm')
    assertAriaValueAttributes({
      min: null,
      max: null,
      now: 1000,
      text: '1000 m',
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-increase').click()
      })

      assertInputValue('1001', 'm')
      assertAriaValueAttributes({
        min: null,
        max: null,
        now: 1001,
        text: '1001 m',
      })
      assertOnChangeCall(1001)
    })

    describe('and the decrease button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-decrease').click()
      })

      assertInputValue('999', 'm')
      assertAriaValueAttributes({
        min: null,
        max: null,
        now: 999,
        text: '999 m',
      })
      assertOnChangeCall(999)
    })
  })

  describe('when there is a unit before', () => {
    beforeEach(() => {
      wrapper = render(
        <NumberInput
          name="number-input"
          onChange={onChangeSpy}
          value={1000}
          unit="&pound;"
          unitPosition={UNIT_POSITION.BEFORE}
        />
      )
    })

    assertInputValue('1000', '£')
    assertAriaValueAttributes({
      min: null,
      max: null,
      now: 1000,
      text: '£ 1000',
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-increase').click()
      })

      assertInputValue('1001', '£')
      assertAriaValueAttributes({
        min: null,
        max: null,
        now: 1001,
        text: '£ 1001',
      })
      assertOnChangeCall(1001)
    })

    describe('and the decrease button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-decrease').click()
      })

      assertInputValue('999', '£')
      assertAriaValueAttributes({
        min: null,
        max: null,
        now: 999,
        text: '£ 999',
      })
      assertOnChangeCall(999)
    })

    describe('and the user focuses and then blurs the input', () => {
      beforeEach(() => {
        const input = wrapper.getByTestId(
          'number-input-input'
        ) as HTMLInputElement

        fireEvent.focus(input)
        fireEvent.blur(input)
      })

      assertInputValue('1000', '£')
      assertAriaValueAttributes({
        min: null,
        max: null,
        now: 1000,
        text: '£ 1000',
      })
      assertOnChangeCall(1000)
    })
  })

  describe('when an external element affects the value', () => {
    beforeEach(() => {
      function NumberInputWithUpdate() {
        const [value, setValue] = useState<number>(1)

        return (
          <>
            <Button onClick={() => setValue(1)}>Update</Button>
            <NumberInput
              name="number-input"
              onChange={onChangeSpy}
              value={value}
            />
          </>
        )
      }

      wrapper = render(<NumberInputWithUpdate />)
      wrapper.getByTestId('button').click()
    })

    it('should update the value in the field', async () => {
      await waitFor(() => {
        expect(wrapper.getByTestId('number-input-input')).toHaveValue('1')
      })
    })
  })

  describe('when there is a clear button', () => {
    describe('and the clear button is clicked', () => {
      beforeEach(() => {
        wrapper = render(
          <NumberInput
            canClear
            name="number-input"
            onChange={onChangeSpy}
            value={1000}
          />
        )

        wrapper.getByTestId('number-input-clear').click()
      })

      assertInputValue('')
    })
  })
})
