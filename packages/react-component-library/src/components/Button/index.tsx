import React from 'react'

import '@royalnavy/css-framework/src/components/_button.scss'

interface ButtonProps {
  className?: string
  color?: 'danger'
  icon?: React.ReactNode
  onClick: (event: React.SyntheticEvent) => void
  size?: 'small' | 'regular' | 'large' | 'xlarge'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  icon,
  onClick,
  size,
  variant,
}) => (
  <button
    className={`rn-btn rn-btn--${variant} ${
      color ? `rn-btn--${color}` : ''
    } rn-btn--${size} ${className}`}
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

export default Button
