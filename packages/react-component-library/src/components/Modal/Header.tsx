import React from 'react'
import { IconClose } from '@royalnavy/icon-library'

import { StyledHeader } from './partials/StyledHeader'
import { StyledTitle } from './partials/StyledTitle'
import { StyledCloseButton } from './partials/StyledCloseButton'

export interface HeaderProps {
  onClose?: (event: React.MouseEvent<HTMLButtonElement>) => void
  title?: string
  titleId: string
}

export const Header = ({ onClose, title, titleId }: HeaderProps) => (
  <StyledHeader data-testid="modal-header">
    <StyledTitle id={titleId} data-testid="modal-header-text">
      {title}
    </StyledTitle>
    <StyledCloseButton
      type="button"
      onClick={onClose}
      data-testid="modal-close"
    >
      <IconClose />
    </StyledCloseButton>
  </StyledHeader>
)
