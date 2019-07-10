import React from 'react'

interface AvatarProps {
  className?: string
  dark?: boolean
  initials: string
}

const Avatar: React.FC<AvatarProps> = ({ className, dark, initials }) => (
  <span className={`rn-avatar ${className} ${dark ? 'rn-avatar--dark' : ''}`}>
    {initials}
  </span>
)

Avatar.displayName = 'Avatar'

export default Avatar
