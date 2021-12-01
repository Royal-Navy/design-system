import { IconEvent } from '@defencedigital/icon-library'
import React, { useState } from 'react'
import { Placement } from '@popperjs/core'
import { DayModifiers, DayPickerProps } from 'react-day-picker'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
import { DatePickerEInput } from './DatePickerEInput'
import { hasClass } from '../../helpers'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledLabel } from '../TextInputE/partials/StyledLabel'
import { StyledButton } from './partials/StyledButton'
import { StyledDatePickerEInput } from './partials/StyledDatePickerEInput'
import { StyledDayPicker } from './partials/StyledDayPicker'
import { StyledFloatingBox } from './partials/StyledFloatingBox'
import { StyledIconEventWrapper } from './partials/StyledIconEventWrapper'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { useDatePickerEOpenClose } from './useDatePickerEOpenClose'
import { useExternalId } from '../../hooks/useExternalId'
import { useFocus } from '../../hooks/useFocus'
import { useRangeHoverOrFocusDate } from './useRangeHoverOrFocusDate'
import { useSelection } from './useSelection'
import { useStatefulRef } from '../../hooks/useStatefulRef'
import { WEEKDAY_TITLES } from './constants'

declare module 'react-day-picker' {
  // eslint-disable-next-line no-shadow
  interface DayPickerProps {
    // This prop is currently missing from the react-day-picker types
    onDayFocus?: (
      day: Date,
      modifiers: DayModifiers,
      e: React.FocusEvent<HTMLDivElement>
    ) => void
  }
}

export interface DatePickerEProps
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
  placement?: Placement
}

export const DatePickerE: React.FC<DatePickerEProps> = ({
  className,
  endDate,
  format: datePickerFormat = DATE_FORMAT.SHORT,
  id: externalId,
  isDisabled,
  isInvalid,
  isRange,
  label = 'Date',
  onChange,
  onCalendarFocus,
  startDate,
  isOpen,
  disabledDays,
  initialMonth,
  placement = 'bottom-start',
  onBlur,
  ...rest
}) => {
  const id = useExternalId(externalId)
  const titleId = `datepicker-title-${useExternalId()}`
  const contentId = `datepicker-contentId-${useExternalId()}`

  const { hasFocus, onLocalBlur, onLocalFocus } = useFocus()
  const {
    floatingBoxChildrenRef,
    handleOnClose,
    handleOnOpen,
    inputButtonRef,
    inputRef,
    open,
  } = useDatePickerEOpenClose(isOpen)

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
  const [floatingBoxTarget, setFloatingBoxTarget] = useStatefulRef()

  const {
    rangeHoverOrFocusDate,
    handleDayFocus,
    handleDayMouseEnter,
    handleDayMouseLeave,
  } = useRangeHoverOrFocusDate(isRange)

  const { from, to } = state

  const modifiers = {
    start: from,
    end: to,
  }

  const hasContent = Boolean(from)

  const placeholder = !isRange ? datePickerFormat.toLowerCase() : null

  return (
    <>
      <StyledDatePickerEInput
        className={className}
        data-testid="datepicker-input-wrapper"
        $isDisabled={isDisabled}
        ref={setFloatingBoxTarget}
      >
        <StyledOuterWrapper
          data-testid="datepicker-outer-wrapper"
          $hasFocus={hasFocus && !hasError}
          $isInvalid={hasError}
          $isDisabled={isDisabled}
        >
          <StyledInputWrapper $isRange={isRange}>
            <StyledLabel
              id={titleId}
              $hasFocus={hasFocus && !isRange}
              $hasContent={hasContent}
              htmlFor={id}
              data-testid="datepicker-label"
            >
              {label}
              {placeholder && ` (${placeholder})`}
            </StyledLabel>
            <DatePickerEInput
              disabledDays={disabledDays}
              id={id}
              isDisabled={isDisabled}
              isRange={isRange}
              format={datePickerFormat}
              from={from}
              hasLabel={Boolean(label)}
              onDayChange={(day: Date) => {
                setCurrentMonth(day)
                handleDayClick(day)
              }}
              onBlur={(e) => {
                onLocalBlur(e)
                if (onBlur) {
                  onBlur(e)
                }
              }}
              onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                if (!isRange) {
                  e.target.select()
                }
                onLocalFocus()
                if (isRange) {
                  handleOnOpen()
                }
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
            onClick={open ? handleOnClose : handleOnOpen}
            disabled={isDisabled}
            data-testid="datepicker-input-button"
          >
            <StyledIconEventWrapper>
              <IconEvent size={18} />
            </StyledIconEventWrapper>
          </StyledButton>
        </StyledOuterWrapper>
      </StyledDatePickerEInput>
      <StyledFloatingBox
        isVisible={open}
        placement={placement}
        targetElement={floatingBoxTarget}
        role="dialog"
        aria-modal
        aria-labelledby={titleId}
        aria-live="polite"
      >
        <div ref={floatingBoxChildrenRef}>
          <StyledDayPicker
            firstDayOfWeek={1}
            weekdaysShort={WEEKDAY_TITLES}
            selectedDays={[{ from, to: to || rangeHoverOrFocusDate }]}
            modifiers={modifiers}
            month={currentMonth}
            onDayClick={handleDayClick}
            initialMonth={from || initialMonth}
            disabledDays={disabledDays}
            $isRange={isRange}
            $isVisible={open}
            onFocus={onCalendarFocus}
            onDayMouseEnter={handleDayMouseEnter}
            onDayMouseLeave={handleDayMouseLeave}
            onDayFocus={handleDayFocus}
          />
        </div>
      </StyledFloatingBox>
    </>
  )
}

DatePickerE.displayName = 'DatePickerE'
