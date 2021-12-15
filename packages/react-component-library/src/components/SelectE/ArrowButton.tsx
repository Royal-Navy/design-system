import React from 'react'
import { IconExpandLess, IconExpandMore } from '@defencedigital/icon-library'

import { COMPONENT_SIZE } from '../Forms'
import { InlineButton } from '../InlineButtons/InlineButton'

const ICON_VIEW_BOX = '4 4 16 16'

interface InlineButtonProps {
  hasHover: boolean
  isDisabled: boolean
  isOpen: boolean
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const ArrowButton = React.forwardRef<
  HTMLButtonElement,
  InlineButtonProps
>(({ hasHover, isDisabled, isOpen, ...rest }, ref) => {
  return (
    <InlineButton
      hasHover={hasHover}
      isDisabled={isDisabled}
      aria-label={`${isOpen ? 'Hide' : 'Show'} options`}
      data-testid="select-arrow-button"
      ref={ref}
      size={COMPONENT_SIZE.FORMS}
      {...rest}
    >
      {isOpen ? (
        <IconExpandLess size={18} viewBox={ICON_VIEW_BOX} />
      ) : (
        <IconExpandMore size={18} viewBox={ICON_VIEW_BOX} />
      )}
    </InlineButton>
  )
})

ArrowButton.displayName = 'ArrowButton'
