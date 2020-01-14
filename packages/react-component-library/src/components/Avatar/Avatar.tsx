import classNames from 'classnames'
import React from 'react'

import { AVATAR_VARIANT } from '.'

export interface AvatarProps {
  className?: string
  initials: string
  variant?: typeof AVATAR_VARIANT.DARK | typeof AVATAR_VARIANT.LIGHT
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
