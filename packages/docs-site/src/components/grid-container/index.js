import PropTypes from 'prop-types'
import React from 'react'

import './grid-container.scss'

const GridContainer = ({ children, className }) => (
  <div className={`grid-container ${className}`}>
    {/* Extra div is required to allow for use of class without component */}
    <div>{children}</div>
  </div>
)

GridContainer.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(Array).isRequired,
}

GridContainer.defaultProps = {
  className: '',
}

export default GridContainer
