import React, { useRef } from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledSwitchOption } from './partials/StyledSwitchOption'
import { SwitchInput } from './partials/SwitchInput'

export interface SwitchEOptionProps extends ComponentWithClass {
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
   * Handler invoked when the option is selected by end user.
   * @private
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
}

export const SwitchEOption: React.FC<SwitchEOptionProps> = ({
  label,
  value,
  isDisabled,
  name,
  id,
  isActive,
  onChange,
}) => {
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

SwitchEOption.displayName = 'SwitchEOption'
