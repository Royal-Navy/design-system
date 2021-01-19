import React from 'react'

import { BADGE_SIZE, BADGE_COLOR } from '../Badge'
import { StyledWrapper } from './partials/StyledWrapper'
import { StyledPhaseBanner } from './partials/StyledPhaseBanner'
import { StyledBadge } from './partials/StyledBadge'
import { StyledText } from './partials/StyledText'
import { ComponentWithClass } from '../../common/ComponentWithClass'

interface PhaseBannerProps extends ComponentWithClass {
  isFullWidth?: boolean
  link?: string
  phase?: 'alpha' | 'beta'
}

export const PhaseBanner: React.FC<PhaseBannerProps> = ({
  children,
  isFullWidth = false,
  link = '/feedback',
  phase = 'alpha',
  className,
}) => (
  <StyledPhaseBanner className={className}>
    <StyledWrapper
      $isFullWidth={isFullWidth}
      data-testid="phase-banner-wrapper"
    >
      <StyledBadge color={BADGE_COLOR.ACTION} size={BADGE_SIZE.SMALL}>
        {phase}
      </StyledBadge>
      <StyledText data-testid="phase-banner-content">
        {children || (
          <>
            This is a new service, <a href={link}>Your feedback</a> will help to
            improve it
          </>
        )}
      </StyledText>
    </StyledWrapper>
  </StyledPhaseBanner>
)

PhaseBanner.displayName = 'PhaseBanner'
