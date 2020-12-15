import React from 'react'

import { Badge, BADGE_SIZE, BADGE_COLOR } from '../Badge'

interface PhaseBannerProps {
  isFullWidth?: boolean
  link?: string
  phase?: 'alpha' | 'beta'
}

export const PhaseBanner: React.FC<PhaseBannerProps> = ({
  children,
  isFullWidth = false,
  link = '/feedback',
  phase = 'alpha',
}) => (
  <div className={`rn-phase-banner rn-phase-banner--${phase}`}>
    <div
      className={!isFullWidth ? 'rn-container' : 'rn-phase-banner__container'}
      data-testid="phase-banner-wrapper"
    >
      <Badge
        className="rn-phase-banner__badge"
        color={BADGE_COLOR.ACTION}
        size={BADGE_SIZE.SMALL}
      >
        {phase}
      </Badge>
      <span
        className="rn-phase-banner__text"
        data-testid="phase-banner-content"
      >
        {children || (
          <>
            This is a new service, <a href={link}>Your feedback</a> will help to
            improve it
          </>
        )}
      </span>
    </div>
  </div>
)

PhaseBanner.displayName = 'PhaseBanner'
