import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  className,
  icon,
  onClick,
  size,
  state,
  variation,
}) => (
  <button
    className={`rn-btn rn-btn--${variation}-${state} ${
      size ? `rn-btn-${size}` : ''
    } ${className}`}
    type="button"
    onClick={onClick}
  >
    {children}
    {icon && <span className="rn-btn__icon">{icon}</span>}
  </button>
)

Button.propTypes = {
  /** The component content */
  children: PropTypes.node.isRequired,

  /** Allows a custom class name to be specified */
  className: PropTypes.string,

  icon: PropTypes.node,

  /** Determines the action to perform when the button is clicked */
  onClick: PropTypes.func,

  /** Sets the size of the button, can be one of 'small', 'regular' or 'large' */
  size: PropTypes.string,

  /** Sets the state of the button, can be one of 'neutral', 'primary', 'secondary', 'warning', 'success' or 'danger' */
  state: PropTypes.string,

  /** Sets the button style, can be one of 'solid', 'outline' or 'plain' */
  variation: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  icon: null,
  onClick: () => {},
  size: 'regular',
  state: 'neutral',
  variation: 'solid',
}

export default Button
