import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, onClick, size, state, type }) => (
  <button
    className={`rn-btn rn-btn--${type} rn-btn--${state} rn-btn--${size} ${className}`}
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

  /** Sets the state of the button, can be one of 'neutral', 'primary', 'secondary', 'warning', 'success' or 'danger' */
  state: PropTypes.string,

  /** Sets the button type, can be one of 'solid', 'outline' */
  type: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
  size: 'regular',
  type: 'solid',
  state: 'neutral',
}

export default Button
