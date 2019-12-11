import classNames from 'classnames'
import React from 'react'

import { AVATAR_VARIANT } from '.'

export interface AvatarProps {
  className?: string
  initials: string
  variant?: AVATAR_VARIANT.DARK | AVATAR_VARIANT.LIGHT
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  initials,
  variant,
}) => {
  const classes = classNames('rn-avatar', className, `rn-avatar--${variant}`)

  return <span className={classes}>{initials}</span>
}

Avatar.displayName = 'Avatar'
