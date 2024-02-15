import React from 'react'

import { FloatingBoxSchemeType } from './types'
import { StyledContent } from './partials/StyledContent'

export interface FloatingBoxContentProps {
  contentId?: string
  scheme: FloatingBoxSchemeType
  children: React.ReactNode
}

export const FloatingBoxContent = ({
  children,
  contentId,
  scheme,
  ...rest
}: FloatingBoxContentProps) => (
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
