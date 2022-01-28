import React, { useState, useRef } from 'react'
import { v4 as uuidv4 } from 'uuid'
import mergeRefs from 'react-merge-refs'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledCheckbox } from './partials/StyledCheckbox'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInput } from './partials/StyledInput'
import { StyledCheckmark } from './partials/StyledCheckmark'
import { StyledCheckboxWrapper } from './partials/StyledCheckboxWrapper'

export interface CheckboxEProps
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

export const CheckboxE = React.forwardRef<HTMLInputElement, CheckboxEProps>(
  (
    {
      className = '',
      id = uuidv4(),
      checked,
      defaultChecked,
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
    const localRef = useRef<HTMLInputElement>(null)
    const [isChecked, setIsChecked] = useState(defaultChecked || checked)

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
      if (event.target !== localRef.current) {
        localRef.current.click()
      }
    }

    const handleKeyUp = (_: React.KeyboardEvent) => {
      localRef.current.focus()
    }

    const handleOnChange = (e: React.FormEvent<HTMLInputElement>) => {
      setIsChecked(!isChecked)

      if (onChange) {
        onChange(e)
      }
    }

    return (
      <StyledCheckboxWrapper>
        <StyledCheckbox
          $isDisabled={isDisabled}
          $isInvalid={isInvalid}
          $isChecked={isChecked}
          className={className}
          onClick={handleClick}
          onKeyUp={handleKeyUp}
          data-testid="checkbox"
        >
          <StyledOuterWrapper>
            <StyledLabel htmlFor={id} data-testid="checkbox-label">
              <StyledInput
                ref={mergeRefs([localRef, ref])}
                $isDisabled={isDisabled}
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
              <StyledCheckmark />
              {label}
            </StyledLabel>
          </StyledOuterWrapper>
        </StyledCheckbox>
      </StyledCheckboxWrapper>
    )
  }
)

CheckboxE.displayName = 'CheckboxE'
