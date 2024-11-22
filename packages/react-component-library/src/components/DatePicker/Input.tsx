import { IconEvent } from '@royalnavy/icon-library'
import React, { memo, useCallback } from 'react'

import { CALENDAR_TABLE_VARIANT } from './constants'
import { DATE_FORMAT } from '../../constants'
import { DATEPICKER_ACTION } from './types'
import { DatePickerProps } from './DatePicker'
import { hasClass } from '../../helpers'
import { InlineButton } from '../InlineButtons/InlineButton'
import { isDateValid } from './utils'
import { StyledDatePickerInput } from './partials/StyledDatePickerInput'
import { StyledInlineButtons } from '../InlineButtons/partials/StyledInlineButtons'
import { StyledInput } from '../TextInput/partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from '../TextInput/partials/StyledLabel'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { useDatePickerContext } from './useDatePickerContext'
import { useExternalId } from '../../hooks/useExternalId'
import { useFocus } from '../../hooks/useFocus'
import { useInput } from './useInput'
import { useProcessDayClick } from './useProcessDayClick'

export interface InputProps
  extends Pick<
      DatePickerProps,
      | 'disabledDays'
      | 'format'
      | 'id'
      | 'isDisabled'
      | 'isInvalid'
      | 'isRange'
      | 'label'
      | 'onBlur'
      | 'onChange'
    >,
    Omit<React.ComponentPropsWithoutRef<'input'>, 'onChange' | 'onBlur'> {
  buttonRef: React.RefObject<HTMLButtonElement>
  className?: string
  floatingBoxId: string
  inputRef: React.RefObject<HTMLInputElement>
  setFloatingBoxTarget: React.Dispatch<React.SetStateAction<Element | null>>
  titleId: string
}

export const Input = memo(
  ({
    buttonRef,
    className,
    disabledDays,
    floatingBoxId,
    format: datePickerFormat = DATE_FORMAT.SHORT,
    id: externalId,
    inputRef,
    isDisabled = false,
    isInvalid,
    isRange = false,
    label,
    onBlur,
    onChange,
    setFloatingBoxTarget,
    titleId,
    ...rest
  }: InputProps) => {
    const id = useExternalId(externalId)

    const { state, dispatch } = useDatePickerContext()

    const { startDate, inputValue, hasError, isOpen } = state

    const processDayClick = useProcessDayClick(
      state,
      dispatch,
      isRange,
      disabledDays,
      onChange
    )

    const { handleKeyDown, handleInputBlur, handleInputChange } = useInput(
      datePickerFormat,
      isRange,
      processDayClick,
      dispatch
    )

    const { hasFocus, onLocalBlur, onLocalFocus } = useFocus()

    const effectiveHasError =
      hasError || isInvalid || hasClass(className, 'is-invalid')

    const hasContent = Boolean(startDate)

    const placeholder = !isRange ? datePickerFormat.toLowerCase() : undefined

    const handleOnFocus = useCallback(() => {
      onLocalFocus()

      if (isRange) {
        buttonRef.current?.focus()
      }
    }, [onLocalFocus, isRange, buttonRef])

    const handleOnBlur = useCallback(
      (event: React.FocusEvent<HTMLInputElement>) => {
        onLocalBlur(event)
        handleInputBlur()

        if (isDateValid(startDate)) {
          dispatch({
            type: DATEPICKER_ACTION.UPDATE,
            data: { currentMonth: startDate },
          })
        }

        if (onBlur) {
          onBlur(event)
        }
      },
      [onLocalBlur, handleInputBlur, startDate, dispatch, onBlur]
    )

    const handleInputClick = useCallback(() => {
      if (isRange) {
        dispatch({
          type: DATEPICKER_ACTION.UPDATE,
          data: {
            calendarTableVariant: CALENDAR_TABLE_VARIANT.HIDE,
            isOpen: !isOpen,
          },
        })
      }
    }, [isOpen, isRange, dispatch])

    const handleShowHideClick = useCallback(() => {
      dispatch({
        type: DATEPICKER_ACTION.UPDATE,
        data: {
          calendarTableVariant: CALENDAR_TABLE_VARIANT.HIDE,
          isOpen: !isOpen,
        },
      })
    }, [dispatch, isOpen])

    return (
      <StyledDatePickerInput
        className={className}
        data-testid="datepicker-input-wrapper"
        $isDisabled={isDisabled}
        ref={setFloatingBoxTarget}
      >
        <StyledOuterWrapper
          data-testid="datepicker-outer-wrapper"
          $hasFocus={hasFocus && !isRange}
          $isInvalid={effectiveHasError}
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
              onBlur={handleOnBlur}
              onFocus={handleOnFocus}
              onClick={handleInputClick}
              placeholder={placeholder}
              value={inputValue}
              {...rest}
            />
          </StyledInputWrapper>
          <StyledInlineButtons>
            <InlineButton
              aria-expanded={isOpen}
              aria-label={`${isOpen ? 'Hide' : 'Show'} day picker`}
              aria-owns={floatingBoxId}
              data-testid="datepicker-input-button"
              isDisabled={isDisabled}
              onClick={handleShowHideClick}
              ref={buttonRef}
            >
              <IconEvent size={18} />
            </InlineButton>
          </StyledInlineButtons>
        </StyledOuterWrapper>
      </StyledDatePickerInput>
    )
  }
)
