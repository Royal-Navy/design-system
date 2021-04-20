import React, { forwardRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledRadio } from './partials/StyledRadio'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInput } from './partials/StyledInput'
import { StyledCheckmark } from './partials/StyledCheckmark'

export interface RadioProps extends ComponentWithClass, InputValidationProps {
  /**
   * Optional unique ID to apply to the component.
   */
  id?: string
  /**
   * Toggles whether or not the component is marked as checked.
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
   * Optional handler to be invoked when the value of the component changes.
   */
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
  /**
   * Optional handler to be invoked when the blur event is emitted.
   */
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  /**
   * Optional HTML `value` attribute associated with the component.
   */
  value?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className = '',
      id = uuidv4(),
      isChecked,
      isDisabled = false,
      label,
      name,
      onChange,
      onBlur,
      value,
      isInvalid,
      ...rest
    },
    ref
  ) => {
    return (
      <StyledRadio
        className={className}
        data-testid="container"
        role="radio"
        aria-checked={isChecked}
        $isDisabled={isDisabled}
        $isInvalid={isInvalid}
      >
        <StyledOuterWrapper>
          <StyledLabel htmlFor={id} data-testid="label">
            <StyledInput
              ref={ref}
              defaultChecked={isChecked}
              id={id}
              type="radio"
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              disabled={isDisabled}
              data-testid="radio"
              {...rest}
            />
            <StyledCheckmark />
            {label}
          </StyledLabel>
        </StyledOuterWrapper>
      </StyledRadio>
    )
  }
)

Radio.displayName = 'Radio'
