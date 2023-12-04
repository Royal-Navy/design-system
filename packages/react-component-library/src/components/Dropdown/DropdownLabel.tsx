import React from 'react'
import { IconVisibility, IconVisibilityOff } from '@royalnavy/icon-library'

import { DropdownOption } from './DropdownOption'
import { StyledLabel } from './partials/StyledLabel'
import { StyledIcon } from './partials/StyledIcon'
import { StyledStartAdornment } from './partials/StyledStartAdornment'
import { StyledEndAdornment } from './partials/StyledEndAdornment'

export const DropdownLabel: React.FC<DropdownOption> = ({
  icon,
  isDisabled = false,
  isHidden,
  label,
  rightContent,
  isVisible,
}) => (
  <StyledLabel isDisabled={isDisabled}>
    {icon && <StyledIcon data-testid="dropdown-label-icon">{icon}</StyledIcon>}
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
