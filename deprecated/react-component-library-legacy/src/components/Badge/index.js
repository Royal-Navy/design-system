import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ children, size, state, type, variation }) => (
  <span className={`rn-badge--${type} ${state} ${size} ${variation}`}>
    {children}
  </span>
)

Badge.propTypes = {
  /** The component content */
  children: PropTypes.node.isRequired,
  /** Sets the size of the badge as a class name, can be one of 'small', 'regular' or 'large' */
  size: PropTypes.string,
  /** Sets the state of the badge, can be one of 'neutral', 'primary', 'warning', 'success' or 'danger' */
  state: PropTypes.string,
  /** Sets the badge type, can be one of 'solid' or 'faded' */
  type: PropTypes.string,
  /** Sets the badge variation to 'pill' style if specified */
  variation: PropTypes.string,
}

Badge.defaultProps = {
  size: 'regular',
  state: 'neutral',
  type: 'faded',
  variation: '',
}

export default Badge
