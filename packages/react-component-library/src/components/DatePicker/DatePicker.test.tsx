import React, { useState } from 'react'
import '@testing-library/jest-dom/extend-expect'
import { ColorDanger600, ColorSuccess600 } from '@defencedigital/design-tokens'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import 'jest-styled-components'
import userEvent from '@testing-library/user-event'

import { DatePicker } from '.'
import { Button } from '../Button'

const NOW = '2019-12-05T11:00:00.000Z'
const ERROR_BORDER = `1px solid ${ColorDanger600}`

function click(element: HTMLElement) {
  fireEvent.mouseDown(element)
  fireEvent.click(element)
}

describe('DatePicker', () => {
  let wrapper: RenderResult
  let startDate: Date
  let label: string
  let onChange: (data: { startDate: Date; endDate: Date }) => void
  let onBlur: (e: React.FormEvent) => void
  let onCalendarFocus: (e: React.SyntheticEvent) => void
  let dateSpy: jest.SpyInstance
  let days: string[]
  let onSubmitSpy: (e: React.FormEvent) => void

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
    dateSpy = jest
      .spyOn(Date, 'now')
      .mockImplementation(() => new Date(NOW).valueOf())

    function leadingZero(n: number): string {
      return n > 9 ? `${n}` : `0${n}`
    }

    days = new Array(31).map((i) => leadingZero(i + 1)) // [01, 02, ..., 31]
  })

  describe('default props', () => {
    beforeEach(() => {
      startDate = new Date(2019, 11, 1)
      onChange = jest.fn()
      onBlur = jest.fn()
      onCalendarFocus = jest.fn()

      wrapper = render(
        <>
          <DatePicker
            startDate={startDate}
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
            ).not.toBeVisible()
          })
        })
      })
    })

    describe('when the end user focuses on the Input', () => {
      beforeEach(() => {
        wrapper.getByTestId('datepicker-input').focus()
      })

      it('shows the month', () => {
        expect(wrapper.queryByText('December 2019')).toBeInTheDocument()
      })

      it('displays the container', () => {
        return waitFor(() => {
          expect(wrapper.getByTestId('floating-box')).toBeVisible()
        })
      })

      describe('and clicks on a day', () => {
        beforeEach(() => {
          click(wrapper.getByText('31'))
        })

        it('set the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('31/12/2019')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-31T12:00:00.000Z'),
            endDate: new Date('2019-12-31T12:00:00.000Z'),
          })
        })

        it('hides the container', () => {
          return waitFor(() => {
            expect(wrapper.getByTestId('floating-box')).not.toBeVisible()
          })
        })
      })

      describe('and clicks outside the date picker', () => {
        beforeEach(() => {
          userEvent.click(wrapper.getByTestId('datepicker-outside'))
        })

        it('hides the day picker container', () => {
          return waitFor(() => {
            expect(
              wrapper.queryByTestId('floating-box-content')
            ).not.toBeVisible()
          })
        })

        describe('and the user focuses on the input', () => {
          beforeEach(() => {
            userEvent.click(wrapper.getByTestId('datepicker-input-button'))
          })

          it('shows the day picker container', () => {
            return waitFor(() => {
              expect(wrapper.getByTestId('floating-box')).toBeVisible()
            })
          })
        })
      })
    })

    describe('when the end user types a new date value', () => {
      describe('and the date value is valid', () => {
        describe('and the day/month use two digit format', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('datepicker-input')

            await userEvent.type(input, '{backspace}01/05/2016')
          })

          it('set the value of the component to this date', () => {
            expect(
              wrapper.getByTestId('datepicker-input').getAttribute('value')
            ).toBe('01/05/2016')
          })

          it('invokes the `onChange` callback', () => {
            expect(onChange).toHaveBeenCalledTimes(1)
            expect(onChange).toHaveBeenCalledWith({
              startDate: new Date('2016-05-01T12:00:00.000Z'),
              endDate: new Date('2016-05-01T12:00:00.000Z'),
            })
          })

          it('updates the selected day', () => {
            expect(wrapper.getByText('May 2016')).toBeInTheDocument()
            expect(wrapper.getByText('1')).toBeInTheDocument()
          })

          it('hides the day picker container', () => {
            return waitFor(() => {
              expect(wrapper.getByTestId('floating-box')).not.toBeVisible()
            })
          })

          describe('and the tab key is pressed', () => {
            beforeEach(async () => {
              wrapper.getByTestId('datepicker-input').focus()

              await userEvent.tab()
            })

            it('focuses the picker open/close button', () => {
              expect(
                wrapper.getByTestId('datepicker-input-button')
              ).toHaveFocus()
            })

            describe('and the space key is pressed', () => {
              beforeEach(async () => {
                const button = wrapper.getByTestId('datepicker-input-button')

                await userEvent.type(button, '{space}', { skipClick: true })
              })

              it('closes the picker container', () => {
                expect(
                  wrapper.getByTestId('datepicker-input-button')
                ).toHaveAttribute('aria-label', 'Show day picker')
              })
            })

            describe('and the tab  key is pressed again', () => {
              beforeEach(async () => {
                await userEvent.tab()
              })

              it('focuses the picker container', () => {
                expect(onCalendarFocus).toHaveBeenCalledTimes(1)
                // NOTE: `react-day-picker` internals from here on down
              })
            })
          })

          describe('and the return key is pressed', () => {
            beforeEach(async () => {
              const input = wrapper.getByTestId('datepicker-input')

              await userEvent.type(input, '{enter}')
            })

            it('hides the day picker container', () => {
              return waitFor(() => {
                expect(wrapper.getByTestId('floating-box')).not.toBeVisible()
              })
            })
          })

          describe('and clicks on a day', () => {
            beforeEach(() => {
              click(wrapper.getByText('31'))
            })

            it('set the value of the component to this date', () => {
              expect(
                wrapper.getByTestId('datepicker-input').getAttribute('value')
              ).toBe('31/05/2016')
            })

            it('invokes the onChange callback', () => {
              expect(onChange).toHaveBeenCalledTimes(2)
              expect(onChange).toHaveBeenCalledWith({
                startDate: new Date('2016-05-31T12:00:00.000Z'),
                endDate: new Date('2016-05-31T12:00:00.000Z'),
              })
              expect(onChange).toHaveBeenCalledWith({
                startDate: new Date('2016-05-01T12:00:00.000Z'),
                endDate: new Date('2016-05-01T12:00:00.000Z'),
              })
            })

            it('hides the day picker container', () => {
              return waitFor(() => {
                expect(wrapper.getByTestId('floating-box')).not.toBeVisible()
              })
            })
          })
        })

        describe('and the day/month use one digit format', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('datepicker-input')

            await userEvent.type(input, '{backspace}1/5/2016{enter}')
          })

          it('set the value of the component to this date', () => {
            expect(
              wrapper.getByTestId('datepicker-input').getAttribute('value')
            ).toBe('01/05/2016')
          })

          it('invokes the `onChange` callback', () => {
            expect(onChange).toHaveBeenCalledTimes(1)
            expect(onChange).toHaveBeenCalledWith({
              startDate: new Date('2016-05-01T12:00:00.000Z'),
              endDate: new Date('2016-05-01T12:00:00.000Z'),
            })
          })

          it('updates the selected day', () => {
            expect(wrapper.getByText('May 2016')).toBeInTheDocument()
            expect(wrapper.getByText('1')).toBeInTheDocument()
          })

          it('hides the day picker container', () => {
            expect(
              wrapper.getByTestId('datepicker-input-button')
            ).toHaveAttribute('aria-label', 'Show day picker')
          })
        })
      })

      describe('and the escape key is pressed', () => {
        beforeEach(async () => {
          const input = wrapper.getByTestId('datepicker-input')
          const newValue = '{backspace}20{esc}'

          await userEvent.type(input, newValue)
        })

        it('revert the value of the component to the original date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('01/12/2019')
        })

        it('not invoke the `onChange` callback', () => {
          expect(onChange).not.toHaveBeenCalled()
        })

        it('hides the day picker container', () => {
          expect(
            wrapper.getByTestId('datepicker-input-button')
          ).toHaveAttribute('aria-label', 'Show day picker')
        })
      })

      describe('and a date is partially entered', () => {
        describe('and a day is selected', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('datepicker-input')

            await userEvent.type(input, '{backspace}20')

            click(wrapper.getByText('21'))
          })

          it('set the value of the component to the selected date', () => {
            expect(
              wrapper.getByTestId('datepicker-input').getAttribute('value')
            ).toBe('21/12/2019')
          })

          it('invokes the `onChange` callback', () => {
            expect(onChange).toHaveBeenCalledTimes(1)
            expect(onChange).toHaveBeenCalledWith({
              startDate: new Date('2019-12-21T12:00:00.000Z'),
              endDate: new Date('2019-12-21T12:00:00.000Z'),
            })
          })
        })
      })

      describe('and the date value is invalid', () => {
        describe('when entering letters', () => {
          describe('and using the enter key', () => {
            beforeEach(async () => {
              const input = wrapper.getByTestId('datepicker-input')

              await userEvent.type(input, '{backspace}abcd{enter}')
            })

            it('not invoke the `onChange` callback', () => {
              expect(onChange).not.toHaveBeenCalled()
            })

            it('should be in an error state', () => {
              expect(
                wrapper.getByTestId('datepicker-outer-wrapper')
              ).toHaveStyleRule('border', ERROR_BORDER)
            })

            describe('and the escape key is pressed', () => {
              beforeEach(async () => {
                const input = wrapper.getByTestId('datepicker-input')

                await userEvent.type(input, '{esc}')
              })

              it('not invoke the `onChange` callback', () => {
                expect(onChange).not.toHaveBeenCalled()
              })

              it('should not be in an error state', () => {
                expect(
                  wrapper.getByTestId('datepicker-outer-wrapper')
                ).not.toHaveStyleRule('border', ERROR_BORDER)
              })
            })

            describe('and a valid date is entered', () => {
              beforeEach(async () => {
                const input = wrapper.getByTestId('datepicker-input')
                const newValue =
                  '{backspace}{backspace}{backspace}{backspace}01/03/2021{enter}'

                await userEvent.type(input, newValue)
              })

              it('invokes the `onChange` callback', () => {
                expect(onChange).toHaveBeenCalledTimes(1)
                expect(onChange).toHaveBeenCalledWith({
                  startDate: new Date('2021-03-01T12:00:00.000Z'),
                  endDate: new Date('2021-03-01T12:00:00.000Z'),
                })
              })

              it('should not be in an error state', () => {
                expect(
                  wrapper.getByTestId('datepicker-outer-wrapper')
                ).not.toHaveStyleRule('border', ERROR_BORDER)
              })
            })
          })

          describe('and tabbing', () => {
            beforeEach(async () => {
              const input = wrapper.getByTestId('datepicker-input')

              await userEvent.type(input, '{backspace}abcd')

              userEvent.tab()
            })

            it('not invoke the `onChange` callback', () => {
              expect(onChange).not.toHaveBeenCalled()
            })

            it('should be in an error state', () => {
              expect(
                wrapper.getByTestId('datepicker-outer-wrapper')
              ).toHaveStyleRule('border', ERROR_BORDER)
            })

            it('should call the `onBlur` callback', () => {
              expect(onBlur).toHaveBeenCalledTimes(1)
            })
          })

          describe('and the `input` loses `focus`', () => {
            beforeEach(async () => {
              const input = wrapper.getByTestId('datepicker-input')

              await userEvent.type(input, '{backspace}abcd')

              input.blur()
            })

            it('not invoke the `onChange` callback', () => {
              expect(onChange).not.toHaveBeenCalled()
            })

            it('should be in an error state', () => {
              expect(
                wrapper.getByTestId('datepicker-outer-wrapper')
              ).toHaveStyleRule('border', ERROR_BORDER)
            })

            it('should call the `onBlur` callback', () => {
              expect(onBlur).toHaveBeenCalledTimes(1)
            })
          })
        })

        describe('when using a two digit year', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('datepicker-input')

            await userEvent.type(input, '{backspace}12/12/20{enter}')
          })

          it('not invoke the `onChange` callback', () => {
            expect(onChange).not.toHaveBeenCalled()
          })

          it('should be in an error state', () => {
            expect(
              wrapper.getByTestId('datepicker-outer-wrapper')
            ).toHaveStyleRule('border', ERROR_BORDER)
          })
        })

        describe('when using a date that does not exist', () => {
          beforeEach(async () => {
            const input = wrapper.getByTestId('datepicker-input')

            await userEvent.type(input, '{backspace}15/15/20{enter}')
          })

          it('not invoke the `onChange` callback', () => {
            expect(onChange).not.toHaveBeenCalled()
          })

          it('should be in an error state', () => {
            expect(
              wrapper.getByTestId('datepicker-outer-wrapper')
            ).toHaveStyleRule('border', ERROR_BORDER)
          })
        })
      })

      describe('and the `input` loses `focus`', () => {
        beforeEach(async () => {
          const input = wrapper.getByTestId('datepicker-input')

          await userEvent.type(input, '{backspace}01/05/2016')

          input.blur()
        })

        it('set the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('01/05/2016')
        })

        it('invokes the `onChange` callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2016-05-01T12:00:00.000Z'),
            endDate: new Date('2016-05-01T12:00:00.000Z'),
          })
        })

        it('updates the selected day', () => {
          expect(wrapper.getByText('May 2016')).toBeInTheDocument()
          expect(wrapper.getByText('1')).toBeInTheDocument()
        })
      })
    })
  })

  describe('when a custom label is provided', () => {
    beforeEach(() => {
      label = 'Custom Label'

      wrapper = render(<DatePicker label={label} />)
    })

    it('renders that label accordingly', () => {
      expect(wrapper.getByTestId('datepicker-label').innerHTML).toBe(label)
    })
  })

  describe('when isDisabled prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePicker isDisabled />)
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

  describe('when selecting a date range', () => {
    beforeEach(() => {
      onChange = jest.fn()
      wrapper = render(
        <DatePicker
          startDate={new Date(2019, 11, 10)}
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

    describe('when the end user focuses on the Input', () => {
      beforeEach(() => {
        wrapper.getByTestId('datepicker-input').focus()
      })

      describe('and clicks on a day in the first month', () => {
        beforeEach(() => {
          click(wrapper.getAllByText('31')[0])
        })

        it('set the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('10/12/2019 - 31/12/2019')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-10T00:00:00.000Z'),
            endDate: new Date('2019-12-31T12:00:00.000Z'),
          })
        })
      })

      describe('and clicks on days in the second month', () => {
        beforeEach(() => {
          click(wrapper.getAllByText('20')[1])
        })

        it('set the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('10/12/2019 - 20/01/2020')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-10T00:00:00.000Z'),
            endDate: new Date('2020-01-20T12:00:00.000Z'),
          })
        })

        describe('and clicks on another day', () => {
          beforeEach(() => {
            click(wrapper.getAllByText('3')[0])
          })

          it('reset the value of the component to this date', () => {
            expect(
              wrapper.getByTestId('datepicker-input').getAttribute('value')
            ).toBe('03/12/2019')
          })

          it('invokes the onChange callback', () => {
            expect(onChange).toHaveBeenCalledTimes(2)
            expect(onChange).toHaveBeenCalledWith({
              startDate: new Date('2019-12-03T12:00:00.000Z'),
              endDate: undefined,
            })
          })
        })
      })

      describe('and clicks on a less than the first', () => {
        beforeEach(() => {
          click(wrapper.getAllByText('9')[0])
        })

        it('reset the value of the component to this date', () => {
          expect(
            wrapper.getByTestId('datepicker-input').getAttribute('value')
          ).toBe('09/12/2019')
        })

        it('invokes the onChange callback', () => {
          expect(onChange).toHaveBeenCalledTimes(1)
          expect(onChange).toHaveBeenCalledWith({
            startDate: new Date('2019-12-09T12:00:00.000Z'),
            endDate: undefined,
          })
        })
      })
    })
  })

  describe('when the isOpen prop is provided', () => {
    beforeEach(() => {
      wrapper = render(<DatePicker isOpen />)
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
          <DatePicker />
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
      wrapper = render(<DatePicker isDisabled />)
    })

    it('sets the disabled attribute correctly for the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'disabled'
      )
    })
  })

  describe('when the `disabledDays` prop is provided', () => {
    beforeEach(() => {
      onChange = jest.fn()

      wrapper = render(
        <DatePicker
          isOpen
          onChange={onChange}
          startDate={new Date(2020, 3, 1)}
          disabledDays={[new Date(2020, 3, 12)]}
        />
      )
    })

    it('applies the disabled modifier class to the correct days', () => {
      expect(wrapper.getByText('12')).toHaveClass('DayPicker-Day--disabled')
    })

    describe('and a disabled day is clicked', () => {
      beforeEach(() => {
        click(wrapper.getByText('12'))
      })

      it('does not set the picker to that day', () => {
        expect(onChange).not.toHaveBeenCalled()
      })
    })

    describe('and a disabled day is typed', () => {
      beforeEach(async () => {
        const input = wrapper.getByTestId('datepicker-input')

        await userEvent.type(input, '{backspace}12/04/2020{enter}')
      })

      it('does not set the picker to that day', () => {
        expect(onChange).not.toHaveBeenCalled()
      })

      it('should be in an error state', () => {
        expect(wrapper.getByTestId('datepicker-outer-wrapper')).toHaveStyleRule(
          'border',
          ERROR_BORDER
        )
      })
    })
  })

  describe('when the `initialMonth` prop is provided and no `startDate`', () => {
    beforeEach(() => {
      wrapper = render(<DatePicker isOpen initialMonth={new Date(2020, 1)} />)
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
      wrapper = render(<DatePicker data-arbitrary="arbitrary" />)
    })

    it('sets the disabled attribute correctly for the input', () => {
      expect(wrapper.getByTestId('datepicker-input')).toHaveAttribute(
        'data-arbitrary',
        'arbitrary'
      )
    })
  })

  describe('when form validation classes are provided', () => {
    describe('when the field is valid', () => {
      beforeEach(() => {
        wrapper = render(<DatePicker className="is-valid" />)
      })

      it('should set the border on the outer wrapper', () => {
        expect(wrapper.getByTestId('datepicker-outer-wrapper')).toHaveStyleRule(
          'border',
          `1px solid ${ColorSuccess600}`
        )
      })
    })

    describe('when the field is invalid', () => {
      beforeEach(() => {
        wrapper = render(<DatePicker className="is-invalid" />)
      })

      it('should set the border on the outer wrapper', () => {
        expect(wrapper.getByTestId('datepicker-outer-wrapper')).toHaveStyleRule(
          'border',
          ERROR_BORDER
        )
      })
    })
  })

  describe('when `format` is specified', () => {
    beforeEach(() => {
      onChange = jest.fn()

      wrapper = render(
        <DatePicker
          format="yyyy/MM/dd"
          startDate={new Date(2018, 0, 11)}
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
      beforeEach(async () => {
        const input = wrapper.getByTestId('datepicker-input')

        userEvent.type(input, `2016/02/03{enter}`)
      })

      it('invokes the `onChange` callback', () => {
        const expectedDate = new Date('2016-02-03T12:00:00.000Z')
        expect(onChange).toHaveBeenCalledTimes(1)
        expect(onChange).toHaveBeenCalledWith({
          startDate: expectedDate,
          endDate: expectedDate,
        })
      })

      it("isn't in an error state", () => {
        expect(
          wrapper.getByTestId('datepicker-outer-wrapper')
        ).not.toHaveStyleRule('border', ERROR_BORDER)
      })
    })

    describe.each(['201/01/01', '02/03/2021'])(
      'when the invalid date %s is typed',
      (date) => {
        let input: HTMLElement

        beforeEach(async () => {
          input = wrapper.getByTestId('datepicker-input')

          userEvent.type(input, date)
        })

        describe.each([
          ['enter', () => userEvent.type(input, '{enter}')],
          ['tab', () => userEvent.tab()],
        ])('and %s is pressed', (_, commitValue) => {
          beforeEach(() => {
            commitValue()
          })

          it("doesn't call the `onChange` callback", () => {
            expect(onChange).not.toHaveBeenCalled()
          })

          it('is in an error state', () => {
            expect(
              wrapper.getByTestId('datepicker-outer-wrapper')
            ).toHaveStyleRule('border', ERROR_BORDER)
          })
        })
      }
    )
  })

  describe('when `startDate` and `endDate` are updated externally', () => {
    beforeEach(() => {
      const initialProps = {
        startDate: new Date(2021, 11, 1),
        endDate: new Date(2021, 11, 2),
      }
      const update1Props = {
        ...initialProps,
        startDate: new Date(2022, 11, 1),
      }
      const update2Props = {
        ...update1Props,
        endDate: new Date(2022, 11, 2),
      }

      const DatePickerWithUpdate = () => {
        const [props, updateProps] = useState(initialProps)

        return (
          <>
            <Button onClick={() => updateProps(update1Props)}>Update 1</Button>
            <Button onClick={() => updateProps(update2Props)}>Update 2</Button>
            <DatePicker {...props} isRange />
          </>
        )
      }

      wrapper = render(<DatePickerWithUpdate />)

      wrapper.getByText('Update 1').click()
      wrapper.getByText('Update 2').click()
    })

    it('set the value of the component to this date', () => {
      return waitFor(() => {
        expect(
          wrapper.getByTestId('datepicker-input').getAttribute('value')
        ).toBe('01/12/2022 - 02/12/2022')
      })
    })
  })
})
