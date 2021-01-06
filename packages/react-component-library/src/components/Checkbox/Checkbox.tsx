import React, { forwardRef } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { InputValidationProps } from '../../common/InputValidationProps'
import logger from '../../utils/logger'
import { StyledCheckbox } from './partials/StyledCheckbox'
import { StyledOuterWrapper } from './partials/StyledOuterWrapper'
import { StyledLabel } from './partials/StyledLabel'
import { StyledInput } from './partials/StyledInput'
import { StyledCheckmark } from './partials/StyledCheckmark'

export interface CheckboxProps
  extends ComponentWithClass,
    InputValidationProps {
  id?: string
  checked?: boolean
  defaultChecked?: boolean
  isChecked?: boolean
  isDisabled?: boolean
  label: string
  name: string
  onBlur?: (event: React.FormEvent<HTMLInputElement>) => void
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void
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
    logger.warn(
      '`isChecked` prop has been deprecated, use `checked` and `defaultChecked`'
    )

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
              {...rest}
              data-testid="checkbox"
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
