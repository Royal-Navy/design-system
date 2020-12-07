import React from 'react'
import classNames from 'classnames'

import { ComponentWithClass } from '../../common/ComponentWithClass'

import {
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
} from './constants'

export type BadgeColorType =
  | typeof BADGE_COLOR.ACTION
  | typeof BADGE_COLOR.DANGER
  | typeof BADGE_COLOR.NEUTRAL
  | typeof BADGE_COLOR.SUCCESS
  | typeof BADGE_COLOR.WARNING

export type BadgeSizeType =
  | typeof BADGE_SIZE.XSMALL
  | typeof BADGE_SIZE.SMALL
  | typeof BADGE_SIZE.REGULAR
  | typeof BADGE_SIZE.LARGE
  | typeof BADGE_SIZE.XLARGE

export interface BadgeProps extends ComponentWithClass {
  color?: BadgeColorType
  colorVariant?:
    | typeof BADGE_COLOR_VARIANT.FADED
    | typeof BADGE_COLOR_VARIANT.SOLID
  size?: BadgeSizeType
  variant?: typeof BADGE_VARIANT.PILL
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  color = BADGE_COLOR.NEUTRAL,
  colorVariant = BADGE_COLOR_VARIANT.SOLID,
  size = BADGE_SIZE.REGULAR,
  variant,
  ...rest
}) => {
  const classes = classNames(
    'rn-badge',
    `rn-badge--${color}`,
    `rn-badge--${colorVariant}`,
    `rn-badge--${size}`,
    `rn-badge--${variant}`,
    className
  )

  return (
    <span className={classes} data-testid="badge" {...rest}>
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'
