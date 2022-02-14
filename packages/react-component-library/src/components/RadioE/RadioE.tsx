import React, { useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import mergeRefs from 'react-merge-refs'

import { RADIO_VARIANT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledCheckmark } from './partials/StyledCheckmark'
import { StyledDescription } from './partials/StyledDescription'
import { StyledInput } from './partials/StyledInput'
import { StyledLabel } from './partials/StyledLabel'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledRadio } from './partials/StyledRadio'
import { StyledRadioWrapper } from './partials/StyledRadioWrapper'

type RadioVariantType = typeof RADIO_VARIANT[keyof typeof RADIO_VARIANT]

export interface RadioEProps extends ComponentWithClass, InputValidationProps {
  /**
   * Optional unique ID to apply to the component.
   */
  id?: string
  /**
   * Toggles whether or not the component is marked as checked by default.
   */
  defaultChecked?: boolean
  /**
   * Optional description to display below the label.
   */
  description?: string
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
  /**
   * Optional variant to set container visibility.
   */
  variant?: RadioVariantType
}

export const RadioE = React.forwardRef<HTMLInputElement, RadioEProps>(
  (
    {
      className = '',
      id = uuidv4(),
      defaultChecked,
      description,
      isDisabled = false,
      isInvalid,
      label,
      name,
      onChange,
      onBlur,
      value,
      variant = RADIO_VARIANT.DEFAULT,
      ...rest
    },
    ref
  ) => {
    const localRef = useRef<HTMLInputElement>(null)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== localRef.current) {
        localRef.current?.click()
      }
    }

    const handleKeyUp = (_: React.KeyboardEvent) => {
      localRef.current?.focus()
    }

    const hasContainer = variant !== RADIO_VARIANT.NO_CONTAINER

    return (
      <StyledRadioWrapper>
        <StyledRadio
          className={className}
          role="radio"
          aria-checked={defaultChecked}
          $isDisabled={isDisabled}
          $hasContainer={hasContainer}
          $isInvalid={isInvalid}
          $isChecked={defaultChecked}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          data-testid="radio"
        >
          <StyledOuterWrapper $hasContainer={hasContainer}>
            <StyledLabel
              $hasContainer={hasContainer}
              htmlFor={id}
              data-testid="radio-label"
            >
              <StyledInput
                ref={mergeRefs([localRef, ref])}
                defaultChecked={defaultChecked}
                id={id}
                type="radio"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={isDisabled}
                data-testid="radio-input"
                {...rest}
              />
              <StyledCheckmark $hasContainer={hasContainer} />
              {label}
              {description && (
                <StyledDescription data-testid="checkbox-description">
                  {description}
                </StyledDescription>
              )}
            </StyledLabel>
          </StyledOuterWrapper>
        </StyledRadio>
      </StyledRadioWrapper>
    )
  }
)

RadioE.displayName = 'RadioE'
