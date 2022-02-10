import React from 'react'

import { FloatingBoxSchemeType } from './types'
import { StyledContent } from './partials/StyledContent'

export interface FloatingBoxContentProps {
  contentId?: string
  scheme: FloatingBoxSchemeType
}

export const FloatingBoxContent: React.FC<FloatingBoxContentProps> = ({
  children,
  contentId,
  scheme,
  ...rest
}) => (
  <StyledContent
    $scheme={scheme}
    id={contentId}
    data-testid="floating-box-content"
    {...rest}
  >
    {children}
  </StyledContent>
)

FloatingBoxContent.displayName = 'FloatingBoxContent'
