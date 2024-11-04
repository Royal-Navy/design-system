import React from 'react'
import { ColorWarning800 } from '@royalnavy/design-tokens'
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

  it('colours the override date', () => {
    expect(
      wrapper.getByRole('button', { name: '15th December (Sunday)' })
    ).toHaveStyle({
      color: ColorWarning800,
    })
  })

  it('does not colour the actual current date', () => {
    expect(
      wrapper.getByRole('button', { name: '5th December (Thursday)' })
    ).not.toHaveStyle({
      color: ColorWarning800,
    })
  })
})
