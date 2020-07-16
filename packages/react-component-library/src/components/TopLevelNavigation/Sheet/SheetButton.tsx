import React from 'react'
import classNames from 'classnames'

import { PropsWithClassName } from '../../../types/PropsWithClassName'

export interface SheetButtonProps extends PropsWithClassName {
  children?: React.ReactElement
  icon: React.ReactElement
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const SheetButton: React.FC<SheetButtonProps> = ({
  children,
  className,
  icon,
  onClick,
  ...rest
}) => {
  const classes = classNames('rn-sheet__button', className)

  return (
    <button
      aria-haspopup
      className={classes}
      onClick={onClick}
      type="button"
      {...rest}
    >
      {icon}
      {children}
    </button>
  )
}
