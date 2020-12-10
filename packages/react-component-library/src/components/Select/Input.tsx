import React from 'react'
import get from 'lodash/get'
import { InputProps } from 'react-select'

import { StyledInput } from './partials/StyledInput'
import { StyledInputContainer } from './partials/StyledInputContainer'
import { StyledLabel } from './partials/StyledLabel'

export interface SelectInputProps extends InputProps {
  'aria-label'?: string
  id?: string
}

export const Input: React.FC<SelectInputProps> = (props) => {
  const { 'aria-label': ariaLabel, ...rest } = props
  const inputTestId = get(
    props,
    'selectProps.data-testid',
    'react-select-vendor-input'
  )

  return (
    <StyledInputContainer>
      {ariaLabel && (
        <StyledLabel htmlFor={props.id} data-testid="select-label">
          {ariaLabel}
        </StyledLabel>
      )}
      <StyledInput data-testid={inputTestId} {...rest} />
    </StyledInputContainer>
  )
}
