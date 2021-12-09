import React from 'react'
import { IconExpandLess, IconExpandMore } from '@defencedigital/icon-library'

import { InlineButton } from '../InlineButtons/InlineButton'

const ICON_VIEW_BOX = '4 4 16 16'

interface InlineButtonProps {
  hasHover: boolean
  isDisabled: boolean
  isOpen: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ArrowButton: React.FC<InlineButtonProps> = ({
  isOpen,
  ...rest
}) => (
  <InlineButton
    aria-label={`${isOpen ? 'Hide' : 'Show'} options`}
    data-testid="select-arrow-button"
    {...rest}
  >
    {isOpen ? (
      <IconExpandLess size={18} viewBox={ICON_VIEW_BOX} />
    ) : (
      <IconExpandMore size={18} viewBox={ICON_VIEW_BOX} />
    )}
  </InlineButton>
)

ArrowButton.displayName = 'ArrowButton'
