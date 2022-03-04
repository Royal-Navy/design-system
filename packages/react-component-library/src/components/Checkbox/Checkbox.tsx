import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import mergeRefs from 'react-merge-refs'

import { CHECKBOX_VARIANT } from './constants'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledCheckbox } from './partials/StyledCheckbox'
import { StyledCheckmark } from './partials/StyledCheckmark'
import { StyledCheckboxWrapper } from './partials/StyledCheckboxWrapper'
import { StyledDescription } from './partials/StyledDescription'
import { StyledInput } from './partials/StyledInput'
import { StyledLabel } from './partials/StyledLabel'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'

type CheckboxVariantType =
  | typeof CHECKBOX_VARIANT.DEFAULT
  | typeof CHECKBOX_VARIANT.NO_CONTAINER

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
   * Optional description to display below the label.
   */
  description?: React.ReactNode
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
  /**
   * Optional variant to set container visibility.
   */
  variant?: CheckboxVariantType
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className = '',
      checked,
      defaultChecked,
      description,
      id = uuidv4(),
      isDisabled,
      isInvalid,
      label,
      name,
      onBlur,
      onChange,
      value,
      variant = CHECKBOX_VARIANT.DEFAULT,
      ...rest
    },
    ref
  ) => {
    const localRef = useRef<HTMLInputElement>(null)
    const [isChecked, setIsChecked] = useState(defaultChecked || checked)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== localRef.current) {
        localRef.current?.click()
      }
    }

    const handleKeyUp = (_: React.KeyboardEvent) => {
      localRef.current?.focus()
    }

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked)

      if (onChange) {
        onChange(e)
      }
    }

    const hasContainer = variant !== CHECKBOX_VARIANT.NO_CONTAINER

    return (
      <StyledCheckboxWrapper>
        <StyledCheckbox
          className={className}
          role="checkbox"
          aria-checked={isChecked}
          $hasContainer={hasContainer}
          $isDisabled={isDisabled}
          $isInvalid={isInvalid}
          $isChecked={isChecked}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          data-testid="checkbox"
        >
          <StyledOuterWrapper $hasContainer={hasContainer}>
            <StyledLabel
              $hasContainer={hasContainer}
              htmlFor={id}
              data-testid="checkbox-label"
            >
              <StyledInput
                ref={mergeRefs([localRef, ref])}
                id={id}
                type="checkbox"
                name={name}
                value={value}
                defaultChecked={defaultChecked}
                onChange={handleOnChange}
                onBlur={onBlur}
                disabled={isDisabled}
                checked={checked}
                {...rest}
                data-testid="checkbox-input"
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
        </StyledCheckbox>
      </StyledCheckboxWrapper>
    )
  }
)

Checkbox.displayName = 'Checkbox'
