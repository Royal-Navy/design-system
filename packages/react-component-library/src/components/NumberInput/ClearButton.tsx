import React from 'react'
import { IconCancel } from '@defencedigital/icon-library'

import { StyledClearButton } from './partials/StyledClearButton'

interface ClearButtonProps {
  isCondensed: boolean
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ClearButton: React.FC<ClearButtonProps> = ({
  isCondensed,
  isDisabled,
  onClick,
}) => {
  return (
    <StyledClearButton
      $isCondensed={isCondensed}
      aria-label="Clear the input value"
      data-testid="number-input-clear"
      disabled={isDisabled}
      onClick={onClick}
      type="button"
    >
      <IconCancel />
    </StyledClearButton>
  )
}

ClearButton.displayName = 'ClearButton'
