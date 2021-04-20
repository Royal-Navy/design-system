import React, { useRef, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import {
  DateUtils,
  DayModifiers,
  DayPickerProps,
  RangeModifier,
} from 'react-day-picker'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
import { DATEPICKER_PLACEMENT, DATEPICKER_PLACEMENTS } from '.'
import { DatePickerInput } from './DatePickerInput'
import { DropdownIndicatorIcon } from '../Dropdown/DropdownIndicatorIcon'
import { FLOATING_BOX_SCHEME } from '../../primitives/FloatingBox'
import { getId, hasClass } from '../../helpers'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledDatePicker } from './partials/StyledDatePicker'
import { StyledDayPicker } from './partials/StyledDayPicker'
import { StyledFloatingBox } from './partials/StyledFloatingBox'
import { StyledTetherComponent } from './partials/StyledTetherComponent'
import { StyledDatePickerInput } from './partials/StyledDatePickerInput'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledButton } from './partials/StyledButton'
import { StyledSeparator } from './partials/StyledSeparator'
import { useDatePickerOpenClose } from './useDatePickerOpenClose'

export interface StateObject {
  from?: Date
  to?: Date
}

export type DatePickerPlacement =
  | typeof DATEPICKER_PLACEMENT.ABOVE
  | typeof DATEPICKER_PLACEMENT.BELOW
  | typeof DATEPICKER_PLACEMENT.LEFT
  | typeof DATEPICKER_PLACEMENT.RIGHT

export interface DatePickerProps
  extends ComponentWithClass,
    InputValidationProps {
  /**
   * End date of the picker (only relevant in range mode).
   */
  endDate?: Date
  /**
   * Custom date format (e.g. `yyyy/MM/dd`).
   */
  format?: string
  /**
   * Optional unique ID to apply to the component.
   */
  id?: string
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Toggles whether the component is a range variant (allowing selection of start and end dates).
   */
  isRange?: boolean
  /**
   * Optional text label to display within the picker input.
   */
  label?: string
  /**
   * Optional HTML `name` attribute to apply to the component.
   */
  name?: string
  /**
   * Optional handler to be invoked when the blur event is emitted.
   */
  onBlur?: (event: React.FormEvent) => void
  /**
   * Optional handler to be invoked when the value of the component changes.
   */
  onChange?: (data: { startDate: Date; endDate: Date }) => void
  /**
   * Position to display the picker relative to the input.
   */
  placement?: DatePickerPlacement
  /**
   * Start date of the picker (the first date selected by end user).
   */
  startDate?: Date
  /**
   * Optional HTML `value` attribute associated with the component.
   * @deprecated
   */
  value?: string
  /**
   * Toggles whether or not the picker is open.
   */
  isOpen?: boolean
  /**
   * An array of dates to disabled within the picker (preventing user interaction).
   */
  disabledDays?: DayPickerProps['disabledDays']
  /**
   * Optional month from which to display the picker calendar on first render.
   */
  initialMonth?: DayPickerProps['initialMonth']
}

function getNewState(
  isRange: boolean,
  day: Date,
  state: StateObject
): StateObject {
  if (isRange) {
    if (state.from && (state.to || state.from > day)) {
      return { from: day }
    }

    return DateUtils.addDayToRange(day, state as RangeModifier)
  }

  return { from: day, to: day }
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  endDate,
  format: datePickerFormat = DATE_FORMAT.SHORT,
  id = uuidv4(),
  isDisabled,
  isInvalid,
  isRange,
  isValid,
  label = 'Select Date',
  onChange,
  placement = DATEPICKER_PLACEMENT.BELOW,
  startDate,
  value,
  isOpen,
  disabledDays,
  initialMonth,
  ...rest
}) => {
  const componentRef = useRef(null)

  const {
    floatingBoxChildrenRef,
    handleOnClose,
    handleOnFocus,
    inputButtonRef,
    inputRef,
    open,
  } = useDatePickerOpenClose(isOpen)

  const [state, setState] = useState<StateObject>({
    from: startDate,
    to: endDate,
  })
  const [hasError, setHasError] = useState<boolean>(
    isInvalid || hasClass(className, 'is-invalid')
  )
  const [currentMonth, setCurrentMonth] = useState<Date>(null)

  const { from, to } = state
  const modifiers = { start: from, end: to }

  function handleDayClick(day: Date, dayModifiers?: DayModifiers) {
    if (dayModifiers && dayModifiers.disabled) {
      return
    }

    const newState = getNewState(isRange, day, state)
    setState(newState)

    if (onChange) {
      onChange({
        startDate: newState.from,
        endDate: newState.to,
      })
    }
  }

  const hasContent = !!((value && value.length) || from)
  const PLACEMENTS = DATEPICKER_PLACEMENTS[placement]

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
    <StyledDatePicker ref={componentRef} data-testid="datepicker-wrapper">
      {/*
        // @ts-ignore */}
      {React.createElement(StyledTetherComponent, {
        offset: PLACEMENTS.OFFSET,
        attachment: PLACEMENTS.ATTACHMENT,
        targetAttachment: PLACEMENTS.TARGET_ATTACHMENT,
        $isVisible: open,
        renderTarget: (ref: React.RefObject<HTMLDivElement>) => {
          const placeholder = isRange ? null : datePickerFormat.toLowerCase()
          return (
            <StyledDatePickerInput
              className={className}
              ref={ref}
              data-testid="datepicker-input-wrapper"
              $isDisabled={isDisabled}
            >
              <StyledOuterWrapper
                data-testid="datepicker-outer-wrapper"
                $hasFocus={open}
                $isInvalid={hasError}
                $isValid={isValid || hasClass(className, 'is-valid')}
              >
                <StyledInputWrapper>
                  <StyledLabel
                    $isOpen={open}
                    $hasContent={hasContent}
                    $hasPlaceholder={!!placeholder}
                    htmlFor={id}
                    data-testid="datepicker-label"
                  >
                    {label}
                  </StyledLabel>
                  <DatePickerInput
                    disabledDays={disabledDays}
                    id={id}
                    isDisabled={isDisabled}
                    isRange={isRange}
                    format={datePickerFormat}
                    from={from}
                    onComplete={handleOnClose}
                    onDayChange={(day: Date) => {
                      setCurrentMonth(day)
                      handleDayClick(day)
                    }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                      if (!isRange) {
                        e.target.select()
                      }
                      handleOnFocus(e)
                    }}
                    placeholder={placeholder}
                    ref={inputRef}
                    setHasError={setHasError}
                    to={to}
                    {...rest}
                  />
                </StyledInputWrapper>
                <StyledButton
                  aria-expanded={!!open}
                  aria-label={`${open ? 'Hide' : 'Show'} day picker`}
                  aria-owns={contentId}
                  ref={inputButtonRef}
                  type="button"
                  onClick={open ? handleOnClose : handleOnFocus}
                  disabled={isDisabled}
                  data-testid="datepicker-input-button"
                >
                  <StyledSeparator />
                  <DropdownIndicatorIcon isOpen={open} />
                </StyledButton>
              </StyledOuterWrapper>
            </StyledDatePickerInput>
          )
        },
        renderElement: (ref: React.RefObject<HTMLDivElement>) => (
          <StyledFloatingBox
            contentId={contentId}
            ref={ref}
            position={PLACEMENTS.ARROW_POSITION}
            scheme={FLOATING_BOX_SCHEME.LIGHT}
            $isVisible={open}
            role="dialog"
            aria-modal
            aria-labelledby={titleId}
            aria-live="polite"
          >
            <div ref={floatingBoxChildrenRef}>
              <StyledDayPicker
                numberOfMonths={isRange ? 2 : 1}
                selectedDays={[from, { from, to }]}
                modifiers={modifiers}
                month={currentMonth}
                onDayClick={handleDayClick}
                initialMonth={startDate || initialMonth}
                disabledDays={disabledDays}
                $isRange={isRange}
              />
            </div>
          </StyledFloatingBox>
        ),
      })}
    </StyledDatePicker>
  )
}

DatePicker.displayName = 'DatePicker'
