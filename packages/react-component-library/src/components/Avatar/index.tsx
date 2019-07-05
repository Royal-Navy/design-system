import React from 'react'

interface AvatarProps {
  className?: string
  initials: string
}

const Avatar: React.FC<AvatarProps> = ({ className, initials }) => (
  <span className={`rn-avatar__label ${className}`}>{initials}</span>
)

export default Avatar
