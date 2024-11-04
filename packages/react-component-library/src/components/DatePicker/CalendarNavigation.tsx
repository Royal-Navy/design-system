import { addMonths } from 'date-fns/fp'
import { IconChevronLeft, IconChevronRight } from '@royalnavy/icon-library'
import React, { Dispatch, SetStateAction, useCallback, useMemo } from 'react'

import { BUTTON_VARIANT } from '../Button'
import { CALENDAR_TABLE_VIEW, type CalendarTableView } from './constants'
import { COMPONENT_SIZE } from '../Forms'
import { DATEPICKER_ACTION, type DatePickerAction } from './types'
import {
  StyledButton,
  StyledButtonArrows,
  StyledNavigation,
} from './partials/StyledCalendarNavigation'

interface CalendarNavigationProps {
  dispatch: Dispatch<DatePickerAction>
  month: Date
  setCalendarTable: Dispatch<SetStateAction<CalendarTableView>>
}

export const CalendarNavigation = ({
  dispatch,
  month,
  setCalendarTable,
}: CalendarNavigationProps) => {
  const handleMonthChange = useCallback(
    (increment: number) => {
      dispatch({
        type: DATEPICKER_ACTION.UPDATE,
        data: { currentMonth: addMonths(increment, month) },
      })
    },
    [month, dispatch]
  )

  const formatDate = useCallback(
    (options: Intl.DateTimeFormatOptions) => {
      return month.toLocaleString('en', options)
    },
    [month]
  )

  const monthLabel = useMemo(
    () => formatDate({ month: 'short' }).toUpperCase(),
    [formatDate]
  )

  const yearLabel = useMemo(() => formatDate({ year: 'numeric' }), [formatDate])

  return (
    <StyledNavigation>
      <StyledButtonArrows
        aria-label="Navigate to previous month"
        icon={<IconChevronLeft />}
        onClick={() => handleMonthChange(-1)}
        title="Navigate to previous month"
        variant={BUTTON_VARIANT.TERTIARY}
      />
      <StyledButton
        aria-label="Toggle months grid to select a month"
        onClick={() => setCalendarTable(CALENDAR_TABLE_VIEW.MONTHS)}
        size={COMPONENT_SIZE.SMALL}
        variant={BUTTON_VARIANT.TERTIARY}
      >
        {monthLabel}
      </StyledButton>
      <StyledButton
        aria-label="Toggle years grid to select a year"
        onClick={() => setCalendarTable(CALENDAR_TABLE_VIEW.YEARS)}
        size={COMPONENT_SIZE.SMALL}
        variant={BUTTON_VARIANT.TERTIARY}
      >
        {yearLabel}
      </StyledButton>
      <StyledButtonArrows
        aria-label="Navigate to next month"
        icon={<IconChevronRight />}
        onClick={() => handleMonthChange(1)}
        title="Navigate to next month"
        variant={BUTTON_VARIANT.TERTIARY}
      />
    </StyledNavigation>
  )
}
