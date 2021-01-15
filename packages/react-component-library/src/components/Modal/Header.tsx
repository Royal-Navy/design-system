import React from 'react'

import { StyledHeader } from './partials/StyledHeader'
import { StyledTitle } from './partials/StyledTitle'
import { StyledCloseButton } from './partials/StyledCloseButton'

export interface HeaderProps {
  onClose?: (event: React.FormEvent<HTMLButtonElement>) => void
  title?: string
  titleId: string
}

export const Header: React.FC<HeaderProps> = ({ onClose, title, titleId }) => (
  <StyledHeader data-testid="modal-header">
    <StyledTitle id={titleId} data-testid="modal-header-text">
      {title}
    </StyledTitle>
    <StyledCloseButton
      type="button"
      onClick={onClose}
      data-testid="modal-close"
    >
      &times;
    </StyledCloseButton>
  </StyledHeader>
)
