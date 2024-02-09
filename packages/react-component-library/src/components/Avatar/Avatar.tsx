import React from 'react'

import { AVATAR_VARIANT } from '.'
import { StyledAvatar } from './partials/StyledAvatar'
import { ComponentWithClass } from '../../common/ComponentWithClass'
import { ValueOf } from '../../helpers'

export interface AvatarProps extends ComponentWithClass {
  /**
   * Initials of the end user (e.g. Joe Bloggs => JB).
   */
  children: string
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: ValueOf<typeof AVATAR_VARIANT>
}

export const Avatar = ({ variant, ...rest }: AvatarProps) => (
  <StyledAvatar
    $dark={variant === AVATAR_VARIANT.DARK}
    data-testid="avatar-content"
    {...rest}
  />
)

Avatar.displayName = 'Avatar'
