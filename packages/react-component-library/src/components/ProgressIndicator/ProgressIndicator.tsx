import React from 'react'
import { IconLoader } from '@royalnavy/icon-library'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledProgressIndicator } from './partials/StyledProgressIndicator'

export const ProgressIndicator: React.FC<ComponentWithClass> = ({
  className,
}) => {
  return (
    <StyledProgressIndicator
      className={className}
      data-testid="progress-indicator"
    >
      <IconLoader size={40} data-testid="loader" />
      <span>Loading...</span>
    </StyledProgressIndicator>
  )
}

ProgressIndicator.displayName = 'ProgressIndicator'
