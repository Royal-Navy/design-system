import React from 'react'
import { IconClose } from '@defencedigital/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import { StyledInlineButton } from './partials/StyledInlineButton'

interface InlineButtonProps {
  isDisabled: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ClearButton: React.FC<InlineButtonProps> = ({
  isDisabled,
  ...rest
}) => (
  <StyledInlineButton
    $size={COMPONENT_SIZE.FORMS}
    aria-label="Clear value"
    data-testid="select-clear-button"
    disabled={isDisabled}
    type="button"
    {...rest}
  >
    <IconClose />
  </StyledInlineButton>
)

ClearButton.displayName = 'ClearButton'
