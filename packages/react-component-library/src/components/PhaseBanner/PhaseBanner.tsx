import React from 'react'

import { BADGE_SIZE, BADGE_COLOR } from '../Badge'
import { StyledWrapper } from './partials/StyledWrapper'
import { StyledPhaseBanner } from './partials/StyledPhaseBanner'
import { StyledBadge } from './partials/StyledBadge'
import { StyledText } from './partials/StyledText'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface PhaseBannerProps extends ComponentWithClass {
  /**
   * Toggles whether the banner display full width across the viewport.
   */
  isFullWidth?: boolean
  /**
   * Optional HTML `href` attribute to apply to the feedback link.
   */
  link?: string
  /**
   * Optionally display the applications current phase of release.
   */
  phase?: 'alpha' | 'beta'
}

export const PhaseBanner = ({
  children,
  isFullWidth = false,
  link = '/feedback',
  phase = 'alpha',
  ...rest
}: PhaseBannerProps) => (
  <StyledPhaseBanner data-testid="phase-banner" {...rest}>
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
