import React from 'react'
import classNames from 'classnames'
import { IconLoader } from '@royalnavy/icon-library'
import { PropsWithClassName } from '../../types/PropsWithClassName'

export const ProgressIndicator: React.FC<PropsWithClassName> = ({
  className,
}) => {
  const classes = classNames('rn-progress-indicator', className)

  return (
    <div className={classes} data-testid="progress-indicator">
      <IconLoader size={40} data-testid="loader" />
      <span>Loading...</span>
    </div>
  )
}

ProgressIndicator.displayName = 'ProgressIndicator'
