import React from 'react'
import {
  IconFirstPage,
  IconLastPage,
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
} from '@defencedigital/icon-library'

import { StyledButton } from './partials/StyledButton'
import { ValueOf } from '../../helpers'

export const PAGINATION_BUTTON_VARIANT = {
  FIRST: 'First',
  LAST: 'Last',
  PREV: 'Previous',
  NEXT: 'Next',
} as const

type PaginationButtonChildrenType = ValueOf<typeof PAGINATION_BUTTON_VARIANT>

interface PaginationButtonProps {
  children: PaginationButtonChildrenType
  disabled: boolean
  onClick: (event: React.MouseEvent) => void
}

const icons = {
  [PAGINATION_BUTTON_VARIANT.FIRST]: (
    <IconFirstPage aria-hidden data-testid="pagination-icon-first" />
  ),
  [PAGINATION_BUTTON_VARIANT.LAST]: (
    <IconLastPage aria-hidden data-testid="pagination-icon-last" />
  ),
  [PAGINATION_BUTTON_VARIANT.PREV]: (
    <IconKeyboardArrowLeft aria-hidden data-testid="pagination-icon-prev" />
  ),
  [PAGINATION_BUTTON_VARIANT.NEXT]: (
    <IconKeyboardArrowRight aria-hidden data-testid="pagination-icon-next" />
  ),
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  disabled,
  ...rest
}: PaginationButtonProps) => (
  <StyledButton
    $isDisabled={disabled}
    aria-label={`${children} page`}
    data-testid={`page-${children.toLowerCase()}`}
    disabled={disabled}
    {...rest}
  >
    {icons[children]}
  </StyledButton>
)

PaginationButton.displayName = 'PaginationButton'
