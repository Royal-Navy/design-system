import React, { useRef, useContext } from 'react'
import classNames from 'classnames'
import { useDay } from '@datepicker-react/hooks'

import DatepickerContext from './datepickerContext'

export interface DayProps extends ComponentWithClass {
  dayLabel?: string
  date: Date
}

export const Day: React.FC<DayProps> = ({ dayLabel, date }) => {
  const dayRef = useRef(null)

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
    dayRef,
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
      // ref={dayRef} https://github.com/tresko/react-datepicker/issues/91
      data-testid={`datepicker-day-${dayLabel}`}
    >
      {dayLabel}
    </button>
  )
}

Day.displayName = 'Day'
