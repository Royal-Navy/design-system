import { IconEvent } from '@defencedigital/icon-library'
import FocusTrap from 'focus-trap-react'
import React, { useRef } from 'react'
import { Placement } from '@popperjs/core'
import { DayModifiers, DayPickerProps } from 'react-day-picker'
import { useBoolean } from 'usehooks-ts'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DATE_FORMAT } from '../../constants'
import { DATE_VALIDITY, WEEKDAY_TITLES } from './constants'
import { DATEPICKER_E_ACTION } from './types'
import { hasClass } from '../../helpers'
import { InlineButton } from '../InlineButtons/InlineButton'
import { InputValidationProps } from '../../common/InputValidationProps'
import { isDateValid } from './utils'
import { StyledLabel } from '../TextInputE/partials/StyledLabel'
import { StyledDatePickerEInput } from './partials/StyledDatePickerEInput'
import { StyledDayPicker } from './partials/StyledDayPicker'
import { StyledFloatingBox } from './partials/StyledFloatingBox'
import { StyledInlineButtons } from '../InlineButtons/partials/StyledInlineButtons'
import { StyledInput } from '../TextInputE/partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { useExternalId } from '../../hooks/useExternalId'
import { useFocus } from '../../hooks/useFocus'
import { useFocusTrapOptions } from './useFocusTrapOptions'
import { useHandleDayClick } from './useHandleDayClick'
import { useInput } from './useInput'
import { useRangeHoverOrFocusDate } from './useRangeHoverOrFocusDate'
import { useStatefulRef } from '../../hooks/useStatefulRef'
import { useDatePickerEReducer } from './useDatePickerEReducer'

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

export type DatePickerEDateValidityType =
  | typeof DATE_VALIDITY.VALID
  | typeof DATE_VALIDITY.INVALID
  | typeof DATE_VALIDITY.DISABLED

export interface DatePickerEOnChangeData {
  startDate: Date | null
  startDateValidity: DatePickerEDateValidityType | null
  endDate: Date | null
  endDateValidity: DatePickerEDateValidityType | null
}

export interface DatePickerEProps
  extends ComponentWithClass,
    InputValidationProps {
  /**
   * The end of the selected date range. (Only relevant if isRange is set.)
   *
   * If set, it should be kept updated with the `endDate` value provided
   * by the `onChange` callback.
   */
  endDate?: Date | null
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
   *
   * Note: If an invalid date is typed, `data.startDate` will be set to an
   * invalid date object and the `data.startDateValidity` will be set to
   * `"invalid"`. (If you're using `yup` for validation, you may wish to
   * use the `.typeError()` chainer to display an appropriate error message.)
   *
   * If a date that is disabled using the `disabledDays` prop is typed,
   * `data.startDate` will be populated and `data.startDateValidity` will
   * be set to `"disabled"`. You should check for this and ensure an
   * appropriate error message is displayed.
   */
  onChange?: (data: DatePickerEOnChangeData) => void
  /**
   * Optional handler to be invoked when the calendar is focussed.
   */
  onCalendarFocus?: (e: React.SyntheticEvent) => void
  /**
   * The selected date, or the start of the selected date range if `isRange`
   * is set.
   *
   * If set, it should be kept updated with the `startDate` provided
   * by the `onChange` callback.
   */
  startDate?: Date | null
  /**
   * Toggles whether the picker is open on first render.
   */
  initialIsOpen?: boolean
  /**
   * An array of dates to disabled within the picker, preventing them from
   * being selected in the date picker calendar.
   *
   * Note that these dates can still be manually typed in. You should still
   * check for them in your validation logic and display an appropriate
   * error message if they are received. See the `onChange` prop for more
   * information.
   */
  disabledDays?: DayPickerProps['disabledDays']
  /**
   * Optional month from which to display the picker calendar on first render.
   */
  initialMonth?: DayPickerProps['initialMonth']
  /**
   * Initial value for `startDate`. Only used when the `startDate` prop is not set.
   */
  initialStartDate?: Date | null
  /**
   * Initial value for `endDate`. Only used when the `endDate` prop is not set.
   */
  initialEndDate?: Date | null
  /**
   * Position to display the picker relative to the input.
   * NOTE: This is now calculated automatically by default based on available screen real-estate.
   */
  placement?: Placement
  /**
   * Not used. Use `startDate` and `endDate` instead.
   */
  value?: never
}

const replaceInvalidDate = (date: Date | null | undefined): Date | undefined =>
  isDateValid(date) ? date : undefined

export const DatePickerE: React.FC<DatePickerEProps> = ({
  className,
  endDate: externalEndDate,
  format: datePickerFormat = DATE_FORMAT.SHORT,
  id: externalId,
  isDisabled = false,
  isInvalid,
  isRange = false,
  label = 'Date',
  onChange,
  onCalendarFocus,
  startDate: externalStartDate,
  initialIsOpen,
  disabledDays,
  initialMonth,
  initialStartDate = null,
  initialEndDate = null,
  placement = 'bottom-start',
  onBlur,
  // Formik can pass value – drop it to stop it being forwarded to the input
  value: _,
  ...rest
}) => {
  const id = useExternalId(externalId)
  const titleId = `datepicker-title-${useExternalId()}`
  const contentId = `datepicker-contentId-${useExternalId()}`
  const buttonRef = useRef<HTMLButtonElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const { hasFocus, onLocalBlur, onLocalFocus } = useFocus()
  const {
    setFalse: close,
    value: isOpen,
    toggle: toggleIsOpen,
  } = useBoolean(initialIsOpen)
  const focusTrapOptions = useFocusTrapOptions(
    close,
    isRange ? [buttonRef, inputRef] : [buttonRef]
  )

  const [state, dispatch] = useDatePickerEReducer(
    externalStartDate,
    externalEndDate,
    initialStartDate,
    initialEndDate,
    datePickerFormat,
    isRange
  )
  const handleDayClick = useHandleDayClick(
    state,
    dispatch,
    isRange,
    disabledDays,
    onChange
  )
  const { startDate, endDate } = state
  const hasError =
    state.hasError || isInvalid || hasClass(className, 'is-invalid')

  const [floatingBoxTarget, setFloatingBoxTarget] = useStatefulRef()

  const {
    rangeHoverOrFocusDate,
    handleDayFocus,
    handleDayMouseEnter,
    handleDayMouseLeave,
  } = useRangeHoverOrFocusDate(isRange)

  const { handleKeyDown, handleInputBlur, handleInputChange } = useInput(
    datePickerFormat,
    isRange,
    handleDayClick,
    dispatch
  )

  const modifiers = {
    start: replaceInvalidDate(startDate),
    end: replaceInvalidDate(endDate),
  }

  const hasContent = Boolean(startDate)

  const placeholder = !isRange ? datePickerFormat.toLowerCase() : undefined

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
          $hasFocus={hasFocus}
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
            <StyledInput
              ref={inputRef}
              $hasLabel={Boolean(label)}
              aria-label="Choose date"
              data-testid="datepicker-input"
              id={id}
              type="text"
              disabled={isDisabled}
              readOnly={isRange}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onBlur={(e) => {
                onLocalBlur(e)
                handleInputBlur()
                if (onBlur) {
                  onBlur(e)
                }
              }}
              onFocus={() => {
                onLocalFocus()
                if (isRange) {
                  buttonRef.current?.focus()
                }
              }}
              onClick={() => {
                if (isRange) {
                  toggleIsOpen()
                }
              }}
              placeholder={placeholder}
              value={state.inputValue}
              {...rest}
            />
          </StyledInputWrapper>
          <StyledInlineButtons>
            <InlineButton
              aria-expanded={isOpen}
              aria-label={`${isOpen ? 'Hide' : 'Show'} day picker`}
              aria-owns={contentId}
              data-testid="datepicker-input-button"
              isDisabled={isDisabled}
              onClick={toggleIsOpen}
              ref={buttonRef}
            >
              <IconEvent size={18} />
            </InlineButton>
          </StyledInlineButtons>
        </StyledOuterWrapper>
      </StyledDatePickerEInput>
      <StyledFloatingBox
        isVisible={isOpen}
        placement={placement}
        targetElement={floatingBoxTarget}
        role="dialog"
        aria-modal
        aria-labelledby={titleId}
        aria-live="polite"
      >
        <FocusTrap focusTrapOptions={focusTrapOptions}>
          <StyledDayPicker
            firstDayOfWeek={1}
            weekdaysShort={WEEKDAY_TITLES}
            selectedDays={[
              {
                from: replaceInvalidDate(startDate),
                to: replaceInvalidDate(endDate) || rangeHoverOrFocusDate,
              },
            ]}
            modifiers={modifiers}
            onDayClick={(day, { disabled }) => {
              if (disabled) {
                return
              }

              const newState = handleDayClick(day)

              dispatch({ type: DATEPICKER_E_ACTION.REFRESH_HAS_ERROR })
              dispatch({ type: DATEPICKER_E_ACTION.REFRESH_INPUT_VALUE })

              if (newState.endDate || !isRange) {
                setTimeout(() => close())
              }
            }}
            initialMonth={replaceInvalidDate(startDate) || initialMonth}
            disabledDays={disabledDays}
            $isRange={isRange}
            $isVisible={isOpen}
            onFocus={onCalendarFocus}
            onDayMouseEnter={handleDayMouseEnter}
            onDayMouseLeave={handleDayMouseLeave}
            onDayFocus={handleDayFocus}
          />
        </FocusTrap>
      </StyledFloatingBox>
    </>
  )
}

DatePickerE.displayName = 'DatePickerE'
