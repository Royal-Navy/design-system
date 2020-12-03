import React from 'react'
import get from 'lodash/get'
import { components, InputProps } from 'react-select'
import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledLabel } from './partials/StyledLabel'

const { fontSize, spacing } = selectors

export interface SelectInputProps extends InputProps {
  'aria-label'?: string
  id?: string
}

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  &&& > * {
    padding: 0;
    margin: 0;
  }
`

const StyledInput = styled(components.Input)`
  font-size: ${fontSize('base')};
  margin: ${spacing('6')} 0 0;
`

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
