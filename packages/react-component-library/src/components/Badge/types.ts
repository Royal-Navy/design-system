import {
  BADGE_COLOR,
  BADGE_COLOR_VARIANT,
  BADGE_SIZE,
  BADGE_VARIANT,
} from './constants'
import { ValueOf } from '../../helpers'

export type BadgeColorType = ValueOf<typeof BADGE_COLOR>

export type BadgeSizeType = ValueOf<typeof BADGE_SIZE>

export type BadgeColorVariantType = ValueOf<typeof BADGE_COLOR_VARIANT>

export type BadgeVariantType = ValueOf<typeof BADGE_VARIANT>
