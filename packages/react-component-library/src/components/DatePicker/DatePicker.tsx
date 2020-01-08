import React, { useState, useRef } from 'react'
import uuid from 'uuid'
import classNames from 'classnames'
import TetherComponent from 'react-tether'

import {
  useDatepicker,
  FocusedInput,
  START_DATE,
} from '@datepicker-react/hooks'

import DatepickerContext from './datepickerContext'

import { Input } from './Input'
import { Month } from './Month'
import { useOpenClose } from './useOpenClose'
import { DATEPICKER_PLACEMENT, DATEPICKER_PLACEMENTS } from './constants'
import { FloatingBox, FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'

export interface StateObject {
  startDate?: Date
  endDate?: Date
  focusedInput: FocusedInput
}

export interface DatePickerProps extends ComponentWithClass {
  id?: string
  name?: string
  value?: string
  label?: string
  onBlur?: (event: React.FormEvent) => void
  onChange?: (data: StateObject) => void
  disabled?: boolean
  placement:
    | DATEPICKER_PLACEMENT.ABOVE
    | DATEPICKER_PLACEMENT.BELOW
    | DATEPICKER_PLACEMENT.LEFT
    | DATEPICKER_PLACEMENT.RIGHT
  startDate?: Date
  endDate?: Date
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  id = uuid(),
  name,
  value,
  label = 'Select Date',
  onBlur,
  onChange,
  disabled,
  placement = DATEPICKER_PLACEMENT.BELOW,
  startDate,
  endDate,
}) => {
  const [state, setState] = useState<StateObject>({
    startDate,
    endDate,
    focusedInput: START_DATE, // START_DATE | END_DATE | null
  })

  function handleDateChange(data: StateObject) {
    setState({
      ...data,
      focusedInput: data.focusedInput || START_DATE
    })

    if (onChange) {
      onChange(data)
    }
  }

  const {
    firstDayOfWeek,
    activeMonths,
    isDateSelected,
    isDateHovered,
    isFirstOrLastSelectedDate,
    isDateBlocked,
    isDateFocused,
    focusedDate,
    onDateHover,
    onDateSelect,
    onDateFocus,
    goToPreviousMonths,
    goToNextMonths,
  } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput,
    onDatesChange: handleDateChange,
    minBookingDays: 1,
    exactMinBookingDays: true, // only allow selection of single day
    numberOfMonths: 1, // 2 to enable range selection
  })

  const componentRef = useRef(null)
  const { isOpen, onFocus } = useOpenClose(componentRef)
  const hasContent = (value && value.length) || state.startDate
  const PLACEMENTS = DATEPICKER_PLACEMENTS[placement]

  const classes = classNames('rn-date-picker', className, {
    'is-open': isOpen,
    'has-content': hasContent,
  })

  const floatingBoxClasses = classNames('rn-date-picker__container', {
    'is-visible': isOpen,
  })

  /**
   * Type error in upstream Tether package. Fix submitted.
   * Using createElement allows us to avoid the type error.
   *
   * https://github.com/danreeves/react-tether/issues/218
   * https://github.com/Microsoft/TypeScript/issues/27552
   */
  return (
    <DatepickerContext.Provider
      value={{
        focusedDate,
        isDateFocused,
        isDateSelected,
        isDateHovered,
        isDateBlocked,
        isFirstOrLastSelectedDate,
        onDateSelect,
        onDateFocus,
        onDateHover,
      }}
    >
      <div ref={componentRef} data-testid="datepicker-wrapper">
        {/*
        // @ts-ignore */}
        {React.createElement(TetherComponent, {
          offset: PLACEMENTS.OFFSET,
          attachment: PLACEMENTS.ATTACHMENT,
          targetAttachment: PLACEMENTS.TARGET_ATTACHMENT,
          renderTarget: (ref: React.RefObject<any>) => (
            <Input
              ref={ref}
              className={classes}
              id={id}
              name={name}
              label={label}
              value={state.startDate && state.startDate.toLocaleDateString()}
              onBlur={onBlur}
              onFocus={onFocus}
              disabled={disabled}
            />
          ),
          renderElement: (ref: React.RefObject<any>) => (
            <FloatingBox
              ref={ref}
              position={PLACEMENTS.ARROW_POSITION}
              scheme={FLOATING_BOX_SCHEME.LIGHT}
              className={floatingBoxClasses}
            >
              <div
                className="rn-date-picker__grid"
                data-active-month-count={activeMonths.length}
              >
                {activeMonths.map(month => (
                  <Month
                    key={`${month.year}-${month.month}`}
                    year={month.year}
                    month={month.month}
                    firstDayOfWeek={firstDayOfWeek}
                    goToPreviousMonths={goToPreviousMonths}
                    goToNextMonths={goToNextMonths}
                  />
                ))}
              </div>
            </FloatingBox>
          ),
        })}
      </div>
    </DatepickerContext.Provider>
  )
}

DatePicker.displayName = 'DatePicker'
