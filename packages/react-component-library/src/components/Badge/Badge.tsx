import React from 'react'

import { ComponentWithClass } from '../../common/ComponentWithClass'
import { StyledBadge } from './partials/StyledBadge'

import {
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
} from './constants'
import {
  BadgeColorType,
  BadgeColorVariantType,
  BadgeSizeType,
  BadgeVariantType,
} from './types'

export interface BadgeProps extends ComponentWithClass {
  /**
   * Color of the component (pre-defined design token values).
   */
  color?: BadgeColorType
  /**
   * Whether to display using solid or faded colors.
   */
  colorVariant?: BadgeColorVariantType
  /**
   * Size of the component.
   */
  size?: BadgeSizeType
  /**
   * Type of component to display (style varies accordingly).
   */
  variant?: BadgeVariantType
  /**
   * Text content to display within the badge.
   */
  children: React.ReactNode | React.ReactNode[]
}

export const Badge = ({
  children,
  color: badgeColor = BADGE_COLOR.NEUTRAL,
  colorVariant = BADGE_COLOR_VARIANT.SOLID,
  size = BADGE_SIZE.REGULAR,
  variant = BADGE_VARIANT.REGULAR,
  ...rest
}: BadgeProps) => (
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
