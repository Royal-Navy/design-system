import React from 'react'
import PropTypes from 'prop-types'

const Avatar = ({ initials, size }) => (
  <div className={`rn-avatar ${size}`}>
    <span className="initials">{initials}</span>
  </div>
)

Avatar.propTypes = {
  /** The initials of the user to use as the content and class name of the avatar */
  initials: PropTypes.string.isRequired,
  /** Sets the size (as a class name) of the avatar. Can be one of 'large' or 'small' */
  size: PropTypes.string,
}

Avatar.defaultProps = {
  size: '',
}

export default Avatar
