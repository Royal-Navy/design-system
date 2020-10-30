import React from 'react'
import { IconVisibility, IconVisibilityOff } from '@royalnavy/icon-library'
import { selectors } from '@royalnavy/design-tokens'
import styled, { css } from 'styled-components'

import { DropdownOption } from './DropdownOption'

const { spacing } = selectors

interface StyledLabelProps {
  isDisabled: boolean
}

const StyledLabel = styled.div<StyledLabelProps>`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.25;
    `}
`

const StyledIcon = styled.span`
  position: relative;
  top: ${spacing('px')};
`

const StyledAdornment = styled.span`
  display: flex;
  align-items: center;
`

const StyledStartAdornment = styled(StyledAdornment)`
  padding-right: ${spacing('4')};

  ${StyledIcon} + & {
    margin-left: ${spacing('3')};
  }
`

const StyledEndAdornment = styled.span`
  position: absolute;
  top: ${spacing('px')};
  right: 0;
`

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
      <StyledIcon data-testid="dropdown-label-icon">
        {icon}
      </StyledIcon>
    )}
    <StyledStartAdornment data-testid="dropdown-label-label">
      {label}
    </StyledStartAdornment>
    {isVisible && (
      <StyledEndAdornment>
        <IconVisibility data-testid="dropdown-label-icon-visibility" />
      </StyledEndAdornment>
    )}
    {isHidden && (
      <StyledEndAdornment>
        <IconVisibilityOff data-testid="dropdown-label-icon-hidden" />
      </StyledEndAdornment>
    )}
    {rightContent && <StyledEndAdornment>{rightContent}</StyledEndAdornment>}
  </StyledLabel>
)
