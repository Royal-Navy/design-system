import { IconChevronLeft, IconChevronRight } from '@royalnavy/icon-library'
import React, { useState } from 'react'
import range from 'lodash/range'

import { BUTTON_VARIANT } from '../Button'
import { CALENDAR_TABLE_VARIANT, type CalendarTableVariant } from './constants'
import {
  StyledButtonArrows,
  StyledCalendarContainer,
  StyledCalendarTable,
  StyledCalendarTiles,
  StyledNavigation,
  StyledYearsTitle,
} from './partials/StyledCalendarNavigation'

interface CalendarTableProps {
  month: Date
  variant: CalendarTableVariant
  onMonthClick: (month: number) => void
  onYearClick: (year: number) => void
}

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

const getDecadeYears = (year: number) => {
  const decadeStart = Math.floor(year / 10) * 10 - 1
  return range(decadeStart, decadeStart + 12)
}

const MonthsView = ({
  month,
  onMonthClick,
}: Pick<CalendarTableProps, 'month' | 'onMonthClick'>) => {
  const currentMonth = new Date().getMonth()
  const selectedMonth = month.getMonth()

  return (
    <StyledCalendarTable $isMonths>
      {MONTHS.map((label, index) => (
        <StyledCalendarTiles
          key={label}
          aria-label={`Select ${label}`}
          $isCurrent={index === currentMonth}
          $isSelected={index === selectedMonth}
          onClick={() => onMonthClick(index)}
        >
          {label}
        </StyledCalendarTiles>
      ))}
    </StyledCalendarTable>
  )
}

const YearsView = ({
  month,
  onYearClick,
}: Pick<CalendarTableProps, 'month' | 'onYearClick'>) => {
  const currentYear = new Date().getFullYear()
  const selectedYear = month.getFullYear()
  const [years, setYears] = useState(() => getDecadeYears(selectedYear))

  return (
    <>
      <StyledNavigation>
        <StyledButtonArrows
          aria-label="Navigate to previous decade"
          icon={<IconChevronLeft />}
          onClick={() => setYears(getDecadeYears(years[0]))}
          title="Navigate to previous decade"
          variant={BUTTON_VARIANT.TERTIARY}
        />
        <StyledYearsTitle>{`${years[1]} - ${years[11]}`}</StyledYearsTitle>
        <StyledButtonArrows
          aria-label="Navigate to next decade"
          icon={<IconChevronRight />}
          onClick={() => setYears(getDecadeYears(years[11]))}
          title="Navigate to next decade"
          variant={BUTTON_VARIANT.TERTIARY}
        />
      </StyledNavigation>
      <StyledCalendarTable $isYears>
        {years.map((year) => (
          <StyledCalendarTiles
            aria-label={`Select ${year}`}
            $isCurrent={year === currentYear}
            $isSelected={year === selectedYear}
            key={year}
            onClick={() => onYearClick(year)}
          >
            {year}
          </StyledCalendarTiles>
        ))}
      </StyledCalendarTable>
    </>
  )
}

export const CalendarTable = ({
  variant,
  month,
  onMonthClick,
  onYearClick,
}: CalendarTableProps) => {
  return (
    <StyledCalendarContainer>
      {variant === CALENDAR_TABLE_VARIANT.MONTHS && (
        <MonthsView month={month} onMonthClick={onMonthClick} />
      )}
      {variant === CALENDAR_TABLE_VARIANT.YEARS && (
        <YearsView month={month} onYearClick={onYearClick} />
      )}
    </StyledCalendarContainer>
  )
}
