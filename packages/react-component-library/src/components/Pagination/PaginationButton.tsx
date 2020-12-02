import React from 'react'
import classNames from 'classnames'
import {
  IconKeyboardArrowLeft,
  IconKeyboardArrowRight,
} from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'

interface PaginationButtonProps extends ComponentWithClass {
  children: string
  disabled?: boolean
  onClick: (event: React.MouseEvent) => void
}

const ICON_MAP = {
  Prev: (
    <IconKeyboardArrowLeft aria-hidden data-testid="pagination-icon-prev" />
  ),
  Next: (
    <IconKeyboardArrowRight aria-hidden data-testid="pagination-icon-next" />
  ),
}

export const PaginationButton: React.FC<PaginationButtonProps> = ({
  children,
  className,
  ...rest
}) => {
  const classes = classNames('rn-pagination__button', className)

  return (
    <button className={classes} {...rest}>
      {ICON_MAP[children]}
      {children}
    </button>
  )
}

PaginationButton.displayName = 'PaginationButton'
