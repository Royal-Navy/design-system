import { format, isValid, parseISO } from 'date-fns'
import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ColorDanger800 } from '@defencedigital/design-tokens'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'

import { BORDER_WIDTH } from '../../styled-components'
import { COMPONENT_SIZE } from '../Forms'
import { DatePickerE, DatePickerEOnChangeData } from '.'
import { DATE_VALIDITY } from './constants'

const NOW = '2019-12-05T11:00:00.000Z'
const ERROR_BOX_SHADOW = `0 0 0 ${
  BORDER_WIDTH[COMPONENT_SIZE.FORMS]
} ${ColorDanger800.toUpperCase()}`

function formatDate(date: Date | null) {
  return isValid(date) ? format(date, 'dd/MM/yyyy') : ''
}

describe('DatePickerE', () => {
  let wrapper: RenderResult
  let initialStartDate: Date
  let label: string
  let onBlur: (e: React.FormEvent) => void
  let onCalendarFocus: (e: React.SyntheticEvent) => void
  let days: string[]
  let onSubmitSpy: (e: React.FormEvent) => void
  const onChange = jest.fn<void, [DatePickerEOnChangeData]>()

  function assertInputButtonAria({
    ariaExpanded,
    ariaLabel,
  }: {
    ariaExpanded: string
    ariaLabel: string
  }) {
    it('updates the ARIA attributes on the input button', () => {
      const button = wrapper.getByTestId('datepicker-input-button')

      expect(button).toHaveAttribute('aria-expanded', ariaExpanded)
      expect(button).toHaveAttribute('aria-label', ariaLabel)
    })
  }

  beforeAll(() => {
    function leadingZero(n: number): string {
      return n > 9 ? `${n}` : `0${n}`
    }

    days = new Array(31).map((i) => leadingZero(i + 1)) // [01, 02, ..., 31]
  })

  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))
  })

  afterEach(() => {
    jest.useRealTimers()
    onChange.mockReset()
  })

  describe('default props', () => {
    beforeEach(() => {
      initialStartDate = new Date(2019, 11, 1)
      onBlur = jest.fn()
      onCalendarFocus = jest.fn()

      wrapper = render(
        <>
          <DatePickerE
            initialStartDate={initialStartDate}
            onChange={onChange}
            onBlur={onBlur}
            onCalendarFocus={onCalendarFocus}
          />
          <div data-testid="datepicker-outside" />
        </>
      )
    })

    it('applies the `aria-label` to the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'aria-label',
        'Choose date'
      )
    })

    assertInputButtonAria({
      ariaExpanded: 'false',
      ariaLabel: 'Show day picker',
    })

    it('renders the `input` with the `placeholder` attribute', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'placeholder',
        'dd/mm/yyyy'
      )
    })

    it('should set the `role` attribute for the Day buttons', () => {
      days.forEach((_, index) => {
        expect(
          wrapper.getByTestId(`datepicker-day-${index + 1}`)
        ).toHaveAttribute('role', 'option')
      })
    })

    it('should set the `aria-selected` attribute for the day buttons', () => {
      days.forEach((_, index) => {
        expect(
          wrapper.getByTestId(`datepicker-day-${index + 1}`)
        ).toHaveAttribute('aria-selected', 'false')
      })
    })

    it('renders the component', () => {
      expect(
        wrapper.queryByTestId('datepicker-input-wrapper')
      ).toBeInTheDocument()
    })

    it('renders the correct sequence of days', () => {
      days.forEach((day) => {
        expect(
          wrapper.queryByTestId(`datepicker-day-${day}`)
        ).toBeInTheDocument()
      })
    })

    describe('when the end user clicks the open close button', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('datepicker-input-button'))
      })

      assertInputButtonAria({
        ariaExpanded: 'true',
        ariaLabel: 'Hide day picker',
      })

      it('displays the container', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('floating-box')).toBeVisible()
        })
      })

      describe('and the user clicks it again', () => {
        beforeEach(() => {
          userEvent.click(wrapper.getByTestId('datepicker-input-button'))
        })

        assertInputButtonAria({
          ariaExpanded: 'false',
          ariaLabel: 'Show day picker',
        })

        it('hides the day picker container', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('floating-box-content')
            ).not.toBeInTheDocument()
          })
        })
      })

      describe('and the input is clicked on', () => {
        beforeEach(() => {
          userEvent.click(wrapper.getByTestId('datepicker-input'))
        })

        it('hides the day picker container', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('floating-box-content')
            ).not.toBeInTheDocument()
          })
        })
      })
    })

    describe('when the end user focuses on the Input', () => {
      beforeEach(() => {
        wrapper.getByTestId('datepicker-input').focus()
      })

      it("doesn't display the day picker", () => {
        return waitFor(() => {
          expect(wrapper.queryByTestId('floating-box')).not.toBeInTheDocument()
        })
      })
    })

    describe('when the input is cleared using the keyboard', () => {
      beforeEach(() => {
        userEvent.clear(wrapper.getByTestId('datepicker-input'))
      })

      it('calls the `onChange` callback with null dates', () => {
        expect(onChange).toHaveBeenLastCalledWith({
          startDate: null,
          startDateValidity: null,
          endDate: null,
          endDateValidity: null,
        })
      })
    })

    describe('when the end user types a new date value', () => {
      describe('and the date value is valid', () => {
        describe('and the day/month use two digit format', () => {
          beforeEach(() => {
            const input = wrapper.getByTestId('datepicker-input')

            userEvent.type(input, '{selectall}01/05/2016')
          })

          it('set the value of the component to this date', () => {
            expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
              '01/05/2016'
            )
          })

          it('invokes the `onChange` callback', () => {
            expect(onChange).toHaveBeenLastCalledWith({
              startDate: new Date('2016-05-01T12:00:00.000Z'),
              startDateValidity: DATE_VALIDITY.VALID,
              endDate: new Date('2016-05-01T12:00:00.000Z'),
              endDateValidity: DATE_VALIDITY.VALID,
            })
          })

          describe('and the day picker is opened', () => {
            beforeEach(() => {
              userEvent.click(wrapper.getByTestId('datepicker-input-button'))
            })

            it('displays the new date', () => {
              expect(wrapper.getByText('May 2016')).toBeInTheDocument()
              expect(wrapper.getByText('1')).toBeInTheDocument()
            })
          })

          describe('and the tab key is pressed', () => {
            beforeEach(() => {
              wrapper.getByTestId('datepicker-input').focus()

              userEvent.tab()
            })

            it('focuses the picker open/close button', () => {
              expect(
                wrapper.getByTestId('datepicker-input-button')
              ).toHaveFocus()
            })

            describe('and the space key is pressed', () => {
              beforeEach(() => {
                const button = wrapper.getByTestId('datepicker-input-button')

                userEvent.type(button, '{space}', { skipClick: true })
              })

              it('opens the picker container', () => {
                expect(
                  wrapper.getByTestId('datepicker-input-button')
                ).toHaveAttribute('aria-label', 'Hide day picker')
              })

              describe('and the tab key is pressed again', () => {
                beforeEach(() => {
                  userEvent.tab()
                })

                it('focuses the picker container', () => {
                  expect(onCalendarFocus).toHaveBeenCalledTimes(1)
                  // NOTE: `react-day-picker` internals from here on down
                })
              })

              describe('and clicks on a day', () => {
                beforeEach(() => {
                  userEvent.click(wrapper.getByText('31'))
                })

                it('set the value of the component to this date', () => {
                  expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
                    '31/05/2016'
                  )
                })

                it('invokes the onChange callback', () => {
                  expect(onChange).toHaveBeenLastCalledWith({
                    startDate: new Date('2016-05-31T12:00:00.000Z'),
                    startDateValidity: DATE_VALIDITY.VALID,
                    endDate: new Date('2016-05-31T12:00:00.000Z'),
                    endDateValidity: DATE_VALIDITY.VALID,
                  })
                })

                it('hides the day picker container', () => {
                  return waitFor(() => {
                    expect(
                      wrapper.queryByTestId('floating-box')
                    ).not.toBeInTheDocument()
                  })
                })
              })
            })
          })
        })

        describe('and the day/month use one digit format', () => {
          let input: HTMLElement

          beforeEach(() => {
            input = wrapper.getByTestId('datepicker-input')

            userEvent.type(input, '{selectall}1/5/2016')
          })

          describe('and enter is pressed', () => {
            beforeEach(() => {
              userEvent.type(input, '{enter}')
            })

            it('updates the value of the input with the formatted date', () => {
              expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
                '01/05/2016'
              )
            })
          })

          describe('and tab is pressed', () => {
            beforeEach(() => {
              userEvent.tab()
            })

            it('updates the value of the input with the formatted date', () => {
              expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
                '01/05/2016'
              )
            })
          })

          describe('and the `input` loses `focus`', () => {
            beforeEach(() => {
              input.blur()
            })

            it('updates the value of the input with the formatted date', () => {
              expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
                '01/05/2016'
              )
            })
          })

          it('invokes the `onChange` callback', () => {
            expect(onChange).toHaveBeenLastCalledWith({
              startDate: new Date('2016-05-01T12:00:00.000Z'),
              startDateValidity: DATE_VALIDITY.VALID,
              endDate: new Date('2016-05-01T12:00:00.000Z'),
              endDateValidity: DATE_VALIDITY.VALID,
            })
          })

          describe('and the open/close button is clicked', () => {
            beforeEach(() => {
              userEvent.click(wrapper.getByTestId('datepicker-input-button'))
            })

            it('updates the selected day', () => {
              expect(wrapper.getByText('May 2016')).toBeInTheDocument()
              expect(wrapper.getByText('1')).toBeInTheDocument()
            })
          })
        })
      })

      describe('and a date is partially entered', () => {
        beforeEach(() => {
          const input = wrapper.getByTestId('datepicker-input')

          userEvent.type(input, '{selectall}20')
        })
        describe('and a day is selected', () => {
          beforeEach(() => {
            userEvent.click(wrapper.getByTestId('datepicker-input-button'))
            userEvent.click(wrapper.getByText('21'))
          })

          it('set the value of the component to the selected date', () => {
            expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
              '21/12/2019'
            )
          })

          it('invokes the `onChange` callback', () => {
            expect(onChange).toHaveBeenLastCalledWith({
              startDate: new Date('2019-12-21T12:00:00.000Z'),
              startDateValidity: DATE_VALIDITY.VALID,
              endDate: new Date('2019-12-21T12:00:00.000Z'),
              endDateValidity: DATE_VALIDITY.VALID,
            })
          })
        })
      })

      describe('and the date value is invalid', () => {
        describe('when entering letters', () => {
          beforeEach(() => {
            const input = wrapper.getByTestId('datepicker-input')

            userEvent.type(input, '{selectall}abcd')
          })

          it('calls the `onChange` callback with an invalid date', () => {
            const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1]

            expect(isValid(lastCall[0].startDate)).toBeFalsy()
            expect(lastCall[0].startDateValidity).toBe(DATE_VALIDITY.INVALID)
            expect(isValid(lastCall[0].endDate)).toBeFalsy()
            expect(lastCall[0].endDateValidity).toBe(DATE_VALIDITY.INVALID)
          })

          describe('and the tab key is pressed', () => {
            beforeEach(() => {
              userEvent.tab()
            })

            it('is in an error state', () => {
              expect(
                wrapper.getByTestId('datepicker-outer-wrapper')
              ).toHaveStyleRule('box-shadow', ERROR_BOX_SHADOW)
            })

            it('calls the `onBlur` callback', () => {
              expect(onBlur).toHaveBeenCalledTimes(1)
            })
          })

          describe('and a valid date is entered', () => {
            beforeEach(() => {
              const input = wrapper.getByTestId('datepicker-input')
              const newValue =
                '{backspace}{backspace}{backspace}{backspace}01/03/2021'

              userEvent.type(input, newValue)
            })

            it('invokes the `onChange` callback', () => {
              expect(onChange).toHaveBeenLastCalledWith({
                startDate: new Date('2021-03-01T12:00:00.000Z'),
                startDateValidity: DATE_VALIDITY.VALID,
                endDate: new Date('2021-03-01T12:00:00.000Z'),
                endDateValidity: DATE_VALIDITY.VALID,
              })
            })

            it('should not be in an error state', () => {
              expect(
                wrapper.getByTestId('datepicker-outer-wrapper')
              ).not.toHaveStyleRule('box-shadow', ERROR_BOX_SHADOW)
            })
          })

          describe('and the `input` loses `focus`', () => {
            beforeEach(() => {
              const input = wrapper.getByTestId('datepicker-input')

              input.blur()
            })

            it('is in an error state', () => {
              expect(
                wrapper.getByTestId('datepicker-outer-wrapper')
              ).toHaveStyleRule('box-shadow', ERROR_BOX_SHADOW)
            })

            it('calls the `onBlur` callback', () => {
              expect(onBlur).toHaveBeenCalledTimes(1)
            })
          })
        })

        describe('when using a two digit year', () => {
          beforeEach(() => {
            const input = wrapper.getByTestId('datepicker-input')
            userEvent.type(input, '{selectall}12/12/20')
            input.blur()
          })

          it('calls the `onChange` callback with an invalid date', () => {
            const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1]

            expect(isValid(lastCall[0].startDate)).toBeFalsy()
            expect(lastCall[0].startDateValidity).toBe(DATE_VALIDITY.INVALID)
            expect(isValid(lastCall[0].endDate)).toBeFalsy()
            expect(lastCall[0].endDateValidity).toBe(DATE_VALIDITY.INVALID)
          })

          it('is in an error state', () => {
            expect(
              wrapper.getByTestId('datepicker-outer-wrapper')
            ).toHaveStyleRule('box-shadow', ERROR_BOX_SHADOW)
          })
        })

        describe('when using a date that does not exist', () => {
          beforeEach(() => {
            const input = wrapper.getByTestId('datepicker-input')
            userEvent.type(input, '{selectall}15/15/20')
            input.blur()
          })

          it('calls the `onChange` callback with an invalid date', () => {
            const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1]

            expect(isValid(lastCall[0].startDate)).toBeFalsy()
            expect(lastCall[0].startDateValidity).toBe(DATE_VALIDITY.INVALID)
            expect(isValid(lastCall[0].endDate)).toBeFalsy()
            expect(lastCall[0].endDateValidity).toBe(DATE_VALIDITY.INVALID)
          })

          it('is in an error state', () => {
            expect(
              wrapper.getByTestId('datepicker-outer-wrapper')
            ).toHaveStyleRule('box-shadow', ERROR_BOX_SHADOW)
          })
        })
      })
    })

    describe('when a new date is pasted', () => {
      beforeEach(() => {
        const input = wrapper.getByTestId('datepicker-input')
        userEvent.clear(input)
        userEvent.paste(input, '01/05/2021')
      })

      it('calls the `onChange` callback with the new date', () => {
        expect(onChange).toHaveBeenLastCalledWith({
          startDate: new Date('2021-05-01T12:00:00.000Z'),
          startDateValidity: DATE_VALIDITY.VALID,
          endDate: new Date('2021-05-01T12:00:00.000Z'),
          endDateValidity: DATE_VALIDITY.VALID,
        })
      })
    })
  })

  describe('when a custom label is provided', () => {
    beforeEach(() => {
      label = 'Custom Label'

      wrapper = render(<DatePickerE label={label} />)
    })

    it('renders that label accordingly', () => {
      expect(wrapper.getByTestId('datepicker-label').innerHTML).toBe(
        `${label} (dd/mm/yyyy)`
      )
    })
  })

  describe('when isDisabled prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePickerE isDisabled />)
    })

    it('applies the cursor not-allowed style rule', () => {
      expect(wrapper.getByTestId('datepicker-input-wrapper')).toHaveStyleRule(
        'cursor',
        'not-allowed'
      )
    })

    it('applies the disabled attribute to the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'disabled'
      )
    })
  })

  describe('when a single date picker is rendered and the picker is opened', () => {
    beforeEach(() => {
      wrapper = render(<DatePickerE />)

      userEvent.click(wrapper.getByTestId('datepicker-input-button'))
    })

    it('displays the current month', () => {
      expect(wrapper.getByText('December 2019')).toBeInTheDocument()
    })

    it('focuses the previous month button', () => {
      return waitFor(() =>
        expect(wrapper.getByLabelText('Previous Month')).toHaveFocus()
      )
    })

    describe('when the day picker is focused and Shift-Tab is pressed', () => {
      let dayPicker: Element

      beforeEach(() => {
        dayPicker = wrapper.container.querySelectorAll('.DayPicker-wrapper')[0]

        fireEvent.focus(dayPicker)

        userEvent.tab({ shift: true })
      })

      it('traps the focus within the picker', () => {
        expect(wrapper.getByText('1')).toHaveFocus()
      })

      describe('and Tab is then pressed', () => {
        beforeEach(() => {
          userEvent.tab()
        })

        it('still traps the focus within the picker', () => {
          expect(dayPicker).toHaveFocus()
        })
      })
    })

    describe.each([
      {
        name: 'day picker container',
        selector: () =>
          wrapper.container.querySelectorAll('.DayPicker-wrapper')[0],
      },
      {
        name: 'previous month button',
        selector: () => wrapper.getByLabelText('Previous Month'),
      },
      {
        name: 'day picker day',
        selector: () => wrapper.getByText(10),
      },
    ])('when the escape key is pressed in $name', ({ selector }) => {
      beforeEach(() => {
        userEvent.type(selector(), '{esc}')
      })

      it('closes the day picker', () => {
        return waitFor(() => {
          expect(wrapper.queryByTestId('floating-box')).not.toBeInTheDocument()
        })
      })

      it('focuses the open/close button', () => {
        return waitFor(() =>
          expect(wrapper.queryByTestId('datepicker-input-button')).toHaveFocus()
        )
      })
    })

    describe('when the next month button is clicked', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByLabelText('Next Month'))
      })

      it('displays the next month', () => {
        expect(wrapper.getByText('January 2020')).toBeInTheDocument()
      })

      describe('when the first day is clicked', () => {
        beforeEach(() => {
          userEvent.click(wrapper.getByText('1'))
        })

        it('updates the input value', () => {
          expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
            '01/01/2020'
          )
        })

        it('closes the picker', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('floating-box')
            ).not.toBeInTheDocument()
          })
        })

        it('focuses the open/close button', () => {
          return waitFor(() =>
            expect(
              wrapper.queryByTestId('datepicker-input-button')
            ).toHaveFocus()
          )
        })

        describe('when the picker is reopened', () => {
          beforeEach(async () => {
            await waitForElementToBeRemoved(
              wrapper.queryByTestId('floating-box')
            )

            userEvent.click(wrapper.getByTestId('datepicker-input-button'))
          })

          it('opens the picker on the previously selected month', () => {
            expect(wrapper.getByText('January 2020')).toBeInTheDocument()
          })
        })
      })
    })
  })

  describe('when selecting a date range', () => {
    beforeEach(() => {
      wrapper = render(
        <DatePickerE
          initialStartDate={new Date(2019, 11, 10)}
          onChange={onChange}
          isRange
        />
      )
    })

    it('should set the `readonly` attribute on the `input`', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'readonly',
        ''
      )
    })

    it('does not render the `input` with the `placeholder` attribute', () => {
      expect(wrapper.getByTestId('datepicker-input')).not.toHaveAttribute(
        'placeholder'
      )
    })

    describe('when the end user clicks on the Input', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('datepicker-input'))
      })

      it('opens the day picker', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('floating-box')).toBeVisible()
        })
      })

      describe('and hovers over a second date', () => {
        beforeEach(() => {
          userEvent.hover(wrapper.getByText('13'))
        })

        it('shades the date range', () => {
          expect(
            wrapper.getAllByText(/^10|11|12|13$/, {
              selector: '.DayPicker-Day--selected',
            })
          ).toHaveLength(4)
        })

        it("doesn't shade dates outside the range", () => {
          expect(
            wrapper.queryAllByText(/^(?!(10|11|12|13))\d\d$/, {
              selector: '.DayPicker-Day--selected',
            })
          ).toHaveLength(0)
        })

        describe('and unhovers the second date', () => {
          beforeEach(() => {
            userEvent.unhover(wrapper.getByText('13'))
          })

          it('does not shade any days', () => {
            expect(
              wrapper.container.querySelectorAll('.DayPicker-Day--selected')
            ).toHaveLength(0)
          })
        })
      })

      describe('and focuses a second date', () => {
        beforeEach(() => {
          fireEvent.focus(wrapper.getByText('13'))
        })

        it('shades the date range', () => {
          expect(
            wrapper.getAllByText(/^10|11|12|13$/, {
              selector: '.DayPicker-Day--selected',
            })
          ).toHaveLength(4)
        })

        it("doesn't shade dates outside the range", () => {
          expect(
            wrapper.queryAllByText(/^(?!(10|11|12|13))\d\d$/, {
              selector: '.DayPicker-Day--selected',
            })
          ).toHaveLength(0)
        })
      })

      describe('and clicks on a second date', () => {
        beforeEach(() => {
          userEvent.click(wrapper.getByText('20'))
        })

        it('closes the day picker', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('floating-box')
            ).not.toBeInTheDocument()
          })
        })

        it('focuses the open/close button', () => {
          return waitFor(() =>
            expect(
              wrapper.queryByTestId('datepicker-input-button')
            ).toHaveFocus()
          )
        })

        it('set the value of the component to this date', () => {
          expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
            '10/12/2019 - 20/12/2019'
          )
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-10T00:00:00.000Z'),
            startDateValidity: DATE_VALIDITY.VALID,
            endDate: new Date('2019-12-20T12:00:00.000Z'),
            endDateValidity: DATE_VALIDITY.VALID,
          })
        })
      })

      describe('and clicks on a date less than the first', () => {
        beforeEach(() => {
          userEvent.click(wrapper.getByText('9'))
        })

        it('closes the day picker', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('floating-box')
            ).not.toBeInTheDocument()
          })
        })

        it('updates the value to start from this date', () => {
          expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
            '09/12/2019 - 10/12/2019'
          )
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-09T12:00:00.000Z'),
            startDateValidity: DATE_VALIDITY.VALID,
            endDate: new Date('2019-12-10T00:00:00.000Z'),
            endDateValidity: DATE_VALIDITY.VALID,
          })
        })
      })
    })
  })

  describe('when in range mode and two dates are already selected', () => {
    let input: HTMLElement

    beforeEach(() => {
      wrapper = render(
        <DatePickerE
          initialStartDate={new Date(2019, 11, 10)}
          initialEndDate={new Date(2019, 11, 15)}
          isRange
        />
      )

      input = wrapper.getByTestId('datepicker-input')
    })

    it('the input value displays the range selected', () => {
      expect(input).toHaveValue('10/12/2019 - 15/12/2019')
    })

    describe('and the input is focused and blurred', () => {
      beforeEach(() => {
        input.focus()
        input.blur()
      })

      it('the input value is unchanged', () => {
        expect(input).toHaveValue('10/12/2019 - 15/12/2019')
      })
    })

    // Note this shouldn't happen in reality as the input is read-only
    // in range mode
    describe('and return is pressed in the input', () => {
      beforeEach(() => {
        userEvent.type(input, '{enter}')
      })

      it('the input value is unchanged', () => {
        expect(input).toHaveValue('10/12/2019 - 15/12/2019')
      })
    })

    // Note this shouldn't happen in reality as the input is read-only
    // in range mode
    describe('and a date is typed in the input', () => {
      beforeEach(() => {
        fireEvent.change(input, {
          target: {
            value: '10/10/2021',
          },
        })
      })

      it('the input value is unchanged', () => {
        expect(input).toHaveValue('10/12/2019 - 15/12/2019')
      })
    })
  })

  describe('when the initialIsOpen prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePickerE initialIsOpen />)
    })

    it('displays the picker as open on initial render', () => {
      expect(wrapper.getByTestId('floating-box')).toBeVisible()
    })
  })

  describe('when the DatePicker is nested within a form', () => {
    beforeEach(() => {
      onSubmitSpy = jest.fn()
      wrapper = render(
        <form onSubmit={onSubmitSpy}>
          <DatePickerE />
        </form>
      )
    })

    describe('and the open/close button is clicked', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByTestId('datepicker-input-button'))
      })

      it('does not submit the form', () => {
        expect(onSubmitSpy).not.toHaveBeenCalled()
      })
    })
  })

  describe('when the `disabled` prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePickerE isDisabled />)
    })

    it('sets the disabled attribute correctly for the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'disabled'
      )
    })
  })

  describe('when the `disabledDays` prop is provided', () => {
    beforeEach(() => {
      wrapper = render(
        <DatePickerE
          initialIsOpen
          onChange={onChange}
          initialStartDate={new Date(2020, 3, 1)}
          disabledDays={[new Date(2020, 3, 12)]}
        />
      )
    })

    it('applies the disabled modifier class to the correct days', () => {
      expect(wrapper.getByText('12')).toHaveClass('DayPicker-Day--disabled')
    })

    describe('and a disabled day is clicked', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByText('12'), undefined, {
          skipPointerEventsCheck: true,
        })
      })

      it('does not set the picker to that day', () => {
        expect(onChange).not.toHaveBeenCalled()
      })
    })

    describe('and a disabled day is typed', () => {
      beforeEach(() => {
        const input = wrapper.getByTestId('datepicker-input')

        userEvent.type(input, '{selectall}12/04/2020')
      })

      it('calls the `onChange` callback with the disabled date', () => {
        expect(onChange).toHaveBeenLastCalledWith({
          startDate: new Date('2020-04-12T12:00:00.000Z'),
          startDateValidity: DATE_VALIDITY.DISABLED,
          endDate: new Date('2020-04-12T12:00:00.000Z'),
          endDateValidity: DATE_VALIDITY.DISABLED,
        })
      })
    })
  })

  describe('when the `initialMonth` prop is provided and no `startDate`', () => {
    beforeEach(() => {
      wrapper = render(
        <DatePickerE initialIsOpen initialMonth={new Date(2020, 1)} />
      )
    })

    it('displays the correct month initially', () => {
      expect(wrapper.queryByText('February 2020')).toBeInTheDocument()
    })

    it('does not set a startDate', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'value',
        ''
      )
    })
  })

  describe('when arbitrary props are provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePickerE data-arbitrary="arbitrary" />)
    })

    it('sets the disabled attribute correctly for the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })

  describe('when the is-invalid CSS class is set', () => {
    beforeEach(() => {
      wrapper = render(<DatePickerE className="is-invalid" />)
    })

    it('should set the border on the outer wrapper', () => {
      expect(wrapper.getByTestId('datepicker-outer-wrapper')).toHaveStyleRule(
        'box-shadow',
        ERROR_BOX_SHADOW
      )
    })
  })

  describe('when `format` is specified', () => {
    beforeEach(() => {
      wrapper = render(
        <DatePickerE
          format="yyyy/MM/dd"
          initialStartDate={new Date(2018, 0, 11)}
          onChange={onChange}
        />
      )
    })

    it('should set the value', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveValue('2018/01/11')
    })

    it('renders the `input` with the `placeholder` attribute', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'placeholder',
        'yyyy/mm/dd'
      )
    })

    describe('when a valid date is typed', () => {
      beforeEach(() => {
        const input = wrapper.getByTestId('datepicker-input')

        userEvent.type(input, `{selectall}2016/02/03`)
      })

      it('invokes the `onChange` callback', () => {
        const expectedDate = new Date('2016-02-03T12:00:00.000Z')
        expect(onChange).toHaveBeenLastCalledWith({
          startDate: expectedDate,
          startDateValidity: DATE_VALIDITY.VALID,
          endDate: expectedDate,
          endDateValidity: DATE_VALIDITY.VALID,
        })
      })

      it("isn't in an error state", () => {
        expect(
          wrapper.getByTestId('datepicker-outer-wrapper')
        ).not.toHaveStyleRule('box-shadow', ERROR_BOX_SHADOW)
      })
    })

    describe.each(['201/01/01', '02/03/2021'])(
      'when the invalid date %s is typed',
      (date) => {
        let input: HTMLElement

        beforeEach(() => {
          input = wrapper.getByTestId('datepicker-input')

          userEvent.type(input, date)
        })

        it('calls the `onChange` callback with an invalid date', () => {
          const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1]

          expect(isValid(lastCall[0].startDate)).toBeFalsy()
          expect(lastCall[0].startDateValidity).toBe(DATE_VALIDITY.INVALID)
          expect(isValid(lastCall[0].endDate)).toBeFalsy()
          expect(lastCall[0].endDateValidity).toBe(DATE_VALIDITY.INVALID)
        })

        describe('and the input is blurred', () => {
          beforeEach(() => {
            input.blur()
          })

          it('is in an error state', () => {
            expect(
              wrapper.getByTestId('datepicker-outer-wrapper')
            ).toHaveStyleRule('box-shadow', ERROR_BOX_SHADOW)
          })
        })
      }
    )
  })

  describe('when a startDate and value is specified', () => {
    // @ts-ignore
    const jsxToRender = <DatePickerE startDate={new Date()} value={null} />

    it('does not throw an error', () => {
      expect(() => render(jsxToRender)).not.toThrowError()
    })
  })

  describe('when the state is held externally', () => {
    let input: HTMLElement

    const ExternalStateExample = () => {
      const [value, setValue] = React.useState<Date | null>(null)

      return (
        <>
          <DatePickerE
            startDate={value}
            onChange={({ startDate: newStartDate }) => setValue(newStartDate)}
          />
          <div data-testid="value">{formatDate(value)}</div>
          <button onClick={() => setValue(new Date())}>Today</button>
          <button onClick={() => setValue(null)}>Clear date</button>
        </>
      )
    }

    beforeEach(() => {
      wrapper = render(<ExternalStateExample />)
      input = wrapper.getByTestId('datepicker-input')
    })

    describe('and a date is typed', () => {
      beforeEach(() => {
        userEvent.type(input, '06/05/2022')
      })

      it('updates the input value', () => {
        expect(input).toHaveValue('06/05/2022')
      })

      it('updates the external state', () => {
        expect(wrapper.getByTestId('value')).toHaveTextContent('06/05/2022')
      })
    })

    describe('and the external state is updated with a new date', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByText('Today'))
      })

      it('updates the input value', () => {
        expect(input).toHaveValue('05/12/2019')
      })

      it('updates the external state', () => {
        expect(wrapper.getByTestId('value')).toHaveTextContent('05/12/2019')
      })

      describe('and the external state is then updated with a null value', () => {
        beforeEach(() => {
          userEvent.click(wrapper.getByText('Clear date'))
        })

        it('updates the input value', () => {
          expect(input).toHaveValue('')
        })

        it('updates the external state', () => {
          expect(wrapper.getByTestId('value')).toBeEmptyDOMElement()
        })
      })
    })
  })

  describe('when in range mode and the state is held externally', () => {
    let input: HTMLElement

    const RangeExternalStateExample = () => {
      const [startDate, setStartDate] = useState<Date | null>(
        new Date('2022-05-10')
      )
      const [endDate, setEndDate] = useState<Date | null>(
        new Date('2022-05-20')
      )

      return (
        <>
          <DatePickerE
            startDate={startDate}
            endDate={endDate}
            onChange={({ startDate: newStartDate, endDate: newEndDate }) => {
              setStartDate(newStartDate)
              setEndDate(newEndDate)
            }}
            isRange
          />
          <div data-testid="start-date">{formatDate(startDate)}</div>
          <div data-testid="end-date">{formatDate(endDate)}</div>
          <button onClick={() => setStartDate(new Date('2022-05-01'))}>
            Update start date
          </button>
          <button onClick={() => setEndDate(new Date('2022-06-01'))}>
            Update end date
          </button>
          <button
            onClick={() => {
              setStartDate(null)
              setEndDate(null)
            }}
          >
            Clear dates
          </button>
        </>
      )
    }

    beforeEach(() => {
      wrapper = render(<RangeExternalStateExample />)
      input = wrapper.getByTestId('datepicker-input')
    })

    describe('and the start date is updated externally', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByText('Update start date'))
      })

      it('updates the input value', () => {
        expect(input).toHaveValue('01/05/2022 - 20/05/2022')
      })

      it('updates the external state', () => {
        expect(wrapper.getByTestId('start-date')).toHaveTextContent(
          '01/05/2022'
        )
        expect(wrapper.getByTestId('end-date')).toHaveTextContent('20/05/2022')
      })
    })

    describe('and the end date is updated externally', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByText('Update end date'))
      })

      it('updates the input value', () => {
        expect(input).toHaveValue('10/05/2022 - 01/06/2022')
      })

      it('updates the external state', () => {
        expect(wrapper.getByTestId('start-date')).toHaveTextContent(
          '10/05/2022'
        )
        expect(wrapper.getByTestId('end-date')).toHaveTextContent('01/06/2022')
      })
    })

    describe('and the dates are cleared', () => {
      beforeEach(() => {
        userEvent.click(wrapper.getByText('Clear dates'))
      })

      it('updates the input value', () => {
        expect(input).toHaveValue('')
      })

      it('updates the external state', () => {
        expect(wrapper.getByTestId('start-date')).toBeEmptyDOMElement()
        expect(wrapper.getByTestId('end-date')).toBeEmptyDOMElement()
      })
    })
  })

  describe('when initial and standard startDate and endDate props are provided', () => {
    beforeEach(() => {
      wrapper = render(
        <DatePickerE
          startDate={new Date('2022-01-01')}
          endDate={new Date('2022-02-28')}
          initialStartDate={new Date('2019-05-01')}
          initialEndDate={new Date('2019-06-31')}
          isRange
        />
      )
    })

    it('prioritises startDate and endDate over initialStartDate and initialEndDate', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
        '01/01/2022 - 28/02/2022'
      )
    })
  })
})
