import React from 'react'
import { render, RenderResult, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DatePicker, DatePickerOnChangeData } from '../index'

const NOW = '2019-12-05T11:00:00.000Z'

describe('when jump to today is enabled', () => {
  let wrapper: RenderResult
  let user: ReturnType<(typeof userEvent)['setup']>
  let button: HTMLElement
  const onChange = jest.fn<void, [DatePickerOnChangeData]>()

  beforeEach(async () => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))
    user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

    wrapper = render(<DatePicker jumpToToday />)

    button = wrapper.getByTestId('datepicker-input-button')
    await user.click(button)
  })

  afterEach(() => {
    jest.useRealTimers()
    onChange.mockReset()
  })

  it('displays Jump to today button', () => {
    expect(wrapper.getByText('Jump to today')).toBeInTheDocument()
  })

  describe('when jumpToToday is clicked', () => {
    beforeEach(() => {
      user.click(wrapper.getByText('Jump to today'))
    })

    it('closes popup', () => {
      waitFor(() => {
        expect(
          wrapper.queryByTestId('floating-box-content')
        ).not.toBeInTheDocument()
      })
    })
  })
})
