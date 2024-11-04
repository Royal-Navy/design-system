import { IconChevronLeft, IconChevronRight } from '@royalnavy/icon-library'
import { setMonth as changeMonth, setYear as changeYear } from 'date-fns/fp'
import React, { useState, Dispatch, SetStateAction } from 'react'

import { BUTTON_VARIANT } from '../Button'
import { CALENDAR_TABLE_VIEW, type CalendarTableView } from './constants'
import { DATEPICKER_ACTION, type DatePickerAction } from './types'
import {
  StyledButtonArrows,
  StyledCalendarContainer,
  StyledCalendarTable,
  StyledCalendarTiles,
  StyledNavigation,
  StyledYearsTitle,
} from './partials/StyledCalendarNavigation'

interface CalendarTableProps {
  calendarTable: CalendarTableView
  dispatch: Dispatch<DatePickerAction>
  month: Date
  setCalendarTable: Dispatch<SetStateAction<CalendarTableView>>
}

const MONTHS = [
  'JAN',
  'FEB',
  'MAR',
  'APR',
  'MAY',
  'JUN',
  'JUL',
  'AUG',
  'SEP',
  'OCT',
  'NOV',
  'DEC',
]

const getDecade = (year: number) =>
  Array.from({ length: 12 }, (_, i) => Math.floor(year / 10) * 10 + i - 1)

const MonthsView = ({
  month,
  dispatch,
  setCalendarTable,
}: Pick<CalendarTableProps, 'month' | 'dispatch' | 'setCalendarTable'>) => {
  const currentMonth = new Date().getMonth()
  const selectedMonth = month.getMonth()

  return (
    <StyledCalendarTable data-testid="datepicker-months-grid" $isMonths>
      {MONTHS.map((label, index) => (
        <StyledCalendarTiles
          key={label}
          aria-label={`Select ${label}`}
          $isCurrent={index === currentMonth}
          $isSelected={index === selectedMonth}
          onClick={() => {
            dispatch({
              type: DATEPICKER_ACTION.UPDATE,
              data: { currentMonth: changeMonth(index, month) },
            })
            setCalendarTable(CALENDAR_TABLE_VIEW.HIDE)
          }}
        >
          {label.toUpperCase()}
        </StyledCalendarTiles>
      ))}
    </StyledCalendarTable>
  )
}

const YearsView = ({
  dispatch,
  month,
  setCalendarTable,
}: Pick<CalendarTableProps, 'month' | 'dispatch' | 'setCalendarTable'>) => {
  const currentYear = new Date().getFullYear()
  const selectedYear = month.getFullYear()
  const [years, setYears] = useState(() => getDecade(selectedYear))

  return (
    <>
      <StyledNavigation>
        <StyledButtonArrows
          aria-label="Navigate to previous decade"
          icon={<IconChevronLeft />}
          onClick={() => setYears(getDecade(years[0]))}
          title="Navigate to previous decade"
          variant={BUTTON_VARIANT.TERTIARY}
        />
        <StyledYearsTitle>{`${years[1]} - ${years[11]}`}</StyledYearsTitle>
        <StyledButtonArrows
          aria-label="Navigate to next decade"
          icon={<IconChevronRight />}
          onClick={() => setYears(getDecade(years[11]))}
          title="Navigate to next decade"
          variant={BUTTON_VARIANT.TERTIARY}
        />
      </StyledNavigation>
      <StyledCalendarTable data-testid="datepicker-years-grid" $isYears>
        {years.map((year) => (
          <StyledCalendarTiles
            aria-label={`Select ${year}`}
            $isCurrent={year === currentYear}
            $isSelected={year === selectedYear}
            key={year}
            onClick={() => {
              dispatch({
                type: DATEPICKER_ACTION.UPDATE,
                data: { currentMonth: changeYear(year, month) },
              })
              setCalendarTable(CALENDAR_TABLE_VIEW.HIDE)
            }}
          >
            {year}
          </StyledCalendarTiles>
        ))}
      </StyledCalendarTable>
    </>
  )
}

export const CalendarTable = ({
  calendarTable,
  dispatch,
  month,
  setCalendarTable,
}: CalendarTableProps) => {
  return (
    <StyledCalendarContainer>
      {calendarTable === CALENDAR_TABLE_VIEW.MONTHS && (
        <MonthsView
          dispatch={dispatch}
          month={month}
          setCalendarTable={setCalendarTable}
        />
      )}
      {calendarTable === CALENDAR_TABLE_VIEW.YEARS && (
        <YearsView
          dispatch={dispatch}
          month={month}
          setCalendarTable={setCalendarTable}
        />
      )}
    </StyledCalendarContainer>
  )
}
