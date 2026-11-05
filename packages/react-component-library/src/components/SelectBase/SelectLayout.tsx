import { UseSelectReturnValue, UseComboboxReturnValue } from 'downshift'
import React, { useState } from 'react'

import { mergeRefs } from '../../helpers'
import { ArrowButton } from '../Select/ArrowButton'
import { ClearButton } from '../InlineButtons/ClearButton'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { SelectChildWithStringType } from './types'
import { StyledInput } from './partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledOptions } from './partials/StyledOptions'
import { StyledOptionsWrapper } from './partials/StyledOptionsWrapper'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledSelect } from './partials/StyledSelect'
import { StyledSelectedBadges } from './partials/StyledSelectedBadges'
import { StyledTextInput } from './partials/StyledTextInput'
import { StyledTooltip } from './partials/StyledTooltip'
import { useExternalId } from '../../hooks/useExternalId'
import { useStatefulRef } from '../../hooks/useStatefulRef'
import { StyledFloatingBox } from './partials/StyledFloatingBox'
import { PopupPosition } from './SelectBaseProps'
import { StyledInlineButtonsNoBorder } from '../InlineButtons/partials/StyledInlineButtons'
import { ComponentSizeType } from '../Forms'

type ComboboxReturnValueType = UseComboboxReturnValue<SelectChildWithStringType>
type SelectReturnValueType = UseSelectReturnValue<SelectChildWithStringType>

export interface SelectLayoutProps extends ComponentWithClass {
  'aria-describedby'?: string
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
  tooltipText: string
  value?: string
  popupPosition?: PopupPosition
  selectedBadges?: React.ReactNode
  size: ComponentSizeType
}

const isEllipsisActive = (el: HTMLInputElement | null): boolean => {
  return Boolean(el && el.offsetWidth < el.scrollWidth)
}

export const SelectLayout = ({
  'aria-describedby': ariaDescribedBy,
  children,
  className,
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
  tooltipText,
  value,
  popupPosition = 'below',
  selectedBadges,
  size,
  ...rest
}: SelectLayoutProps) => {
  const [hasHover, setHasHover] = useState<boolean>(false)
  const labelId = useExternalId('label')
  const [floatingBoxTarget, setFloatingBoxTarget] =
    useStatefulRef<HTMLInputElement>()
  const { ref, ...inputPropsRest } = inputProps

  const onMouseEnter = () => {
    if (!isDisabled) {
      setHasHover(true)
    }
  }
  const onMouseLeave = () => setHasHover(false)

  const selectedBadgesId = `${id}-selected-badges`
  const describedBy =
    [
      ariaDescribedBy,
      inputPropsRest['aria-describedby'],
      selectedBadges ? selectedBadgesId : undefined,
    ]
      .filter(Boolean)
      .join(' ') || undefined

  return (
    <>
      <StyledSelect
        className={className}
        data-testid="select"
        aria-labelledby={labelId}
      >
        <StyledTextInput data-testid="text-input-container">
          <StyledOuterWrapper
            $hasFocus={isOpen}
            $isDisabled={isDisabled}
            $isInvalid={isInvalid}
            $popupPosition={popupPosition}
            $size={size}
            data-testid="select-outer-wrapper"
          >
            <StyledInputWrapper
              $hasSelectedBadges={Boolean(selectedBadges)}
              data-testid="select-input-wrapper"
              aria-controls={id}
              {...inputWrapperProps}
            >
              <StyledLabel
                $hasContent={hasSelectedItem}
                $hasFocus={hasLabelFocus}
                $size={size}
                htmlFor={id}
                id={labelId}
                data-testid="select-label"
              >
                {label}
              </StyledLabel>
              <StyledInput
                ref={mergeRefs([setFloatingBoxTarget, ref])}
                $hasLabel
                $size={size}
                data-testid="select-input"
                disabled={isDisabled}
                value={value}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                {...rest}
                {...inputPropsRest}
                aria-describedby={describedBy}
                aria-labelledby={labelId}
                id={id}
              />
            </StyledInputWrapper>
            {selectedBadges && (
              <StyledSelectedBadges
                $isDisabled={isDisabled}
                data-testid="select-selected-badges"
                id={selectedBadgesId}
                onClick={() => floatingBoxTarget?.click()}
                onMouseDown={(event) => event.preventDefault()}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
              >
                {selectedBadges}
              </StyledSelectedBadges>
            )}
            <StyledInlineButtonsNoBorder>
              {hasSelectedItem && !hideClearButton && (
                <ClearButton
                  isDisabled={isDisabled}
                  onClick={onClearButtonClick}
                  size={size}
                />
              )}
              <ArrowButton
                hasHover={hasHover}
                isDisabled={isDisabled}
                isOpen={isOpen}
                size={size}
                {...toggleButtonProps}
              />
            </StyledInlineButtonsNoBorder>
          </StyledOuterWrapper>
        </StyledTextInput>
        <StyledOptionsWrapper
          data-testid="select-options-wrapper"
          $isVisible={isOpen}
          $position={popupPosition}
          $size={size}
        >
          <StyledOptions
            {...menuProps}
            $size={size}
            aria-labelledby={labelId}
            data-testid="select-options"
            tabIndex={0}
          >
            {children}
          </StyledOptions>
        </StyledOptionsWrapper>
      </StyledSelect>
      <StyledFloatingBox
        placement="bottom"
        scheme="dark"
        isVisible={
          hasHover &&
          Boolean(tooltipText) &&
          isEllipsisActive(floatingBoxTarget)
        }
        targetElement={floatingBoxTarget}
      >
        <StyledTooltip>{tooltipText}</StyledTooltip>
      </StyledFloatingBox>
    </>
  )
}

SelectLayout.displayName = 'SelectLayout'
