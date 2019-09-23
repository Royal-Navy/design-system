import React from 'react'

export interface ButtonProps {
  children?: string
  className?: string
  color?: 'danger'
  testId?: string
  icon?: React.ReactNode
  onClick?: (event: React.SyntheticEvent) => void
  size?: 'small' | 'regular' | 'large' | 'xlarge'
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  icon,
  onClick = () => {},
  size,
  type = 'button',
  variant,
  ...rest
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
    {...rest}
  >
    {children}
    {icon && <span className="rn-btn__icon">{icon}</span>}
  </button>
)

Button.displayName = 'Button'
