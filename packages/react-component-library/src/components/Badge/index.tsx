import React from 'react'

interface BadgeProps extends ComponentWithClass {
  color?: 'neutral' | 'primary' | 'danger' | 'warning' | 'success'
  colorVariant?: 'solid' | 'faded'
  size?: 'small' | 'regular' | 'large' | 'xlarge'
  variant?: 'pill'
}

const Badge: React.FC<BadgeProps> = ({
  children,
  className = '',
  color = 'neutral',
  colorVariant = 'solid',
  size = 'regular',
  variant,
}) => (
  <span
    className={`rn-badge rn-badge--${color} rn-badge--${colorVariant} rn-badge--${size} ${
      variant ? `rn-badge--${variant}` : ''
    } ${className}`}
    data-testid="badge"
  >
    {children}
  </span>
)

Badge.displayName = 'Badge'

export default Badge
