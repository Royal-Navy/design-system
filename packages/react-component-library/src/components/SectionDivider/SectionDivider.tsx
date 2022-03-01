import React from 'react'

import { StyledSectionDivider } from './partials/StyledSectionDivider'
import { StyledTitle } from './partials/StyledTitle'
import { StyledDescription } from './partials/StyledDescription'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface SectionDividerProps extends ComponentWithClass {
  title?: string
  children?: string
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  title,
  children,
}) => {
  return (
    <StyledSectionDivider>
      {title && (
        <StyledTitle data-testid="sectiondivider-title">{title}</StyledTitle>
      )}
      {children && (
        <StyledDescription data-testid="sectiondivider-description">
          {children}
        </StyledDescription>
      )}
    </StyledSectionDivider>
  )
}
