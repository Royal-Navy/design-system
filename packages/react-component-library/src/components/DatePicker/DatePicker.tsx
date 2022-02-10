import React, { useState } from 'react'
import { Placement } from '@popperjs/core'
import { v4 as uuidv4 } from 'uuid'
import { DayPickerProps } from 'react-day-picker'
import { Transition } from 'react-transition-group'

import {
  FLOATING_BOX_PLACEMENT,
  FLOATING_BOX_SCHEME,
} from '../../primitives/FloatingBox'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
import { DATEPICKER_PLACEMENT } from './constants'
import { DatePickerInput } from './DatePickerInput'
import { DropdownIndicatorIcon } from '../Dropdown/DropdownIndicatorIcon'
import { FloatingBoxContent } from '../../primitives/FloatingBox/FloatingBoxContent'
import { getId, hasClass } from '../../helpers'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledArrow } from '../../primitives/FloatingBox/partials/StyledArrow'
import { StyledButton } from './partials/StyledButton'
import { StyledDatePickerInput } from './partials/StyledDatePickerInput'
import { StyledDayPicker } from './partials/StyledDayPicker'
import { StyledFloatingBox } from '../../primitives/FloatingBox/partials/StyledFloatingBox'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledSeparator } from './partials/StyledSeparator'
import { useDatePickerOpenClose } from './useDatePickerOpenClose'
import { useFloatingElement } from '../../hooks/useFloatingElement'
import { useSelection } from './useSelection'

/**
 * @deprecated
 */
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
   * Optional handler to be invoked when the calendar is focussed.
   */
  onCalendarFocus?: (e: React.SyntheticEvent) => void
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
  /**
   * Position to display the picker relative to the input.
   * NOTE: This is now calculated automatically by default based on available screen real-estate.
   */
  placement?: DatePickerPlacement | Placement
}

export const DatePicker: React.FC<DatePickerProps> = ({
  className,
  endDate,
  format: datePickerFormat = DATE_FORMAT.SHORT,
  id = uuidv4(),
  isDisabled,
  isInvalid,
  isRange,
  label = 'Select Date',
  onChange,
  onCalendarFocus,
  startDate,
  value,
  isOpen,
  disabledDays,
  initialMonth,
  placement = FLOATING_BOX_PLACEMENT.BOTTOM,
  ...rest
}) => {
  const {
    floatingBoxChildrenRef,
    handleOnClose,
    handleOnFocus,
    inputButtonRef,
    inputRef,
    open,
  } = useDatePickerOpenClose(isOpen)

  const { state, handleDayClick } = useSelection(
    startDate,
    endDate,
    isRange,
    onChange,
    handleOnClose
  )

  const [hasError, setHasError] = useState<boolean>(
    isInvalid || hasClass(className, 'is-invalid')
  )
  const [currentMonth, setCurrentMonth] = useState<Date>(null)

  const { from, to } = state
  const modifiers = { start: from, end: to }

  const hasContent = !!((value && value.length) || from)

  const titleId = getId('datepicker-title')
  const contentId = getId('day-picker')

  const placeholder = isRange ? null : datePickerFormat.toLowerCase()

  /**
   * Maintain compatability with legacy interface
   */
  const legacyPlacementMap = {
    above: 'top',
    below: 'bottom',
  }

  const {
    targetElementRef,
    floatingElementRef,
    arrowElementRef,
    styles,
    attributes,
  } = useFloatingElement(legacyPlacementMap[placement] || placement)

  const TRANSITION_STYLES = {
    entering: { opacity: 0 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
  }

  return (
    <>
      <StyledDatePickerInput
        className={className}
        data-testid="datepicker-input-wrapper"
        $isDisabled={isDisabled}
        ref={targetElementRef}
      >
        <StyledOuterWrapper
          data-testid="datepicker-outer-wrapper"
          $hasFocus={open}
          $isInvalid={hasError}
        >
          <StyledInputWrapper>
            <StyledLabel
              id={titleId}
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
      <Transition in={open} timeout={0} unmountOnExit>
        {(transitionState) => (
          <StyledFloatingBox
            ref={floatingElementRef}
            role="dialog"
            data-testid="floating-box"
            aria-modal
            aria-labelledby={titleId}
            aria-live="polite"
            style={{ ...styles.popper, ...TRANSITION_STYLES[transitionState] }}
            {...attributes.popper}
            {...rest}
          >
            <FloatingBoxContent
              contentId={contentId}
              scheme={FLOATING_BOX_SCHEME.LIGHT}
              data-testid="floating-box-content"
            >
              <StyledArrow
                $placement={
                  attributes?.popper?.['data-popper-placement'] as Placement
                }
                ref={arrowElementRef}
                style={styles.arrow}
                {...attributes.arrow}
              />
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
                  $isVisible={open}
                  onFocus={onCalendarFocus}
                />
              </div>
            </FloatingBoxContent>
          </StyledFloatingBox>
        )}
      </Transition>
    </>
  )
}

DatePicker.displayName = 'DatePicker'
