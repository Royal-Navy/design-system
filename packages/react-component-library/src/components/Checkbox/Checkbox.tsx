import React, { forwardRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledCheckbox } from './partials/StyledCheckbox'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInput } from './partials/StyledInput'
import { StyledCheckmark } from './partials/StyledCheckmark'

export interface CheckboxProps
  extends ComponentWithClass,
    InputValidationProps {
  /**
   * Optional unique ID to apply to the component.
   */
  id?: string
  /**
   * Optional HTML `checked` attribute denoting checked state of component.
   */
  checked?: boolean
  /**
   * Toggles whether the component should be checked on initial render.
   */
  defaultChecked?: boolean
  /**
   * Toggles whether or note the component is marked as checked.
   * @deprecated
   */
  isChecked?: boolean
  /**
   * Toggles whether the component is disabled or not (preventing user interaction).
   */
  isDisabled?: boolean
  /**
   * Label to display to the right of the component.
   */
  label: string
  /**
   * HTML `name` attribute associated with the component.
   */
  name: string
  /**
   * Optional handler to be invoked when the blur event is emitted.
   */
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  /**
   * Optional handler to be invoked when the value of the component changes.
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  /**
   * Optional HTML `value` attribute associated with the component.
   */
  value?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = '',
      id = uuidv4(),
      checked,
      defaultChecked,
      isChecked,
      isDisabled,
      label,
      name,
      onBlur,
      onChange,
      value,
      isInvalid,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledCheckbox
        $isDisabled={isDisabled}
        $isInvalid={isInvalid}
        className={className}
        data-testid="container"
      >
        <StyledOuterWrapper>
          <StyledLabel htmlFor={id} data-testid="label">
            <StyledInput
              $isDisabled={isDisabled}
              ref={ref}
              id={id}
              type="checkbox"
              name={name}
              value={value}
              defaultChecked={isChecked || defaultChecked}
              onChange={onChange}
              onBlur={onBlur}
              disabled={isDisabled}
              checked={checked}
              data-testid="checkbox"
              {...rest}
            />
            <StyledCheckmark />
            {label}
          </StyledLabel>
        </StyledOuterWrapper>
      </StyledCheckbox>
    )
  }
)

Checkbox.displayName = 'Checkbox'
