import React from 'react'
import { isFinite, isNil } from 'lodash'

import { ComponentSizeType } from '../Forms'
import { InputValidationProps } from '../../common/InputValidationProps'
import { StyledInput } from '../TextInputE/partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from '../TextInputE/partials/StyledLabel'

export interface InputProps extends InputValidationProps {
  hasFocus: boolean
  isDisabled?: boolean
  id?: string
  label?: string
  name: string
  onBlur: (event: React.FormEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: React.FormEvent<HTMLInputElement>) => void
  placeholder?: string
  size: ComponentSizeType
  value?: number
}

export const Input: React.FC<InputProps> = ({
  hasFocus,
  isDisabled,
  id,
  label,
  placeholder = '',
  size,
  value,
  ...rest
}) => {
  const hasLabel = !!(label && label.length)

  return (
    <StyledInputWrapper>
      {hasLabel && (
        <StyledLabel
          $hasContent={!isNil(value)}
          $hasFocus={hasFocus}
          $size={size}
          htmlFor={id}
          data-testid="number-input-label"
        >
          {label}
        </StyledLabel>
      )}
      <StyledInput
        $hasLabel={hasLabel}
        $size={size}
        data-testid="number-input-input"
        disabled={isDisabled}
        id={id}
        value={isFinite(value) ? value : ''}
        {...rest}
      />
    </StyledInputWrapper>
  )
}

Input.displayName = 'Input'
