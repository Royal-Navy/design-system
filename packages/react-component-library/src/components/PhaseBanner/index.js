import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../Badge'

const PhaseBanner = ({ phase, html }) => (
  <div className={`rn-phase-banner rn-phase-banner--${phase}`}>
    <Badge size="small" state="primary" type="solid">
      {phase}
    </Badge>
    <span
      className="container rn-phase-banner__text"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  </div>
)

PhaseBanner.propTypes = {
  /** The phase the banner is in */
  phase: PropTypes.string,
  /** The html to display with the banner */
  html: PropTypes.string,
}

PhaseBanner.defaultProps = {
  phase: 'alpha',
  html:
    'This is a new service, <a href="">Your feedback</a> will help to improve it',
}

export default PhaseBanner
