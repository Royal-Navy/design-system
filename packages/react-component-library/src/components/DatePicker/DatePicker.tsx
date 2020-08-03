import React, { useState, useRef } from 'react'
import differenceInMinutes from 'date-fns/differenceInMinutes'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import TetherComponent from 'react-tether'
import DayPicker, { DateUtils, RangeModifier } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

import { DatePickerInput } from './DatePickerInput'
import { useOpenClose } from './useOpenClose'
import { DATEPICKER_PLACEMENT, DATEPICKER_PLACEMENTS } from '.'
import { FloatingBox, FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { getId } from '../../helpers'

export interface StateObject {
  from?: Date
  to?: Date
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
  isOpen?: boolean
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
  isOpen,
}) => {
  const [state, setState] = useState<StateObject>({
    from: startDate,
    to: endDate,
  })

  const { from, to } = state
  const modifiers = { start: from, end: to }

  function handleDayClick(day: any) {
    if (isRange) {
      const range = DateUtils.addDayToRange(day, state as RangeModifier)
      setState(range)
    }

    if (onChange) {
      onChange(state)
    }
  }

  const componentRef = useRef(null)
  const { openState, onFocus, onClose } = useOpenClose(componentRef, isOpen)
  const hasContent = (value && value.length) || from
  const PLACEMENTS = DATEPICKER_PLACEMENTS[placement]

  const classes = classNames('rn-date-picker', className, {
    'is-open': openState,
    'has-content': hasContent,
    'is-disabled': isDisabled,
  })

  const tetherClasses = classNames('rn-date-picker__tether', {
    'is-visible': openState,
  })

  const floatingBoxClasses = classNames('rn-date-picker__container', {
    'is-visible': openState,
  })

  // const gridClasses = classNames('rn-date-picker__grid', {
  //   'rn-date-picker__grid--range': isRange,
  // })

  const titleId = getId('datepicker-title')

  /**
   * Type error in upstream Tether package. Fix submitted.
   * Using createElement allows us to avoid the type error.
   *
   * https://github.com/danreeves/react-tether/issues/218
   * https://github.com/Microsoft/TypeScript/issues/27552
   */
  return (
    <div ref={componentRef} data-testid="datepicker-wrapper">
      {/*
        // @ts-ignore */}
      {React.createElement(TetherComponent, {
        offset: PLACEMENTS.OFFSET,
        attachment: PLACEMENTS.ATTACHMENT,
        targetAttachment: PLACEMENTS.TARGET_ATTACHMENT,
        className: tetherClasses,
        renderTarget: (ref: React.RefObject<any>) => (
          <DatePickerInput
            ref={ref}
            className={classes}
            id={id}
            name={name}
            label={label}
            value={transformDates(from, to)}
            onBlur={onBlur}
            onFocus={onFocus}
            isDisabled={isDisabled}
            isOpen={openState}
            onClose={onClose}
          />
        ),
        renderElement: (ref: React.RefObject<any>) => (
          <FloatingBox
            ref={ref}
            position={PLACEMENTS.ARROW_POSITION}
            scheme={FLOATING_BOX_SCHEME.LIGHT}
            className={floatingBoxClasses}
            role="dialog"
            aria-modal
            aria-labelledby={titleId}
            aria-live="polite"
          >
            <DayPicker
              className="Selectable"
              numberOfMonths={isRange ? 2 : 1}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={handleDayClick}
            />
          </FloatingBox>
        ),
      })}
    </div>
  )
}

DatePicker.displayName = 'DatePicker'
