import React from 'react'

import { AVATAR_VARIANT } from '.'
import { StyledAvatar } from './partials/StyledAvatar'

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
  return (
    <StyledAvatar className={className} $dark={variant === AVATAR_VARIANT.DARK}>
      {initials}
    </StyledAvatar>
  )
}

Avatar.displayName = 'Avatar'
