/* eslint-disable jest/no-conditional-expect */

import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  createEvent,
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { ColorAction500, ColorDanger800 } from '@defencedigital/design-tokens'
import { Button, COMPONENT_SIZE } from '../..'
import { NumberInput } from '.'

const defaultProps = {
  name: 'number-input',
  onChange: (
    _: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => true,
}

async function paste(element: HTMLElement, text: string) {
  element.focus()
  return userEvent.paste(text)
}

describe('NumberInput', () => {
  let wrapper: RenderResult
  let onChangeSpy: jest.SpyInstance

  function assertInputValue(expectedValue: string) {
    it('sets the input value', () => {
      expect(wrapper.getByTestId('number-input-input')).toHaveValue(
        expectedValue
      )
    })
  }

  function assertAriaValueAttributes({
    min,
    max,
    now,
    text,
  }: {
    min: number | null
    max: number | null
    now: number
    text: string
  }) {
    it('sets the `aria-value*` attribute', () => {
      const container = wrapper.getByTestId('number-input') as HTMLDivElement

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
      expect(container).toHaveAttribute('aria-valuetext', text.toString())
    })
  }

  function assertOnChangeCall(
    expected: number | null,
    expectedNumberOfTimes = 1
  ) {
    it(`calls the \`onChange\` callback ${expectedNumberOfTimes} times with the new value ${expected}`, () => {
      expect(onChangeSpy).toHaveBeenCalledTimes(expectedNumberOfTimes)
      expect(onChangeSpy.mock.calls[expectedNumberOfTimes - 1][1]).toEqual(
        expected
      )
    })
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('when minimal props', () => {
    let input: HTMLInputElement

    beforeEach(() => {
      onChangeSpy = jest.spyOn(defaultProps, 'onChange')

      wrapper = render(<NumberInput {...defaultProps} />)

      input = wrapper.getByTestId('number-input-input') as HTMLInputElement
    })

    it('sets the default `aria-label` attribute', () => {
      expect(wrapper.getByTestId('number-input')).toHaveAttribute(
        'aria-label',
        'Number input'
      )
    })

    it('applies the `aria-label` attribute to buttons', () => {
      expect(wrapper.getByTestId('number-input-decrease')).toHaveAttribute(
        'aria-label',
        'Decrease the input value'
      )

      expect(wrapper.getByTestId('number-input-increase')).toHaveAttribute(
        'aria-label',
        'Increase the input value'
      )
    })

    it('applies the correct `role` attribute', () => {
      expect(wrapper.getByTestId('number-input')).toHaveAttribute(
        'role',
        'spinbutton'
      )
    })

    assertAriaValueAttributes({ min: null, max: null, now: 0, text: 'Not set' })

    it('does not display a start adornment', () => {
      expect(
        wrapper.queryAllByTestId('number-input-start-adornment')
      ).toHaveLength(0)
    })

    it('does not display a label', () => {
      expect(wrapper.queryAllByTestId('number-input-label')).toHaveLength(0)
    })

    assertInputValue('')

    it('does not set the `aria-labelledby` attribute', () => {
      const numberInputId = wrapper
        .getByTestId('number-input')
        .getAttribute('id')

      expect(
        wrapper
          .getByTestId('number-input-input')
          .getAttribute('aria-labelledby')
      ).toEqual(numberInputId)
    })

    it('sets the name attribute', () => {
      expect(input.getAttribute('name')).toEqual('number-input')
    })

    it('does not display a footnote', () => {
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

    describe.each([
      { buttonType: 'increase', expectedValue: '1' },
      { buttonType: 'decrease', expectedValue: '-1' },
    ])(
      'and Enter is pressed with the $buttonType button focused',
      ({ buttonType, expectedValue }) => {
        let increase: HTMLElement

        beforeEach(() => {
          increase = wrapper.getByTestId(`number-input-${buttonType}`)
          increase.focus()
          return userEvent.keyboard('{Enter}')
        })

        assertInputValue(expectedValue)

        it(`does not blur the ${buttonType} button`, () => {
          expect(increase).toHaveFocus()
        })
      }
    )

    describe('and the user types values', () => {
      beforeEach(async () => {
        await userEvent.type(input, '1')
        await userEvent.type(input, '2')
        await userEvent.type(input, '3')
      })

      it('calls the `onChange` callback once with `1`', () => {
        expect(onChangeSpy.mock.calls[0][1]).toEqual(1)
      })

      it('calls the `onChange` callback once with `12`', () => {
        expect(onChangeSpy.mock.calls[1][1]).toEqual(12)
      })

      assertInputValue('123')
      assertOnChangeCall(123, 3)
    })

    describe('and the user types a value with invalid characters', () => {
      beforeEach(async () => {
        await userEvent.type(input, '1')
        await userEvent.type(input, 'a')
        await userEvent.type(input, '2')
      })

      it('calls the `onChange` callback with `1`', () => {
        expect(onChangeSpy.mock.calls[0][1]).toEqual(1)
      })

      it('calls the `onChange` callback again with `12`', () => {
        expect(onChangeSpy.mock.calls[1][1]).toEqual(12)
      })

      assertInputValue('12')
      assertOnChangeCall(12, 2)
    })

    describe('and the user types a value', () => {
      beforeEach(() => {
        return userEvent.type(input, '1')
      })

      assertInputValue('1')
      assertOnChangeCall(1, 1)

      describe('and the user deletes the value', () => {
        beforeEach(() => {
          return userEvent.type(input, '{backspace}')
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

    describe('and the user types a negative value', () => {
      beforeEach(() => {
        return userEvent.type(input, '-100')
      })

      assertInputValue('-100')
      assertOnChangeCall(-100, 4)
    })

    describe('and the user types only a minus sign', () => {
      beforeEach(() => {
        return userEvent.type(input, '-')
      })

      assertInputValue('-')
      assertOnChangeCall(NaN, 1)

      it('shows a focus border and not an error border', () => {
        expect(
          wrapper.getByTestId('number-input-outer-wrapper')
        ).toHaveStyleRule('box-shadow', expect.stringContaining(ColorAction500))
      })

      describe('and the input is blurred', () => {
        beforeEach(() => {
          input.blur()
        })

        it('shows an error border', () => {
          expect(
            wrapper.getByTestId('number-input-outer-wrapper')
          ).toHaveStyleRule(
            'box-shadow',
            expect.stringContaining(ColorDanger800.toUpperCase())
          )
        })
      })

      describe('and the increase button is clicked', () => {
        beforeEach(() => {
          onChangeSpy.mockReset()
          wrapper.getByTestId('number-input-increase').click()
        })

        assertInputValue('-')

        it('does not call the onChange callback', () => {
          expect(onChangeSpy).not.toHaveBeenCalled()
        })
      })

      describe('and the decrease button is clicked', () => {
        beforeEach(() => {
          onChangeSpy.mockReset()
          wrapper.getByTestId('number-input-decrease').click()
        })

        assertInputValue('-')

        it('does not call the onChange callback', () => {
          expect(onChangeSpy).not.toHaveBeenCalled()
        })
      })
    })

    describe('and the user types a fractional value', () => {
      beforeEach(() => {
        return userEvent.type(input, '100.1')
      })

      assertInputValue('100.1')
      assertOnChangeCall(100.1, 5)

      describe('and a second decimal point is typed after the first', () => {
        beforeEach(() => {
          onChangeSpy.mockReset()
          return userEvent.type(input, '.25')
        })

        assertInputValue('100.125')
        assertOnChangeCall(100.125, 2)
      })
    })

    // Note: Testing Library currently doesn't trigger React's simulated
    // beforeInput event, so the next two describe blocks do that
    // manually using the keyPress event.
    describe.each(['1', '.'])(
      'and beforeInput is triggered with the valid character %s',
      (char) => {
        let event: Event

        beforeEach(() => {
          event = createEvent.keyPress(input, {
            which: char.charCodeAt(0),
          })
          fireEvent(input, event)
        })

        it('does not cancel the event', () => {
          expect(event.defaultPrevented).toBeFalsy()
        })
      }
    )

    describe.each(['f', '@'])(
      'and beforeInput is triggered with the invalid character %s',
      (char) => {
        let event: Event

        beforeEach(() => {
          event = createEvent.keyPress(input, {
            which: char.charCodeAt(0),
          })
          fireEvent(input, event)
        })

        it('cancels the event', () => {
          expect(event.defaultPrevented).toBeTruthy()
        })
      }
    )

    describe.each(['123.456', '-123', '-123.456'])(
      'and the user pastes the valid value "%s" in an empty input',
      (pastedValue) => {
        beforeEach(() => {
          return paste(input, pastedValue)
        })

        assertInputValue(pastedValue)

        it('calls onChange with the value', () => {
          expect(onChangeSpy).toHaveBeenLastCalledWith(
            expect.anything(),
            parseFloat(pastedValue)
          )
        })
      }
    )

    describe.each(['123.456', '-123', '-123.456'])(
      'and the user pastes the valid value "%s" with existing text selected',
      (pastedValue) => {
        beforeEach(async () => {
          await userEvent.type(input, '999{Control>}a{/Control}')
          await paste(input, pastedValue)
        })

        assertInputValue(pastedValue)

        it('calls onChange with the value', () => {
          expect(onChangeSpy).toHaveBeenLastCalledWith(
            expect.anything(),
            parseFloat(pastedValue)
          )
        })
      }
    )

    describe.each(['123.456.789', '123invalid', '-123-456'])(
      'and the user pastes the invalid value "%s" in an empty input',
      (pastedValue) => {
        beforeEach(() => {
          return paste(input, pastedValue)
        })

        assertInputValue('')

        it('does not call onChange', () => {
          expect(onChangeSpy).not.toHaveBeenCalled()
        })
      }
    )

    describe.each(['123.456.789', '123invalid', '-123'])(
      'and the user pastes the invalid value "%s" after an existing value',
      (pastedValue) => {
        beforeEach(async () => {
          await userEvent.type(input, '100')
          onChangeSpy.mockReset()
          await paste(input, pastedValue)
        })

        assertInputValue('100')

        it('does not call onChange', () => {
          expect(onChangeSpy).not.toHaveBeenCalled()
        })
      }
    )
  })

  describe('when there is a footnote', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        footnote: 'Footnote',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    it('displays the footnote', () => {
      expect(wrapper.getByTestId('number-input-footnote').textContent).toEqual(
        'Footnote'
      )
    })
  })

  describe('when there is a label', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        label: 'Label',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    it('sets the `aria-label` attribute to the root element', () => {
      expect(wrapper.getByTestId('number-input')).toHaveAttribute(
        'aria-label',
        'Label'
      )
    })

    it('displays the footnote', () => {
      expect(wrapper.getByTestId('number-input-label').textContent).toEqual(
        'Label'
      )
    })
  })

  describe('when max and min are specified', () => {
    let input: HTMLElement

    beforeEach(() => {
      const props = {
        ...defaultProps,
        max: 3,
        min: 0,
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(
        <>
          <NumberInput {...props} />
          <input type="text" data-testid="next-field" />
        </>
      )

      input = wrapper.getByTestId('number-input-input')
    })

    it('sets the correct `aria-valuemin` attribute', () => {
      expect(wrapper.getByTestId('number-input')).toHaveAttribute(
        'aria-valuemin',
        '0'
      )
    })

    it('applies the `aria-valuemax` attribute', () => {
      expect(wrapper.getByTestId('number-input')).toHaveAttribute(
        'aria-valuemax',
        '3'
      )
    })

    describe('and the user types -3', () => {
      beforeEach(() => {
        return userEvent.type(input, '-3')
      })

      assertInputValue('3')
      assertOnChangeCall(3, 1)
    })

    describe('and the user pastes -3', () => {
      beforeEach(() => {
        return paste(input, '-3')
      })

      assertInputValue('')

      it('does not call onChange', () => {
        expect(onChangeSpy).not.toHaveBeenCalled()
      })
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

        input.focus()
      })

      describe('and the value is changed to an alpha character', () => {
        beforeEach(() => {
          fireEvent.change(input, {
            target: {
              value: 'a',
            },
          })
        })

        assertInputValue('1')
      })

      describe('and the value is changed to a valid number', () => {
        beforeEach(() => {
          fireEvent.change(input, {
            target: {
              value: '3',
            },
          })
        })

        assertInputValue('3')
      })

      describe('and the value is changed to a number outside the max min range', () => {
        beforeEach(() => {
          fireEvent.change(input, {
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

  describe.each([
    [3, 0, 3],
    [0.1, 0, 0.1],
    [0.25, 0.9, 1.15],
  ])('when a step of %s is specified', (step, initial, sum) => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        step: Number(step),
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput value={initial} {...props} />)
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        const increase = wrapper.getByTestId('number-input-increase')
        increase.click()
      })

      assertInputValue(String(sum))

      describe('and the decrease button is clicked', () => {
        beforeEach(() => {
          const decrease = wrapper.getByTestId('number-input-decrease')
          decrease.click()
        })

        assertInputValue(String(initial))
      })
    })
  })

  describe.each([
    { value: null, expected: '' },
    { value: 0, expected: '0' },
  ])('when the initial value is `$value`', ({ value, expected }) => {
    beforeEach(() => {
      wrapper = render(<NumberInput {...defaultProps} value={value} />)
    })

    assertInputValue(expected)
  })

  describe('when a CSS class name is specified', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        className: 'number-input__custom',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    it('sets the CSS modifier', () => {
      expect(wrapper.getByTestId('number-input').classList).toContain(
        'number-input__custom'
      )
    })
  })

  describe('when an ID is specified', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        id: 'number-input-id',
        label: 'Label',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    it('sets the `id` attribute', () => {
      expect(
        wrapper.getByTestId('number-input-input').getAttribute('id')
      ).toEqual('number-input-id')
    })

    it('associates the label with the field', () => {
      expect(
        wrapper.getByTestId('number-input-label').getAttribute('for')
      ).toEqual('number-input-id')
    })
  })

  describe('when the onBlur callback is specified', () => {
    let onBlurSpy: jest.SpyInstance

    beforeEach(() => {
      const props = {
        ...defaultProps,
        onBlur: (_: React.FormEvent) => true,
      }

      onBlurSpy = jest.spyOn(props, 'onBlur')
      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(
        <>
          <NumberInput {...props} />
          <input type="text" data-testid="next-field" />
        </>
      )
    })

    describe('and the number input loses focus', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-input').focus()
        wrapper.getByTestId('next-field').focus()
      })

      it('calls the `onBlur` callback', () => {
        expect(onBlurSpy).toHaveBeenCalledTimes(1)
      })
    })
  })

  describe('when there is a prefix', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        prefix: String.fromCharCode(163),
        value: 1000,
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    assertInputValue('1000')
    assertAriaValueAttributes({
      min: null,
      max: null,
      now: 1000,
      text: '£ 1000',
    })
  })

  describe('when there is a suffix', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        value: 1000,
        suffix: 'm',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    assertInputValue('1000')
    assertAriaValueAttributes({
      min: null,
      max: null,
      now: 1000,
      text: '1000 m',
    })
  })

  describe('when an external element affects the value', () => {
    beforeEach(() => {
      function NumberInputWithUpdate() {
        const [value, setValue] = useState<number>(1)

        const props = {
          ...defaultProps,
          value,
        }

        onChangeSpy = jest.spyOn(props, 'onChange')

        return (
          <>
            <Button onClick={() => setValue(1)}>Update</Button>
            <NumberInput {...props} />
          </>
        )
      }

      wrapper = render(<NumberInputWithUpdate />)
      wrapper.getByTestId('button').click()
    })

    it('updates the value in the field', async () => {
      await waitFor(() => {
        expect(wrapper.getByTestId('number-input-input')).toHaveValue('1')
      })
    })
  })

  describe('when arbitrary props are specified', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        'data-arbitrary': 'arbitrary',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    it('spreads arbitrary props', () => {
      expect(wrapper.getByTestId('number-input-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })

  describe('when small', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        label: 'Label',
        size: COMPONENT_SIZE.SMALL,
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInput {...props} />)
    })

    it('displays the label', () => {
      expect(wrapper.getByTestId('number-input-label').textContent).toEqual(
        'Label'
      )
    })

    describe('and the increase button is clicked', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-increase').click()
      })

      it('hides the label', () => {
        expect(wrapper.getByTestId('number-input-label')).not.toBeVisible()
      })
    })

    describe('when focusing on the input', () => {
      beforeEach(() => {
        wrapper.getByTestId('number-input-input').focus()
      })

      it('hides the label', () => {
        expect(wrapper.getByTestId('number-input-label')).not.toBeVisible()
      })

      describe('and the number input loses focus', () => {
        beforeEach(() => {
          wrapper.getByTestId('number-input-increase').focus()
        })

        it('displays the label', () => {
          expect(wrapper.getByTestId('number-input-label').textContent).toEqual(
            'Label'
          )
        })
      })
    })
  })

  describe('when the default `id` is used and a number is typed in the input', () => {
    let initialInputId: string
    let initialWrapperId: string

    beforeEach(() => {
      wrapper = render(<NumberInput onChange={jest.fn()} name="example" />)
      initialWrapperId = wrapper.getByTestId('number-input').id

      const input = wrapper.getByTestId('number-input-input')
      initialInputId = input.id
      return userEvent.type(input, '123')
    })

    it('does not generate a new `id` for the wrapper', () => {
      expect(wrapper.getByTestId('number-input')).toHaveAttribute(
        'id',
        initialWrapperId
      )
    })

    it('does not generate a new `id` for the input', () => {
      expect(wrapper.getByTestId('number-input-input')).toHaveAttribute(
        'id',
        initialInputId
      )
    })
  })
})
