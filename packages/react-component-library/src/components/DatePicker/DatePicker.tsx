import React, { useState, useRef } from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import TetherComponent from 'react-tether'

import {
  IconChevronLeft,
  IconChevronRight,
  IconArrowForward,
} from '@royalnavy/icon-library'

import {
  useDatepicker,
  FocusedInput,
  START_DATE,
} from '@datepicker-react/hooks'

import DatepickerContext from './datepickerContext'

import { Input } from './Input'
import { Month } from './Month'
import { NavButton } from './NavButton'
import { useOpenClose } from './useOpenClose'
import { DATEPICKER_PLACEMENT, DATEPICKER_PLACEMENTS } from '.'
import { FloatingBox, FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'

export interface StateObject {
  endDate?: Date
  focusedInput: FocusedInput
  startDate?: Date
}

export interface DatePickerProps extends ComponentWithClass {
  endDate?: Date
  id?: string
  isDisabled?: boolean
  isRange?: boolean
  label?: string
  name?: string
  onBlur?: (event: React.FormEvent) => void
  onChange?: (data: StateObject) => void
  placement?:
    | typeof DATEPICKER_PLACEMENT.ABOVE
    | typeof DATEPICKER_PLACEMENT.BELOW
    | typeof DATEPICKER_PLACEMENT.LEFT
    | typeof DATEPICKER_PLACEMENT.RIGHT
  startDate?: Date
  value?: string
}

function transformDates(startDate: Date, endDate: Date) {
  if (startDate && endDate && differenceInMinutes(endDate, startDate) > 0) {
    return `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
  }

  if (startDate) {
    return startDate.toLocaleDateString()
  }

  return null
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  endDate,
  id = uuidv4(),
  isDisabled,
  isRange,
  label = 'Select Date',
  name,
  onBlur,
  onChange,
  placement = DATEPICKER_PLACEMENT.BELOW,
  startDate,
  value,
}) => {
  const [state, setState] = useState<StateObject>({
    startDate,
    endDate,
    focusedInput: START_DATE, // START_DATE | END_DATE | null
  })

  function handleDateChange(data: StateObject) {
    setState({
      ...data,
      focusedInput: data.focusedInput || START_DATE,
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
    exactMinBookingDays: !isRange, // truthy only allow single day
    numberOfMonths: isRange ? 2 : 1, // 2 to enable range
  })

  const componentRef = useRef(null)
  const { isOpen, onFocus, onClose } = useOpenClose(componentRef)
  const hasContent = (value && value.length) || state.startDate
  const PLACEMENTS = DATEPICKER_PLACEMENTS[placement]

  const classes = classNames('rn-date-picker', className, {
    'is-open': isOpen,
    'has-content': hasContent,
    'is-disabled': isDisabled,
  })

  const tetherClasses = classNames('rn-date-picker__tether', {
    'is-visible': isOpen,
  })

  const floatingBoxClasses = classNames('rn-date-picker__container', {
    'is-visible': isOpen,
  })

  const gridClasses = classNames('rn-date-picker__grid', {
    'rn-date-picker__grid--range': isRange,
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
          className: tetherClasses,
          renderTarget: (ref: React.RefObject<any>) => (
            <Input
              ref={ref}
              className={classes}
              id={id}
              name={name}
              label={label}
              value={transformDates(state.startDate, state.endDate)}
              onBlur={onBlur}
              onFocus={onFocus}
              isDisabled={isDisabled}
              isOpen={isOpen}
              onClose={onClose}
            />
          ),
          renderElement: (ref: React.RefObject<any>) => (
            <FloatingBox
              ref={ref}
              position={PLACEMENTS.ARROW_POSITION}
              scheme={FLOATING_BOX_SCHEME.LIGHT}
              className={floatingBoxClasses}
            >
              <>
                <NavButton onClick={goToPreviousMonths}>
                  <IconChevronLeft />
                </NavButton>

                {isRange && (
                  <IconArrowForward
                    className="rn-date-picker__range-seperator"
                    data-testid="datepicker-range-separator"
                  />
                )}

                <NavButton onClick={goToNextMonths}>
                  <IconChevronRight />
                </NavButton>

                <div className={gridClasses}>
                  {activeMonths.map(({ month, year }) => (
                    <Month
                      key={`${year}-${month}`}
                      year={year}
                      month={month}
                      firstDayOfWeek={firstDayOfWeek}
                    />
                  ))}
                </div>
              </>
            </FloatingBox>
          ),
        })}
      </div>
    </DatepickerContext.Provider>
  )
}

DatePicker.displayName = 'DatePicker'
