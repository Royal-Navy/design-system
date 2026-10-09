import React from 'react'
import { act, render, RenderResult } from '@testing-library/react'

import { DatePicker, DatePickerOnChangeData } from '../index'

const NOW = '2019-12-05T11:00:00.000Z'

describe('when today prop is set', () => {
  let wrapper: RenderResult
  const onChange = jest.fn<void, [DatePickerOnChangeData]>()

  beforeEach(async () => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))

    await act(async () => {
      wrapper = render(
        <DatePicker initialIsOpen today={new Date(2019, 11, 15)} />
      )
    })
  })

  afterEach(() => {
    jest.useRealTimers()
    onChange.mockReset()
  })

  it('marks the override date as today', () => {
    expect(wrapper.getByRole('gridcell', { name: '15' })).toHaveClass(
      'rdp-day_today'
    )
  })

  it('does not mark the actual current date as today', () => {
    expect(wrapper.getByRole('gridcell', { name: '5' })).not.toHaveClass(
      'rdp-day_today'
    )
  })
})
