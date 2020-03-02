const BADGE_COLOR = {
  ACTION: 'action',
  DANGER: 'danger',
  NEUTRAL: 'neutral',
  SUCCESS: 'success',
  WARNING: 'warning',
  SUPA: 'supa',
  SUPB: 'supb',
  SUPC: 'supc',
  SUPD: 'supd',
  SUPE: 'supe',
  SUPF: 'supf',
} as const

const BADGE_COLOR_VARIANT = {
  FADED: 'faded',
  SOLID: 'solid',
} as const

const BADGE_SIZE = {
  LARGE: 'large',
  SMALL: 'small',
  REGULAR: 'regular',
  XLARGE: 'xlarge',
} as const

const BADGE_VARIANT = {
  PILL: 'pill',
} as const

export { BADGE_COLOR, BADGE_COLOR_VARIANT, BADGE_SIZE, BADGE_VARIANT }
