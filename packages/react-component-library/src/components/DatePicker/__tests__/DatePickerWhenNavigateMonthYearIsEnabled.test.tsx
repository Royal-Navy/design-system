import React from 'react'
import { render, RenderResult } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { DatePicker, DatePickerOnChangeData } from '../index'

const NOW = '2019-12-05T11:00:00.000Z'

describe('when navigate month year is enabled', () => {
  let wrapper: RenderResult
  let user: ReturnType<(typeof userEvent)['setup']>
  const onChange = jest.fn<void, [DatePickerOnChangeData]>()

  beforeEach(async () => {
    jest.useFakeTimers()
    jest.setSystemTime(Date.parse(NOW))
    user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })

    wrapper = render(
      <DatePicker
        navigateMonthYear
        startDate={new Date('2022-01-18T00:00:00Z')}
      />
    )

    await user.click(wrapper.getByTestId('datepicker-input-button'))
  })

  afterEach(() => {
    jest.useRealTimers()
    onChange.mockReset()
  })

  it('displays the current month', () => {
    expect(wrapper.getByText('January 2022')).toBeInTheDocument()
  })

  describe('navigate previous month', () => {
    let button: HTMLElement | null

    beforeEach(() => {
      button = wrapper
        .getByLabelText('Navigate to previous month')
        .closest('button')
      user.click(button!)
    })

    it('displays the previous month', () => {
      expect(wrapper.getByText('December 2021')).toBeInTheDocument()
    })

    it('and ARIA label is set', () => {
      expect(button).toHaveAttribute('aria-label', 'Navigate to previous month')
    })
  })

  describe('navigate next month', () => {
    let button: HTMLElement | null

    beforeEach(() => {
      button = wrapper
        .getByLabelText('Navigate to next month')
        .closest('button')
      user.click(button!)
    })

    it('displays the next month', () => {
      expect(wrapper.getByText('February 2022')).toBeInTheDocument()
    })

    it('and ARIA label is set', () => {
      expect(button).toHaveAttribute('aria-label', 'Navigate to next month')
    })
  })

  describe('when clicking on month', () => {
    let button: HTMLElement | null

    beforeEach(() => {
      button = wrapper.getByText('JAN').closest('button')
      user.click(button!)
    })

    it('displays the months grid', () => {
      expect(wrapper.getByText('MAR')).toBeInTheDocument()
    })

    it('and ARIA label is set', () => {
      expect(button).toHaveAttribute(
        'aria-label',
        'Toggle months grid to select a month'
      )
    })

    describe('when selecting a month', () => {
      beforeEach(() => {
        user.click(wrapper.getByText('MAR'))
      })

      it('selects a new month', () => {
        expect(wrapper.getByText('March 2022')).toBeInTheDocument()
      })
    })
  })

  describe('when clicking on year', () => {
    let button: HTMLElement | null

    beforeEach(() => {
      button = wrapper.getByText('2022').closest('button')
      user.click(button!)
    })

    it('displays the months grid', () => {
      expect(wrapper.getByText('2027')).toBeInTheDocument()
    })

    it('and ARIA label is set', () => {
      expect(button).toHaveAttribute(
        'aria-label',
        'Toggle years grid to select a year'
      )
    })

    describe('when selecting a year', () => {
      beforeEach(() => {
        user.click(wrapper.getByText('2027'))
      })

      it('selects a new year', () => {
        expect(wrapper.getByText('January 2027')).toBeInTheDocument()
      })
    })

    describe('navigate to previous decade', () => {
      let decade: HTMLElement | null

      beforeEach(() => {
        decade = wrapper
          .getByLabelText('Navigate to previous decade')
          .closest('button')
        user.click(decade!)
      })

      it('displays the previous decade', () => {
        expect(wrapper.getByText('2010')).toBeInTheDocument()
      })
    })

    describe('navigate to next decade', () => {
      let decade: HTMLElement | null

      beforeEach(() => {
        decade = wrapper
          .getByLabelText('Navigate to next decade')
          .closest('button')
        user.click(decade!)
      })

      it('displays the next decade', () => {
        expect(wrapper.getByText('2032')).toBeInTheDocument()
      })
    })
  })
})
