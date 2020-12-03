import React from 'react'
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
} from '@royalnavy/icon-library'

import { StyledButton } from './partials/StyledButton'

export const PAGINATION_BUTTON_VARIANT = {
  PREV: 'Prev',
  NEXT: 'Next',
} as const

interface PaginationButtonProps {
  children:
    | typeof PAGINATION_BUTTON_VARIANT.PREV
    | typeof PAGINATION_BUTTON_VARIANT.NEXT
  disabled?: boolean
  isActive?: boolean
  onClick: (event: React.MouseEvent) => void
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  isActive,
  ...rest
}) => {
  return (
    <StyledButton $isActive={isActive} {...rest}>
      {children === PAGINATION_BUTTON_VARIANT.PREV && (
        <IconKeyboardArrowLeft aria-hidden data-testid="pagination-icon-prev" />
      )}
      {children}
      {children === PAGINATION_BUTTON_VARIANT.NEXT && (
        <IconKeyboardArrowRight
          aria-hidden
          data-testid="pagination-icon-next"
        />
      )}
    </StyledButton>
  )
}

PaginationButton.displayName = 'PaginationButton'
