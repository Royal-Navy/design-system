import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledBadge } from './partials/StyledBadge'

import { BADGE_COLOR, BADGE_COLOR_VARIANT, BADGE_SIZE } from './constants'
import {
  BadgeColorType,
  BadgeColorVariantType,
  BadgeSizeType,
  BadgeVariantType,
} from './types'

export interface BadgeProps extends ComponentWithClass {
  color?: BadgeColorType
  colorVariant?: BadgeColorVariantType
  size?: BadgeSizeType
  variant?: BadgeVariantType
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  color: badgeColor = BADGE_COLOR.NEUTRAL,
  colorVariant = BADGE_COLOR_VARIANT.SOLID,
  size = BADGE_SIZE.REGULAR,
  variant,
  ...rest
}) => (
  <StyledBadge
    $color={badgeColor}
    $colorVariant={colorVariant}
    $size={size}
    $variant={variant}
    data-testid="badge"
    {...rest}
  >
    {children}
  </StyledBadge>
)

Badge.displayName = 'Badge'
