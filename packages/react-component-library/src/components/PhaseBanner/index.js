import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../Badge'

const PhaseBanner = ({ phase, children, link }) => (
  <div className={`rn-phase-banner rn-phase-banner--${phase}`}>
    <div className="container">
      <Badge size="small" state="primary" type="solid">
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

PhaseBanner.propTypes = {
  /** The phase the banner is in */
  phase: PropTypes.node,
  /** The html to display with the banner */
  children: PropTypes.string,
  /** The link to use for the default html */
  link: PropTypes.string,
}

PhaseBanner.defaultProps = {
  phase: 'alpha',
  children: null,
  link: '/feedback',
}

export default PhaseBanner
