import React from 'react'
import PropTypes from 'prop-types'

const Button = ({
  children,
  className,
  color,
  icon,
  onClick,
  size,
  variant,
}) => (
  <button
    className={`rn-btn rn-btn--${variant} rn-btn--${color} rn-btn--${size} ${className}`}
    type="button"
    onClick={e => {
      e.currentTarget.blur()
      onClick(e)
    }}
  >
    {children}
    {icon && <span className="rn-btn__icon">{icon}</span>}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  icon: PropTypes.node,
  onClick: PropTypes.func,
  size: PropTypes.string,
  variant: PropTypes.string,
}

Button.defaultProps = {
  className: '',
  color: null,
  icon: null,
  onClick: () => {},
  size: 'regular',
  variant: 'tertiary',
}

export default Button
