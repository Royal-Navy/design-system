import React from 'react'
import { render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DatePicker, DatePickerOnChangeData } from '../index'

const NOW = '2019-12-05T11:00:00.000Z'
const PREVIOUS_MONTH_BUTTON_LABEL = 'Go to previous month'
const NEXT_MONTH_BUTTON_LABEL = 'Go to next month'

describe('when single DatePicker is rendered and opened', () => {
  let wrapper: RenderResult
  let user: ReturnType<(typeof userEvent)['setup']>
  const onChange = jest.fn<void, [DatePickerOnChangeData]>()

  beforeEach(async () => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))
    user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

    wrapper = render(<DatePicker />)

    await user.click(wrapper.getByTestId('datepicker-input-button'))
  })

  afterEach(() => {
    jest.useRealTimers()
    onChange.mockReset()
  })

  it('displays the current month', () => {
    expect(wrapper.getByText('December 2019')).toBeInTheDocument()
  })

  it('focuses the current date', () => {
    expect(
      wrapper.getByRole('button', { name: '5th December (Thursday)' })
    ).toHaveFocus()
  })

  describe('when Shift-Tab is pressed once', () => {
    beforeEach(async () => {
      await user.tab({ shift: true })
    })

    it('traps the focus within the picker', () => {
      expect(wrapper.getByLabelText(NEXT_MONTH_BUTTON_LABEL)).toHaveFocus()
    })

    describe('and Tab is then pressed once', () => {
      beforeEach(() => {
        return user.tab()
      })

      it('still traps the focus within the picker', () => {
        expect(
          wrapper.getByRole('button', { name: '5th December (Thursday)' })
        ).toHaveFocus()
      })
    })
  })

  describe.each([
    {
      name: 'previous month button',
      selector: () => wrapper.getByLabelText(PREVIOUS_MONTH_BUTTON_LABEL),
    },
    {
      name: 'day picker day',
      selector: () =>
        wrapper.getByRole('button', { name: '10th December (Tuesday)' }),
    },
  ])('when the escape key is pressed in $name', ({ selector }) => {
    beforeEach(() => {
      return user.type(selector(), '{Escape}')
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
      return user.click(wrapper.getByLabelText(NEXT_MONTH_BUTTON_LABEL))
    })

    it('displays the next month', () => {
      expect(wrapper.getByText('January 2020')).toBeInTheDocument()
    })

    describe('when the first day is clicked', () => {
      beforeEach(() => {
        return user.click(wrapper.getByText('1'))
      })

      it('updates the input value', () => {
        expect(wrapper.getByTestId('datepicker-input')).toHaveValue(
          '01/01/2020'
        )
      })

      it('closes the picker', () => {
        return waitFor(() => {
          expect(wrapper.queryByTestId('floating-box')).not.toBeInTheDocument()
        })
      })

      it('focuses the open/close button', () => {
        return waitFor(() =>
          expect(wrapper.queryByTestId('datepicker-input-button')).toHaveFocus()
        )
      })

      describe('when the picker is reopened', () => {
        beforeEach(async () => {
          // Does not use `user` due to https://github.com/testing-library/user-event/issues/922
          await userEvent.click(
            wrapper.getByTestId('datepicker-input-button'),
            { advanceTimers: jest.advanceTimersByTime }
          )
        })

        it('opens the picker on the previously selected month', () => {
          expect(wrapper.getByText('January 2020')).toBeInTheDocument()
        })
      })
    })
  })
})
