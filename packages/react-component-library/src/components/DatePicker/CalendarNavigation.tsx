import { IconChevronLeft, IconChevronRight } from '@royalnavy/icon-library'
import React, { useCallback, useMemo } from 'react'

import { BUTTON_VARIANT } from '../Button'
import { COMPONENT_SIZE } from '../Forms'
import {
  StyledButton,
  StyledButtonArrows,
  StyledNavigation,
} from './partials/StyledCalendarNavigation'

interface CalendarNavigationProps {
  month: Date
  onMonthChange: (increment: number) => void
  onMonthPickerClick: () => void
  onYearPickerClick: () => void
}

export const CalendarNavigation = ({
  month,
  onMonthChange,
  onMonthPickerClick,
  onYearPickerClick,
}: CalendarNavigationProps) => {
  const formatDate = useCallback(
    (options: Intl.DateTimeFormatOptions) => {
      return month.toLocaleString('en', options)
    },
    [month]
  )

  const monthLabel = useMemo(() => formatDate({ month: 'short' }), [formatDate])
  const yearLabel = useMemo(() => formatDate({ year: 'numeric' }), [formatDate])

  return (
    <StyledNavigation>
      <StyledButtonArrows
        aria-label="Navigate to previous month"
        icon={<IconChevronLeft />}
        onClick={() => onMonthChange(-1)}
        title="Navigate to previous month"
        variant={BUTTON_VARIANT.TERTIARY}
      />
      <StyledButton
        aria-label="Show month picker"
        onClick={onMonthPickerClick}
        size={COMPONENT_SIZE.SMALL}
        variant={BUTTON_VARIANT.TERTIARY}
      >
        {monthLabel}
      </StyledButton>
      <StyledButton
        aria-label="Show year picker"
        onClick={onYearPickerClick}
        size={COMPONENT_SIZE.SMALL}
        variant={BUTTON_VARIANT.TERTIARY}
      >
        {yearLabel}
      </StyledButton>
      <StyledButtonArrows
        aria-label="Navigate to next month"
        icon={<IconChevronRight />}
        onClick={() => onMonthChange(1)}
        title="Navigate to next month"
        variant={BUTTON_VARIANT.TERTIARY}
      />
    </StyledNavigation>
  )
}
