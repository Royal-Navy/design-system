import React from 'react'
import classNames from 'classnames'

import { PropsWithClassName } from '../../types/PropsWithClassName'

export const CardFrame: React.FC<PropsWithClassName> = ({
  children,
  className,
}) => {
  const classes = classNames('rn-card-frame', className)

  return (
    <div className={classes} data-testid="cardframe-wrapper">
      {children}
    </div>
  )
}
