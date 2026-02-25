import React, { useRef } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ValueOf } from '../../helpers'
import { SWITCH_OPTION_VARIANT } from './constants'
import { StyledSwitchOption } from './partials/StyledSwitchOption'
import { SwitchInput } from './partials/SwitchInput'

export type SwitchOptionVariantType = ValueOf<typeof SWITCH_OPTION_VARIANT>

export interface SwitchOptionProps extends ComponentWithClass {
  /**
   * Descriptive label associated with the selectable option.
   */
  label: string
  /**
   * Value associated with the selectable option (not visible).
   */
  value: string
  /**
   * Denotes whether this option is disabled or not.
   */
  isDisabled?: boolean
  /**
   * Name attribute associated of the Switch.
   * @private
   */
  name?: string
  /**
   * Unique ID associated with the Switch.
   * @private
   */
  id?: string
  /**
   * Denotes whether this option is active or not.
   * @private
   */
  isActive?: boolean
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: SwitchOptionVariantType
  /**
   * Handler invoked when the option is selected by end user.
   * @private
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

export const SwitchOption = ({
  label,
  value,
  isDisabled,
  name,
  id,
  isActive,
  onChange,
  variant = SWITCH_OPTION_VARIANT.PRIMARY,
}: SwitchOptionProps) => {
  const localRef = useRef<HTMLInputElement>(null)

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const selectKeys: string[] = ['Enter', 'Spacebar', ' ']

    if (selectKeys.includes(e.key)) {
      e.preventDefault()
      localRef.current?.click()
    }
  }

  return (
    <StyledSwitchOption
      htmlFor={`${id}-${label}`}
      $isActive={isActive}
      $isDisabled={isDisabled}
      $variant={variant}
      aria-current={isActive}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      data-testid="switch-option"
    >
      {label}
      <SwitchInput
        ref={localRef}
        type="radio"
        id={`${id}-${label}`}
        name={name || id}
        value={value}
        onChange={onChange}
        disabled={isDisabled}
        data-testid="switch-input"
      />
    </StyledSwitchOption>
  )
}

SwitchOption.displayName = 'SwitchOption'
