import React from 'react'
import classNames from 'classnames'

export interface SheetButtonProps extends ComponentWithClass {
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
    <button className={classes} onClick={onClick} type="button" {...rest}>
      {icon}
      {children}
    </button>
  )
}
