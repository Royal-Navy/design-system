import React from 'react'
import { IconExpandLess, IconExpandMore } from '@defencedigital/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import { StyledInlineButton } from './partials/StyledInlineButton'

interface InlineButtonProps {
  hasHover: boolean
  isDisabled: boolean
  isOpen: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ArrowButton: React.FC<InlineButtonProps> = ({
  hasHover,
  isDisabled,
  isOpen,
  ...rest
}) => (
  <StyledInlineButton
    $hasHover={hasHover}
    $size={COMPONENT_SIZE.FORMS}
    aria-label={`${isOpen ? 'Hide' : 'Show'} options`}
    data-testid="select-arrow-button"
    disabled={isDisabled}
    type="button"
    {...rest}
  >
    {isOpen ? <IconExpandLess /> : <IconExpandMore />}
  </StyledInlineButton>
)

ArrowButton.displayName = 'ArrowButton'
