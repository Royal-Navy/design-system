import React from 'react'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { Visibility, VisibilityOff } from '../../icons'
import { DropdownOption } from './DropdownOption'

const { spacing } = selectors

interface StyledLabelProps {
  isDisabled: boolean
}

const StyledLabel = styled.div<StyledLabelProps>`
  display: flex;
  align-items: center;
  flex: 1;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.25;
    `}
`

const StyledAdornment = styled.span`
  display: flex;
  align-items: center;
`

const StyledStartAdornment = styled(StyledAdornment)`
  padding-right: ${spacing('4')};
`

const StyledEndAdornment = styled(StyledAdornment)``

export const DropdownLabel: React.FC<DropdownOption> = ({
  icon,
  isDisabled,
  isHidden,
  label,
  rightContent,
  isVisible,
}) => (
  <StyledLabel isDisabled={isDisabled}>
    {icon && (
      <span data-testid="rn-dropdownlabel__start-adornment">{icon}</span>
    )}
    <StyledStartAdornment data-testid="dropdownlabel__label">
      {label}
    </StyledStartAdornment>
    {isHidden && (
      <span data-testid="rn-dropdownlabel__iconinvisible">
        <VisibilityOff />
      </span>
    )}
    {isVisible && (
      <span data-testid="rn-dropdownlabel__iconvisible">
        <Visibility />
      </span>
    )}
    {rightContent && (
      <StyledEndAdornment data-testid="rn-dropdownlabel__rightcontent">
        {rightContent}
      </StyledEndAdornment>
    )}
  </StyledLabel>
)
