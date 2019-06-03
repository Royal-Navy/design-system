import React from 'react'

interface ButtonProps {
  className?: string
  color?: 'danger'
  icon?: React.ReactNode
  onClick?: (event: React.SyntheticEvent) => void
  size?: 'small' | 'regular' | 'large' | 'xlarge'
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  icon,
  onClick = () => {},
  size,
  type = 'button',
  variant,
}) => (
  <button
    className={`rn-btn rn-btn--${variant} ${
      color ? `rn-btn--${color}` : ''
    } rn-btn--${size} ${className}`}
    type={type}
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
