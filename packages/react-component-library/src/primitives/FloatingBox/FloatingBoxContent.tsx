import React from 'react'

import { FloatingBoxSchemeType } from './types'
import { StyledContent } from './partials/StyledContent'

interface FloatingBoxContentProps {
  contentId?: string
  scheme?: FloatingBoxSchemeType
}

export const FloatingBoxContent: React.FC<FloatingBoxContentProps> = ({
  children,
  contentId,
  scheme,
}) => (
  <StyledContent
    $scheme={scheme}
    id={contentId}
    data-testid="floating-box-content"
  >
    {children}
  </StyledContent>
)

FloatingBoxContent.displayName = 'FloatingBoxContent'
