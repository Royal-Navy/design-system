import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, onClick, type, state, size, className }) => (
  <button
    className={`rn-btn--${type} ${state} ${size} ${className}`}
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  /** The component content */
  children: PropTypes.node.isRequired,
  /** Allows a custom class name to be specified */
  className: PropTypes.string,
  /** Determines the action to perform when the button is clicked */
  onClick: PropTypes.func,
  /** Sets the size of the button, can be one of 'small', 'regular' or 'large' */
  size: PropTypes.string,
  /** Sets the state of the button, can be one of 'neutral', 'primary', 'warning', 'success' or 'danger' */
  state: PropTypes.string,
  /** Sets the button type, can be one of 'primary', 'secondary' or 'tertiary' */
  type: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  size: 'regular',
  state: 'neutral',
  type: 'primary',
}

export default Button
