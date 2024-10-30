import React from 'react'
import { act, render, RenderResult } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'

import { DatePicker, DatePickerOnChangeData } from '../index'
import { DATE_VALIDITY } from '../constants'

const NOW = '2019-12-05T11:00:00.000Z'

describe('when disabled days prop is provided', () => {
  let wrapper: RenderResult
  let user: ReturnType<(typeof userEvent)['setup']>
  const onChange = jest.fn<void, [DatePickerOnChangeData]>()

  beforeEach(async () => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))
    user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

    await act(async () => {
      wrapper = render(
        <DatePicker
          initialIsOpen
          onChange={onChange}
          initialStartDate={new Date(2020, 3, 1)}
          disabledDays={[new Date(2020, 3, 12)]}
        />
      )
    })
  })

  afterEach(() => {
    jest.useRealTimers()
    onChange.mockReset()
  })

  it('applies the disabled modifier class to the correct days', () => {
    expect(
      wrapper.getByRole('button', { name: '12th April (Sunday)' })
    ).toHaveClass('rdp-day_disabled')
  })

  describe('and a disabled day is clicked', () => {
    beforeEach(() => {
      const button = wrapper.getByRole('button', {
        name: '12th April (Sunday)',
      })

      return userEvent.click(button, {
        pointerEventsCheck: PointerEventsCheckLevel.Never,
        advanceTimers: jest.advanceTimersByTime,
      })
    })

    it('does not set the picker to that day', () => {
      expect(onChange).not.toHaveBeenCalled()
    })
  })

  describe('and a disabled day is typed', () => {
    beforeEach(() => {
      const input = wrapper.getByTestId('datepicker-input')
      return user.type(input, '{Control>}a{/Control}12/04/2020')
    })

    it('calls the `onChange` callback with the disabled date', async () => {
      expect(onChange).toHaveBeenLastCalledWith({
        startDate: new Date('2020-04-12T12:00:00.000Z'),
        startDateValidity: DATE_VALIDITY.DISABLED,
        endDate: new Date('2020-04-12T12:00:00.000Z'),
        endDateValidity: DATE_VALIDITY.DISABLED,
      })
    })
  })
})
