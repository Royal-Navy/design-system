import React from 'react'
import { act, render, screen } from '@testing-library/react'
import userEvent, { PointerEventsCheckLevel } from '@testing-library/user-event'

import { DatePicker, DatePickerOnChangeData } from '../index'
import { DATE_VALIDITY } from '../constants'

const NOW = '2019-12-05T11:00:00.000Z'

describe('when disabled days prop is provided', () => {
  let user: ReturnType<(typeof userEvent)['setup']>
  const onChange = jest.fn<void, [DatePickerOnChangeData]>()

  beforeAll(() => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))
  })

  afterAll(() => {
    jest.useRealTimers()
  })

  beforeEach(() => {
    onChange.mockReset()
    user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
  })

  describe('with Matcher[]', () => {
    beforeEach(async () => {
      await act(async () => {
        render(
          <DatePicker
            initialIsOpen
            onChange={onChange}
            initialStartDate={new Date(2020, 3, 1)}
            disabledDays={[
              new Date(2020, 3, 12),
              { from: new Date(2020, 3, 15), to: new Date(2020, 3, 17) },
              { dayOfWeek: [0, 6] },
              (date: Date) => date.getDate() === 20,
            ]}
          />
        )
      })
    })

    it('disables dates based on matcher array', () => {
      expect(screen.getByRole('gridcell', { name: '12' })).toHaveClass(
        'rdp-day_disabled'
      )
      expect(screen.getByRole('gridcell', { name: '16' })).toHaveClass(
        'rdp-day_disabled'
      )
      expect(screen.getByRole('gridcell', { name: '5' })).toHaveClass(
        'rdp-day_disabled'
      )
      expect(screen.getByRole('gridcell', { name: '20' })).toHaveClass(
        'rdp-day_disabled'
      )
      expect(screen.getByRole('gridcell', { name: '14' })).not.toHaveClass(
        'rdp-day_disabled'
      )
    })

    describe('and a disabled day is clicked', () => {
      beforeEach(async () => {
        const button = screen.getByRole('gridcell', { name: '12' })
        await userEvent.click(button, {
          pointerEventsCheck: PointerEventsCheckLevel.Never,
          advanceTimers: jest.advanceTimersByTime,
        })
      })

      it('does not call the `onChange` callback', () => {
        expect(onChange).not.toHaveBeenCalled()
      })
    })

    describe('and a disabled day is typed', () => {
      beforeEach(async () => {
        const input = screen.getByTestId('datepicker-input')
        await user.type(input, '{Control>}a{/Control}12/04/2020')
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

  describe('with single Matcher', () => {
    describe('with today disabled and jumpToToday clicked', () => {
      beforeEach(async () => {
        await act(async () => {
          render(
            <DatePicker
              jumpToToday
              initialIsOpen
              onChange={onChange}
              initialStartDate={new Date(2020, 3, 1)}
              disabledDays={new Date(NOW)}
            />
          )
        })

        await user.click(screen.getByRole('button', { name: 'Jump to today' }))
      })

      it('does not set the picker to today', () => {
        expect(onChange).not.toHaveBeenCalled()
      })
    })

    describe('with date range', () => {
      beforeEach(async () => {
        await act(async () => {
          render(
            <DatePicker
              initialIsOpen
              onChange={onChange}
              initialStartDate={new Date(2020, 3, 1)}
              disabledDays={{
                from: new Date(2020, 3, 10),
                to: new Date(2020, 3, 15),
              }}
            />
          )
        })
      })

      it('disables days within the range', () => {
        expect(screen.getByRole('gridcell', { name: '9' })).not.toHaveClass(
          'rdp-day_disabled'
        )
        expect(screen.getByRole('gridcell', { name: '10' })).toHaveClass(
          'rdp-day_disabled'
        )
        expect(screen.getByRole('gridcell', { name: '15' })).toHaveClass(
          'rdp-day_disabled'
        )
        expect(screen.getByRole('gridcell', { name: '16' })).not.toHaveClass(
          'rdp-day_disabled'
        )
      })
    })
  })
})
