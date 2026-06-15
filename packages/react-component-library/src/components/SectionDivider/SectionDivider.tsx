import React from 'react'

import { StyledSectionDivider } from './partials/StyledSectionDivider'
import { StyledIcon } from './partials/StyledIcon'
import { StyledTitle } from './partials/StyledTitle'
import { StyledDescription } from './partials/StyledDescription'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface SectionDividerProps extends ComponentWithClass {
  /**
   * Optional icon to display to the left of the title.
   */
  icon?: React.ReactNode
  title?: string
  children?: string
}

export const SectionDivider = ({
  icon,
  title,
  children,
  className,
}: SectionDividerProps) => {
  return (
    <StyledSectionDivider className={className}>
      {icon && (
        <StyledIcon data-testid="sectiondivider-icon">{icon}</StyledIcon>
      )}
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
