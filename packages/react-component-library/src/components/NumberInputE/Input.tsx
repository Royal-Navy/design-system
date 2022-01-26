import React from 'react'
import { isNil } from 'lodash'

import { ComponentSizeType } from '../Forms'
import { StyledInput } from '../TextInputE/partials/StyledInput'
import { StyledInputWrapper } from './partials/StyledInputWrapper'
import { StyledLabel } from '../TextInputE/partials/StyledLabel'

export interface InputProps {
  hasFocus: boolean
  isDisabled?: boolean
  id?: string
  label?: string
  name: string
  onBeforeInput: (event: React.FormEvent<HTMLInputElement>) => void
  onBlur: (event: React.FormEvent<HTMLInputElement>) => void
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onFocus: (event: React.FormEvent<HTMLInputElement>) => void
  onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => void
  placeholder?: string
  size: ComponentSizeType
  value?: string
}

export const Input: React.FC<InputProps> = ({
  hasFocus,
  isDisabled,
  id,
  label,
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
        value={value || ''}
        {...rest}
      />
    </StyledInputWrapper>
  )
}

Input.displayName = 'Input'
