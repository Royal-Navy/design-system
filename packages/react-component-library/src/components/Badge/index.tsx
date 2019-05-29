import React from 'react'

import '@royalnavy/css-framework/src/components/_badge.scss'

interface BadgeProps {
  color?: 'neutral' | 'primary' | 'danger' | 'warning' | 'success'
  colorVariant?: 'solid' | 'faded'
  size?: 'small' | 'regular' | 'large' | 'xlarge'
  variant?: 'pill'
}

const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'neutral',
  colorVariant = 'solid',
  size = 'regular',
  variant,
}) => (
  <span
    className={`rn-badge rn-badge--${color} rn-badge--${colorVariant} rn-badge--${size} ${
      variant ? `rn-badge--${variant}` : ''
    }`}
  >
    {children}
  </span>
)

export default Badge
