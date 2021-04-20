import React from 'react'

import { AVATAR_VARIANT } from '.'
import { StyledAvatar } from './partials/StyledAvatar'
import { ComponentWithClass } from '../../common/ComponentWithClass'

export interface AvatarProps extends ComponentWithClass {
  /**
   * Initials of the end user (e.g. Joe Bloggs => JB).
   */
  initials: string
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: typeof AVATAR_VARIANT.DARK | typeof AVATAR_VARIANT.LIGHT
}

export const Avatar: React.FC<AvatarProps> = ({
  initials,
  variant,
  ...rest
}) => (
  <StyledAvatar $dark={variant === AVATAR_VARIANT.DARK} {...rest}>
    {initials}
  </StyledAvatar>
)

Avatar.displayName = 'Avatar'
