import React from 'react'

import Badge from '../Badge'

interface PhaseBannerProps {
  isFullWidth?: boolean
  link?: string
  phase?: 'alpha' | 'beta'
}

const PhaseBanner: React.FC<PhaseBannerProps> = ({
  children,
  isFullWidth = false,
  link = '/feedback',
  phase = 'alpha',
}) => (
  <div className={`rn-phase-banner rn-phase-banner--${phase}`}>
    <div
      className={!isFullWidth ? 'rn-container' : 'rn-phase-banner__container'}
    >
      <Badge size="small" color="action">
        {phase}
      </Badge>
      <span className="rn-phase-banner__text">
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

export default PhaseBanner
