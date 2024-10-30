import React from 'react'
import {
  fireEvent,
  render,
  RenderResult,
  waitFor,
} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DatePicker, DatePickerOnChangeData } from '../index'
import { DATE_VALIDITY } from '../constants'

const NOW = '2019-12-05T11:00:00.000Z'

describe('when selecting a date range', () => {
  let wrapper: RenderResult
  let user: ReturnType<(typeof userEvent)['setup']>
  let datePickerInput: HTMLElement
  const onChange = jest.fn<void, [DatePickerOnChangeData]>()

  beforeEach(() => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))
    user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

    wrapper = render(
      <DatePicker
        initialStartDate={new Date(2019, 11, 10)}
        onChange={onChange}
        isRange
      />
    )

    datePickerInput = wrapper.getByTestId('datepicker-input')
  })

  afterEach(() => {
    jest.useRealTimers()
    onChange.mockReset()
  })

  it('should set the `readonly` attribute on the `input`', () => {
    expect(datePickerInput).toHaveAttribute('readonly', '')
  })

  it('does not render the `input` with the `placeholder` attribute', () => {
    expect(datePickerInput).not.toHaveAttribute('placeholder')
  })

  describe('when the end user clicks on the Input', () => {
    beforeEach(() => {
      return user.click(datePickerInput)
    })

    it('opens the day picker', () => {
      return waitFor(() => {
        expect(wrapper.getByTestId('floating-box')).toBeVisible()
      })
    })

    describe('and hovers over a second date', () => {
      beforeEach(() => {
        return user.hover(wrapper.getByText('13'))
      })

      it('shades the date range', () => {
        expect(
          wrapper.getAllByText(/^10|11|12|13$/, {
            selector: '.rdp-day_selected',
            ignore: '[class=rdp-vhidden]',
          })
        ).toHaveLength(4)
      })

      it("doesn't shade dates outside the range", () => {
        expect(
          wrapper.queryAllByText(/^(?!(10|11|12|13))\d\d$/, {
            selector: '.rdp-day_selected',
          })
        ).toHaveLength(0)
      })

      describe('and unhovers the second date', () => {
        beforeEach(() => {
          return user.unhover(wrapper.getByText('13'))
        })

        it('does not shade any additional days', () => {
          expect(
            wrapper.container.querySelectorAll('.rdp-day_selected')
          ).toHaveLength(1)
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
            selector: '.rdp-day_selected',
            ignore: '[class=rdp-vhidden]',
          })
        ).toHaveLength(4)
      })

      it("doesn't shade dates outside the range", () => {
        expect(
          wrapper.queryAllByText(/^(?!(10|11|12|13))\d\d$/, {
            selector: '.rdp-day_selected',
          })
        ).toHaveLength(0)
      })
    })

    describe('and clicks on a second date', () => {
      beforeEach(() => {
        return user.click(wrapper.getByText('20'))
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
        return user.click(wrapper.getByText('9'))
      })

      it('closes the day picker', () => {
        return waitFor(() => {
          expect(wrapper.queryByTestId('floating-box')).not.toBeInTheDocument()
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
