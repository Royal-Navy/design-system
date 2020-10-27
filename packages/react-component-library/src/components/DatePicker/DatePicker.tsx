import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import classNames from 'classnames'
import { isNil } from 'lodash'
import TetherComponent from 'react-tether'
import DayPicker, { DayPickerProps, DayModifiers } from 'react-day-picker'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DatePickerHoursSwitch } from './DatePickerHoursSwitch'
import { DatePickerInput } from './DatePickerInput'
import { useOpenClose } from './useOpenClose'
import {
  DATEPICKER_HOURS_BLOCK_SIZE,
  DATEPICKER_PLACEMENT,
  DATEPICKER_PLACEMENTS,
} from '.'
import { FloatingBox, FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { getId } from '../../helpers'
import { useDateTime } from './useDateTime'

export type DatePickerHoursBlockSizeType =
  | typeof DATEPICKER_HOURS_BLOCK_SIZE.QUARTER_DAY
  | typeof DATEPICKER_HOURS_BLOCK_SIZE.HALF_DAY

export interface DatePickerProps extends ComponentWithClass {
  endDate?: Date
  hoursBlockSize?: DatePickerHoursBlockSizeType
  id?: string
  isDisabled?: boolean
  isRange?: boolean
  label?: string
  name?: string
  onBlur?: (event: React.FormEvent) => void
  onChange?: (data: { startDate: Date; endDate: Date }) => void
  placement?:
    | typeof DATEPICKER_PLACEMENT.ABOVE
    | typeof DATEPICKER_PLACEMENT.BELOW
    | typeof DATEPICKER_PLACEMENT.LEFT
    | typeof DATEPICKER_PLACEMENT.RIGHT
  startDate?: Date
  value?: string
  isOpen?: boolean
  disabledDays?: DayPickerProps['disabledDays']
  initialMonth?: DayPickerProps['initialMonth']
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  endDate,
  hoursBlockSize,
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
  disabledDays,
  initialMonth,
}) => {
  const {
    appendDay,
    appendTime,
    enriched,
    formatted,
    hasContent,
    modifiers,
    time,
  } = useDateTime(
    startDate,
    endDate,
    isRange,
    value,
    !!hoursBlockSize,
    onChange
  )
  const { from, to } = enriched

  function handleDayClick(day: Date, { disabled }: DayModifiers) {
    if (disabled) return

    appendDay(day)
  }

  function handleTimeClick(type: string) {
    return (event: React.FormEvent<HTMLInputElement>, optionValue: string) => {
      appendTime(type, optionValue)
    }
  }

  const componentRef = useRef(null)
  const { openState, onFocus, onClose } = useOpenClose(componentRef, isOpen)
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

  const gridClasses = classNames('rn-date-picker__grid', {
    'rn-date-picker__grid--range': isRange,
  })

  const titleId = getId('datepicker-title')
  const contentId = getId('day-picker')

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
        renderTarget: (ref: React.RefObject<HTMLDivElement>) => (
          <DatePickerInput
            ref={ref}
            className={classes}
            dayPickerId={contentId}
            id={id}
            name={name}
            label={label}
            value={formatted}
            onBlur={onBlur}
            onFocus={onFocus}
            isDisabled={isDisabled}
            isOpen={openState}
            onClose={onClose}
          />
        ),
        renderElement: (ref: React.RefObject<HTMLDivElement>) => (
          <FloatingBox
            contentId={contentId}
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
              className={gridClasses}
              numberOfMonths={isRange ? 2 : 1}
              selectedDays={[from, { from, to }]}
              modifiers={modifiers}
              onDayClick={handleDayClick}
              initialMonth={startDate || initialMonth}
              disabledDays={disabledDays}
            />

            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1 }}>
                <DatePickerHoursSwitch
                  hoursBlockSize={hoursBlockSize}
                  isDisabled={isNil(from)}
                  onChange={handleTimeClick('from')}
                  value={time.from}
                />
              </div>
              {isRange && (
                <div style={{ flex: 1 }}>
                  <DatePickerHoursSwitch
                    hoursBlockSize={hoursBlockSize}
                    isDisabled={isNil(to)}
                    onChange={handleTimeClick('to')}
                    value={time.to}
                  />
                </div>
              )}
            </div>
          </FloatingBox>
        ),
      })}
    </div>
  )
}

DatePicker.displayName = 'DatePicker'
