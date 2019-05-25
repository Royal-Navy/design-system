import React, { Fragment } from 'react'

import Badge from '../Badge'

interface PhaseBannerProps {
  phase?: 'alpha' | 'beta'
  link?: string
}

const PhaseBanner: React.FC<PhaseBannerProps> = ({
  phase = 'alpha',
  children,
  link = '/feedback',
}) => (
  <div className={`rn-phase-banner rn-phase-banner--${phase}`}>
    <div className="container">
      <Badge size="small" color="primary">
        {phase}
      </Badge>
      <span className="rn-phase-banner__text">
        {children || (
          <Fragment>
            This is a new service, <a href={link}>Your feedback</a> will help to
            improve it
          </Fragment>
        )}
      </span>
    </div>
  </div>
)

export default PhaseBanner
