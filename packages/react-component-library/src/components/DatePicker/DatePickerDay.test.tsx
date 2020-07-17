import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, RenderResult } from '@testing-library/react'

import { DatePickerDay } from './DatePickerDay'

describe('DatePickerDay', () => {
  let wrapper: RenderResult
  let dayLabel: string
  let date: Date

  describe('provided a dayLabel and date object', () => {
    beforeEach(() => {
      dayLabel = '01'
      date = new Date()

      wrapper = render(<DatePickerDay dayLabel={dayLabel} date={date} />)
    })

    it('renders a button element with the correct inner text', () => {
      expect(wrapper.queryByText(dayLabel)).not.toBeNull()
    })
  })

  describe('is not provided a dayLabel', () => {
    beforeEach(() => {
      date = new Date()

      wrapper = render(<DatePickerDay date={date} />)
    })

    it('renders an empty div', () => {
      expect(wrapper.queryByTestId('datepicker-empty-day')).not.toBeNull()
    })
  })
})
