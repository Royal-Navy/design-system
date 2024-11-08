import {
  addMonths,
  setMonth as changeMonth,
  setYear as changeYear,
} from 'date-fns/fp'
import { enGB } from 'date-fns/locale'
import { format } from 'date-fns'
import FocusTrap from 'focus-trap-react'
import React, { memo, useCallback } from 'react'

import { BUTTON_VARIANT } from '../Button'
import {
  CALENDAR_TABLE_VARIANT,
  CalendarTableVariant,
  DATE_VALIDITY,
} from './constants'
import { CalendarNavigation } from './CalendarNavigation'
import { CalendarTable } from './CalendarTable'
import { COMPONENT_SIZE } from '../Forms'
import { DATEPICKER_ACTION } from './types'
import { DatePickerProps } from './DatePicker'
import { replaceInvalidDate } from './utils'
import { StyledDayPicker } from './partials/StyledDayPicker'
import { StyledFloatingBox } from './partials/StyledFloatingBox'
import { StyledJumpToToday } from './partials/StyledJumpToToday'
import { useDatePickerContext } from './useDatePickerContext'
import { useFocusTrapOptions } from './useFocusTrapOptions'
import { useProcessDayClick, calculateDateValidity } from './useProcessDayClick'
import { useRangeHoverOrFocusDate } from './useRangeHoverOrFocusDate'

const MODIFIERS_CLASS_NAMES = {
  start: 'rdp-day_start',
  end: 'rdp-day_end',
}

interface FloatingCalendarProps
  extends Pick<
    DatePickerProps,
    | 'disabledDays'
    | 'isRange'
    | 'jumpToToday'
    | 'navigateMonthYear'
    | 'onChange'
    | 'placement'
    | 'today'
  > {
  buttonRef: React.RefObject<HTMLButtonElement>
  inputRef: React.RefObject<HTMLInputElement>
  floatingBoxId: string
  titleId: string
  floatingBoxTarget: Element | null
}

export const FloatingCalendar = memo(
  ({
    buttonRef,
    disabledDays,
    floatingBoxId,
    floatingBoxTarget,
    inputRef,
    isRange = false,
    jumpToToday,
    navigateMonthYear,
    onChange,
    placement,
    titleId,
    today = new Date(),
  }: FloatingCalendarProps) => {
    const { state, dispatch } = useDatePickerContext()

    const { startDate, endDate, currentMonth, calendarTableVariant, isOpen } =
      state

    const {
      rangeHoverOrFocusDate,
      handleDayFocusOrMouseEnter,
      handleDayBlurOrMouseLeave,
    } = useRangeHoverOrFocusDate(isRange)

    const modifiers = {
      start: replaceInvalidDate(startDate) || false,
      end: replaceInvalidDate(endDate) || false,
    }

    const selected = {
      from: replaceInvalidDate(startDate),
      to: replaceInvalidDate(endDate) || rangeHoverOrFocusDate || undefined,
    }

    const focusTrapOptions = useFocusTrapOptions(
      () =>
        dispatch({
          type: DATEPICKER_ACTION.UPDATE,
          data: { isOpen: false },
        }),
      isRange ? [buttonRef, inputRef] : [buttonRef]
    )

    const handleDaySelection = useCallback(() => {
      dispatch({ type: DATEPICKER_ACTION.REFRESH_HAS_ERROR })
      dispatch({ type: DATEPICKER_ACTION.REFRESH_INPUT_VALUE })
    }, [dispatch])

    const processDayClick = useProcessDayClick(
      state,
      dispatch,
      isRange,
      disabledDays,
      onChange
    )

    const handleDayClick = useCallback(
      (day: Date, { disabled }: { disabled?: boolean } = {}) => {
        if (disabled) {
          return
        }

        const newState = processDayClick(day)

        handleDaySelection()

        if (newState.endDate || !isRange) {
          setTimeout(() =>
            dispatch({
              type: DATEPICKER_ACTION.UPDATE,
              data: { isOpen: false },
            })
          )
        }
      },
      [dispatch, handleDaySelection, isRange, processDayClick]
    )

    const handleMonthClick = useCallback(
      (monthIndex: number) => {
        dispatch({
          type: DATEPICKER_ACTION.UPDATE,
          data: {
            currentMonth: changeMonth(monthIndex, currentMonth),
            calendarTableVariant: CALENDAR_TABLE_VARIANT.HIDE,
          },
        })
      },
      [dispatch, currentMonth]
    )

    const handleYearClick = useCallback(
      (year: number) => {
        dispatch({
          type: DATEPICKER_ACTION.UPDATE,
          data: {
            currentMonth: changeYear(year, currentMonth),
            calendarTableVariant: CALENDAR_TABLE_VARIANT.HIDE,
          },
        })
      },
      [dispatch, currentMonth]
    )

    const handleMonthChange = useCallback(
      (increment: number) => {
        dispatch({
          type: DATEPICKER_ACTION.UPDATE,
          data: { currentMonth: addMonths(increment, currentMonth) },
        })
      },
      [dispatch, currentMonth]
    )

    const handleJumpToToday = useCallback(() => {
      if (calculateDateValidity(today, disabledDays) !== DATE_VALIDITY.VALID) {
        return
      }

      dispatch({
        type: DATEPICKER_ACTION.UPDATE,
        data: { currentMonth: today },
      })

      processDayClick(today)
      handleDaySelection()
    }, [dispatch, today, disabledDays, processDayClick, handleDaySelection])

    const setTableVariant = useCallback(
      (variant: CalendarTableVariant) => {
        dispatch({
          type: DATEPICKER_ACTION.UPDATE,
          data: { calendarTableVariant: variant },
        })
      },
      [dispatch]
    )

    const setCurrentMonth = useCallback(
      (month: Date) => {
        dispatch({
          type: DATEPICKER_ACTION.UPDATE,
          data: { currentMonth: month },
        })
      },
      [dispatch]
    )

    return (
      <StyledFloatingBox
        aria-labelledby={titleId}
        aria-live="polite"
        aria-modal
        id={floatingBoxId}
        isVisible={isOpen}
        placement={placement}
        role="dialog"
        targetElement={floatingBoxTarget}
      >
        <FocusTrap focusTrapOptions={focusTrapOptions}>
          <div>
            {calendarTableVariant !== CALENDAR_TABLE_VARIANT.HIDE && (
              <CalendarTable
                month={currentMonth}
                onMonthClick={handleMonthClick}
                onYearClick={handleYearClick}
                variant={calendarTableVariant}
              />
            )}
            {jumpToToday && (
              <StyledJumpToToday
                onClick={handleJumpToToday}
                size={COMPONENT_SIZE.SMALL}
                variant={BUTTON_VARIANT.TERTIARY}
              >
                Jump to today
              </StyledJumpToToday>
            )}
            {navigateMonthYear && (
              <CalendarNavigation
                month={currentMonth}
                onMonthChange={handleMonthChange}
                onMonthPickerClick={() =>
                  setTableVariant(CALENDAR_TABLE_VARIANT.MONTHS)
                }
                onYearPickerClick={() =>
                  setTableVariant(CALENDAR_TABLE_VARIANT.YEARS)
                }
              />
            )}
            <StyledDayPicker
              disabled={disabledDays}
              formatters={{
                formatWeekdayName: (date, options) =>
                  format(date, 'ccc', options),
              }}
              initialFocus
              locale={enGB}
              mode="default"
              modifiers={modifiers}
              modifiersClassNames={MODIFIERS_CLASS_NAMES}
              month={currentMonth}
              onDayBlur={handleDayBlurOrMouseLeave}
              onDayClick={handleDayClick}
              onDayFocus={handleDayFocusOrMouseEnter}
              onDayMouseEnter={handleDayFocusOrMouseEnter}
              onDayMouseLeave={handleDayBlurOrMouseLeave}
              onMonthChange={setCurrentMonth}
              selected={selected}
              today={today}
            />
          </div>
        </FocusTrap>
      </StyledFloatingBox>
    )
  }
)
