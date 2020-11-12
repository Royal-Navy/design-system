import React, { forwardRef } from 'react'
import styled, { css } from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { DropdownIndicatorIcon } from '../Dropdown/DropdownIndicatorIcon'

export interface DatePickerInputProps extends ComponentWithClass {
  ref: React.Ref<HTMLDivElement>
  dayPickerId?: string
  id?: string
  label?: string
  name?: string
  value?: string
  onBlur?: (event: React.FormEvent<Element>) => void
  onFocus?: (event: React.FormEvent<Element>) => void
  isDisabled?: boolean
  isOpen: boolean
  onClose?: () => void
  hasContent?: boolean
}

interface StyledDatePickerInputProps {
  $isDisabled?: boolean
}

interface StyledOuterWrapperProps {
  $isOpen?: boolean
}

interface StyledLabelProps {
  $isOpen?: boolean
  $hasContent?: boolean
}

const { color, spacing, fontSize } = selectors

const StyledOuterWrapper = styled.div<StyledOuterWrapperProps>`
  display: inline-flex;
  flex-direction: row;
  background-color: ${color('neutral', 'white')};
  border-radius: 4px;

  box-shadow: 0 0 0 1px
    ${({ $isOpen }) => ($isOpen ? color('action', '600') : 'transparent')};

  border: 1px solid
    ${({ $isOpen }) =>
      $isOpen ? color('action', '600') : color('neutral', '200')};

  transition: border-color 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`

const StyledInputWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  order: 2;
`

const StyledLabel = styled.label<StyledLabelProps>`
  display: block;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: translate(${spacing('6')}, ${spacing('6')}) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;
  color: ${color('neutral', '400')};
  font-size: ${fontSize('base')};

  ${({ $isOpen, $hasContent }) =>
    ($isOpen || $hasContent) &&
    css`
      transform: translate(${spacing('6')}, 6px) scale(0.8);
    `}
`

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: ${spacing('10')} ${spacing('6')} ${spacing('2')};
  border: 0;
  background: none;
  -webkit-tap-highlight-color: transparent;
  font-size: ${fontSize('base')};

  &:focus {
    outline: 0;
  }
`

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  order: 3;
  text-align: center;
  padding: ${spacing('4')} ${spacing('5')} ${spacing('4')} 0;
  border: none;
  background: transparent;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }
`

const StyledSeparator = styled.div`
  width: 1px;
  height: 100%;
  margin-right: ${spacing('8')};
  background: ${color('neutral', '100')};
`

const StyledDatePickerInput = styled.div<StyledDatePickerInputProps>`
  display: inline-flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  margin: ${spacing('6')} 0;
  padding: 0;
  border: 0;
  vertical-align: top;
  width: 100%;

  ${({ $isDisabled }) =>
    $isDisabled &&
    css`
      cursor: not-allowed;

      * {
        cursor: not-allowed;
      }
    `}

  &.is-invalid {
    ${StyledOuterWrapper} {
      border-color: ${color('danger', '700')};
      box-shadow: 0 0 0 1px ${color('danger', '700')};
    }
  }

  &.is-valid {
    ${StyledOuterWrapper} {
      border-color: ${color('success', '700')};
      box-shadow: 0 0 0 1px ${color('success', '700')};
    }
  }
`

export const DatePickerInput = forwardRef(
  (props: DatePickerInputProps, ref?: React.Ref<HTMLDivElement>) => {
    const {
      className,
      dayPickerId,
      id,
      label,
      name,
      value,
      onBlur,
      onFocus,
      isDisabled,
      isOpen,
      onClose,
      hasContent,
    } = props

    return (
      <StyledDatePickerInput
        className={className}
        ref={ref}
        data-testid="datepicker-input-wrapper"
        $isDisabled={isDisabled}
      >
        <StyledOuterWrapper $isOpen={isOpen}>
          <StyledInputWrapper>
            <StyledLabel
              $isOpen={isOpen}
              $hasContent={hasContent}
              htmlFor={id}
              data-testid="datepicker-label"
            >
              {label}
            </StyledLabel>
            <StyledInput
              type="text"
              id={id}
              name={name}
              value={value}
              onBlur={onBlur}
              onFocus={onFocus}
              disabled={isDisabled}
              readOnly
              aria-label="Choose date"
              data-testid="datepicker-input"
            />
          </StyledInputWrapper>
          <StyledButton
            aria-expanded={!!isOpen}
            aria-label={`${isOpen ? 'Hide' : 'Show'} day picker`}
            aria-owns={dayPickerId}
            type="button"
            onClick={isOpen ? onClose : onFocus}
            disabled={isDisabled}
            data-testid="datepicker-input-button"
          >
            <StyledSeparator />
            <DropdownIndicatorIcon isOpen={isOpen} />
          </StyledButton>
        </StyledOuterWrapper>
      </StyledDatePickerInput>
    )
  }
)

DatePickerInput.displayName = 'DatePickerInput'
