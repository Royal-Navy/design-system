import React from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'

export const CardFrame: React.FC<ComponentWithClass> = ({
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
