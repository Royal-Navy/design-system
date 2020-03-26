import React from 'react'
import classNames from 'classnames'
import { IconLoader } from '@royalnavy/icon-library'

export const ProgressIndicator: React.FC<ComponentWithClass> = ({
  className,
}) => {
  const classes = classNames('rn-progress-indicator', className)

  return (
    <div className={classes} data-testid="progress-indicator">
      <IconLoader data-testid="loader" />
      <span>Loading...</span>
    </div>
  )
}

ProgressIndicator.displayName = 'ProgressIndicator'
