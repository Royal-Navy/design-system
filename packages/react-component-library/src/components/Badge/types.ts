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
  | typeof BADGE_COLOR.SUPA
  | typeof BADGE_COLOR.SUPB
  | typeof BADGE_COLOR.SUPC
  | typeof BADGE_COLOR.SUPD
  | typeof BADGE_COLOR.SUPE
  | typeof BADGE_COLOR.SUPF

export type BadgeSizeType =
  | typeof BADGE_SIZE.XSMALL
  | typeof BADGE_SIZE.SMALL
  | typeof BADGE_SIZE.REGULAR
  | typeof BADGE_SIZE.LARGE
  | typeof BADGE_SIZE.XLARGE

export type BadgeColorVariantType =
  | typeof BADGE_COLOR_VARIANT.FADED
  | typeof BADGE_COLOR_VARIANT.SOLID

export type BadgeVariantType = typeof BADGE_VARIANT.PILL
