import React from 'react'
import classNames from 'classnames'

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
