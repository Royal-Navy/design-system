import React, { useContext } from 'react'
import classNames from 'classnames'
import { useDay } from '@datepicker-react/hooks'

import { PropsWithClassName } from '../../types/PropsWithClassName'
import DatepickerContext from './datepickerContext'

export interface DayProps extends PropsWithClassName {
  dayLabel?: string
  date: Date
}

export const Day: React.FC<DayProps> = ({ dayLabel, date }) => {
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover,
  } = useContext(DatepickerContext)

  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex,
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
  })

  if (!dayLabel) {
    return <div data-testid="datepicker-empty-day" />
  }

  const classes = classNames('rn-date-picker__btn-day', {
    'is-selected': isSelected,
    'is-selected-start-or-end': isSelectedStartOrEnd,
    'is-within-range': isWithinHoverRange,
    'is-disabled': disabledDate,
  })

  return (
    <button
      className={classes}
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      data-testid={`datepicker-day-${dayLabel}`}
    >
      {dayLabel}
    </button>
  )
}

Day.displayName = 'Day'
