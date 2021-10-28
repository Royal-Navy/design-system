import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button, COMPONENT_SIZE } from '../..'
import { NumberInputE } from '.'

const defaultProps = {
  name: 'number-input',
  onChange: (
    _: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>
  ) => true,
}

describe('NumberInputE', () => {
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
    min?: number
    max?: number
    now: number
    text: string
  }) {
    it('sets the `aria-value*` attribute', () => {
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
      expect(container).toHaveAttribute('aria-valuetext', text.toString())
    })
  }

  function assertOnChangeCall(expected: number, expectedNumberOfTimes = 1) {
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
    beforeEach(() => {
      onChangeSpy = jest.spyOn(defaultProps, 'onChange')

      wrapper = render(<NumberInputE {...defaultProps} />)
    })

    it('sets the default `aria-label` attribute', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
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
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
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
        .getByTestId('number-input-container')
        .getAttribute('id')

      expect(
        wrapper
          .getByTestId('number-input-input')
          .getAttribute('aria-labelledby')
      ).toEqual(numberInputId)
    })

    it('sets the name attribute', () => {
      expect(
        wrapper.getByTestId('number-input-input').getAttribute('name')
      ).toEqual('number-input')
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

    describe('and the user types values', () => {
      beforeEach(async () => {
        const input = wrapper.getByTestId('number-input-input')

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
      const props = {
        ...defaultProps,
        footnote: 'Footnote',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInputE {...props} />)
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

      wrapper = render(<NumberInputE {...props} />)
    })

    it('sets the `aria-label` attribute to the root element', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
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
    beforeEach(() => {
      const props = {
        ...defaultProps,
        max: 3,
        min: 0,
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(
        <>
          <NumberInputE {...props} />
          <input type="text" data-testid="next-field" />
        </>
      )
    })

    it('sets the correct `aria-valuemin` attribute', () => {
      expect(wrapper.getByTestId('number-input-container')).toHaveAttribute(
        'aria-valuemin',
        '0'
      )
    })

    it('aplies the `aria-valuemax` attribute', () => {
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

      assertInputValue('4')

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
      const props = {
        ...defaultProps,
        step: 3,
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInputE {...props} />)
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

  describe('when a CSS class name is specified', () => {
    beforeEach(() => {
      const props = {
        ...defaultProps,
        className: 'number-input__custom',
      }

      onChangeSpy = jest.spyOn(props, 'onChange')

      wrapper = render(<NumberInputE {...props} />)
    })

    it('sets the CSS modifier', () => {
      expect(wrapper.getByTestId('number-input-container').classList).toContain(
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

      wrapper = render(<NumberInputE {...props} />)
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
          <NumberInputE {...props} />
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

      wrapper = render(<NumberInputE {...props} />)
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

      wrapper = render(<NumberInputE {...props} />)
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
            <NumberInputE {...props} />
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

      wrapper = render(<NumberInputE {...props} />)
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

      wrapper = render(<NumberInputE {...props} />)
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
})
