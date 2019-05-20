import React from 'react'
import PropTypes from 'prop-types'

import Badge from '../Badge'

const PhaseBanner = ({ phase, html }) => (
  <div className={`rn-phase-banner rn-phase-banner--phase-${phase}`}>
    <Badge size="small" state="primary" type="solid">
      {phase}
    </Badge>
    <span dangerouslySetInnerHTML={{ __html: html }} />
  </div>
)

PhaseBanner.propTypes = {
  /** The phase the banner is in: Can be anything but specific
   * classes are applied to 'alpha' and 'beta'. */
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
