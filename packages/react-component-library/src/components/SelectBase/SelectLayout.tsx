import { UseSelectReturnValue, UseComboboxReturnValue } from 'downshift'
import React, { useState } from 'react'
import mergeRefs from 'react-merge-refs'

import { ArrowButton } from '../Select/ArrowButton'
import { ClearButton } from '../Select/ClearButton'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { SelectChildWithStringType } from './types'
import { StyledInlineButtons } from './partials/StyledInlineButtons'
import { StyledInput } from './partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from '../TextInput/partials/StyledLabel'
import { StyledOptions } from './partials/StyledOptions'
import { StyledOptionsWrapper } from './partials/StyledOptionsWrapper'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledSelect } from './partials/StyledSelect'
import { StyledTextInput } from './partials/StyledTextInput'
import { StyledTooltip } from './partials/StyledTooltip'
import { useExternalId } from '../../hooks/useExternalId'
import { useStatefulRef } from '../../hooks/useStatefulRef'
import { StyledFloatingBox } from './partials/StyledFloatingBox'

type ComboboxReturnValueType = UseComboboxReturnValue<SelectChildWithStringType>
type SelectReturnValueType = UseSelectReturnValue<SelectChildWithStringType>

export interface SelectLayoutProps extends ComponentWithClass {
  hasLabelFocus?: boolean
  hasSelectedItem: boolean
  id: string
  inputProps: ReturnType<ComboboxReturnValueType['getInputProps']>
  inputWrapperProps?: ReturnType<ComboboxReturnValueType['getComboboxProps']>
  isDisabled?: boolean
  isInvalid?: boolean
  isOpen: boolean
  hideClearButton?: boolean
  label: string
  menuProps:
    | ReturnType<ComboboxReturnValueType['getMenuProps']>
    | ReturnType<SelectReturnValueType['getMenuProps']>
  onChange?: (value: string | null) => void
  onClearButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  toggleButtonProps:
    | ReturnType<ComboboxReturnValueType['getToggleButtonProps']>
    | ReturnType<SelectReturnValueType['getToggleButtonProps']>
  value?: string
}

const isEllipsisActive = (el: HTMLInputElement | null): boolean => {
  return Boolean(el && el.offsetWidth < el.scrollWidth)
}

export const SelectLayout: React.FC<SelectLayoutProps> = ({
  children,
  hasLabelFocus = false,
  hasSelectedItem,
  id,
  inputProps,
  inputWrapperProps,
  isDisabled = false,
  isInvalid,
  isOpen,
  hideClearButton,
  label,
  menuProps,
  onClearButtonClick,
  toggleButtonProps,
  value,
  ...rest
}) => {
  const [hasHover, setHasHover] = useState<boolean>(false)
  const labelId = useExternalId('label')
  const [floatingBoxTarget, setFloatingBoxTarget] =
    useStatefulRef<HTMLInputElement>()
  const { ref, ...inputPropsRest } = inputProps

  return (
    <>
      <StyledSelect data-testid="select" aria-labelledby={labelId}>
        <StyledTextInput data-testid="text-input-container">
          <StyledOuterWrapper
            $hasFocus={isOpen}
            $isDisabled={isDisabled}
            $isInvalid={isInvalid}
            data-testid="select-outer-wrapper"
          >
            <StyledInputWrapper
              data-testid="text-input-input-wrapper"
              {...inputWrapperProps}
            >
              <StyledLabel
                $hasContent={hasSelectedItem}
                $hasFocus={hasLabelFocus}
                htmlFor={id}
                id={labelId}
                data-testid="select-label"
              >
                {label}
              </StyledLabel>
              <StyledInput
                ref={mergeRefs([setFloatingBoxTarget, ref])}
                $hasLabel
                data-testid="select-input"
                disabled={isDisabled}
                value={value}
                onMouseEnter={() => {
                  if (!isDisabled) {
                    setHasHover(true)
                  }
                }}
                onMouseLeave={() => setHasHover(false)}
                {...rest}
                {...inputPropsRest}
                aria-labelledby={labelId}
                id={id}
              />
            </StyledInputWrapper>
            <StyledInlineButtons>
              {hasSelectedItem && !hideClearButton && (
                <ClearButton
                  isDisabled={isDisabled}
                  onClick={onClearButtonClick}
                />
              )}
              <ArrowButton
                hasHover={hasHover}
                isDisabled={isDisabled}
                isOpen={isOpen}
                {...toggleButtonProps}
              />
            </StyledInlineButtons>
          </StyledOuterWrapper>
        </StyledTextInput>
        <StyledOptionsWrapper $isVisible={isOpen}>
          <StyledOptions {...menuProps}>{children}</StyledOptions>
        </StyledOptionsWrapper>
      </StyledSelect>
      <StyledFloatingBox
        placement="bottom"
        scheme="dark"
        isVisible={hasHover && isEllipsisActive(floatingBoxTarget)}
        targetElement={floatingBoxTarget}
      >
        <StyledTooltip>{value}</StyledTooltip>
      </StyledFloatingBox>
    </>
  )
}

SelectLayout.displayName = 'SelectLayout'
