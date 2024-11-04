import { color } from '@royalnavy/design-tokens'
import { render, screen } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'

import { DatePicker, DatePickerOnChangeData } from '../index'

const NOW = '2019-12-05T11:00:00.000Z'

let user: ReturnType<(typeof userEvent)['setup']>
const onChange = jest.fn<void, [DatePickerOnChangeData]>()
const defaultStartDate = new Date('2022-01-18T00:00:00Z')

const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

const setup = async ({
  selectedDate = defaultStartDate,
}: {
  selectedDate?: Date
} = {}) => {
  return render(
    <DatePicker
      navigateMonthYear
      startDate={selectedDate}
      onChange={onChange}
    />
  )
}

beforeEach(() => {
  jest.useFakeTimers()
  jest.setSystemTime(Date.parse(NOW))
  user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime })
})

afterEach(() => {
  jest.useRealTimers()
  onChange.mockReset()
})

it('renders the grid of months', async () => {
  await setup()
  await user.click(screen.getByTestId('datepicker-input-button'))

  const monthToggle = screen.getByRole('button', {
    name: /show month picker/i,
  })
  await user.click(monthToggle)

  MONTHS.forEach((month) => {
    const monthButton = screen.getByRole('button', {
      name: `Select ${month}`,
    })
    expect(monthButton).toBeInTheDocument()
  })
})

it('renders the grid of years', async () => {
  await setup()
  await user.click(screen.getByTestId('datepicker-input-button'))

  const yearToggle = screen.getByRole('button', {
    name: /show year picker/i,
  })
  await user.click(yearToggle)

  const expectedYears = [
    2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030,
  ]

  expectedYears.forEach((year) => {
    const yearButton = screen.getByRole('button', {
      name: `Select ${year}`,
    })
    expect(yearButton).toBeInTheDocument()
  })
})

it('applies correct styles to current and selected month', async () => {
  const today = new Date(NOW)
  const selectedDate = new Date('2019-11-10T11:00:00.000Z')

  await setup({ selectedDate })

  await user.click(screen.getByTestId('datepicker-input-button'))

  const monthToggle = screen.getByRole('button', {
    name: /show month picker/i,
  })
  await user.click(monthToggle)

  const currentMonth = screen.getByRole('button', {
    name: `Select ${MONTHS[today.getMonth()]}`,
  })
  const selectedMonth = screen.getByRole('button', {
    name: `Select ${MONTHS[selectedDate.getMonth()]}`,
  })

  expect(currentMonth).toHaveStyleRule('color', color('warning', '800'))

  expect(selectedMonth).toHaveStyleRule(
    'background-color',
    color('action', '700')
  )
  expect(selectedMonth).toHaveStyleRule('color', color('neutral', 'white'))
})

it('applies correct styles to current and selected year', async () => {
  const today = new Date(NOW)
  const selectedDate = new Date('2018-11-10T11:00:00.000Z')

  await setup({ selectedDate })

  await user.click(screen.getByTestId('datepicker-input-button'))

  const yearToggle = screen.getByRole('button', {
    name: /show year picker/i,
  })
  await user.click(yearToggle)

  const currentYear = screen.getByRole('button', {
    name: `Select ${today.getFullYear()}`,
  })
  const selectedYear = screen.getByRole('button', {
    name: `Select ${selectedDate.getFullYear()}`,
  })

  expect(currentYear).toHaveStyleRule('color', color('warning', '800'))

  expect(selectedYear).toHaveStyleRule(
    'background-color',
    color('action', '700')
  )
  expect(selectedYear).toHaveStyleRule('color', color('neutral', 'white'))
})

it('displays the initial month and allows navigation', async () => {
  await setup()
  await user.click(screen.getByTestId('datepicker-input-button'))

  expect(screen.getByText('January 2022')).toBeInTheDocument()

  const prevButton = screen.getByRole('button', {
    name: /navigate to previous month/i,
  })
  const nextButton = screen.getByRole('button', {
    name: /navigate to next month/i,
  })

  await user.click(prevButton)
  expect(screen.getByText('December 2021')).toBeInTheDocument()

  await user.click(nextButton)
  await user.click(nextButton)
  expect(screen.getByText('February 2022')).toBeInTheDocument()
})

it('allows selecting a month from the grid', async () => {
  await setup()
  await user.click(screen.getByTestId('datepicker-input-button'))

  const monthToggle = screen.getByRole('button', {
    name: /show month picker/i,
  })
  await user.click(monthToggle)

  expect(screen.getByText('Mar')).toBeInTheDocument()
  await user.click(screen.getByText('Mar'))

  expect(screen.getByText('March 2022')).toBeInTheDocument()
})

it('allows selecting a year and navigating decades', async () => {
  await setup()
  await user.click(screen.getByTestId('datepicker-input-button'))

  const yearToggle = screen.getByRole('button', {
    name: /show year picker/i,
  })
  await user.click(yearToggle)

  expect(screen.getByText('2027')).toBeInTheDocument()

  const prevDecade = screen.getByRole('button', {
    name: /navigate to previous decade/i,
  })
  await user.click(prevDecade)
  expect(screen.getByText('2010')).toBeInTheDocument()

  const nextDecade = screen.getByRole('button', {
    name: /navigate to next decade/i,
  })
  await user.click(nextDecade)
  await user.click(nextDecade)
  expect(screen.getByText('2032')).toBeInTheDocument()
})
