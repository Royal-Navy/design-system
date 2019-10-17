import classNames from 'classnames'
import React from 'react'

export interface AvatarProps {
  className?: string
  dark?: boolean
  initials: string
  light?: boolean
}

export const Avatar: React.FC<AvatarProps> = ({
  className,
  dark,
  initials,
  light,
}) => {
  const classes = classNames('rn-avatar', className, {
    'rn-avatar--dark': dark,
    'rn-avatar--light': light,
  })

  return <span className={classes}>{initials}</span>
}

Avatar.displayName = 'Avatar'
