import { spacing } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { Badge, BADGE_COLOR_VARIANT, BADGE_VARIANT } from '../../../Badge'

export const StyledVersion = styled(Badge).attrs({
  colorVariant: BADGE_COLOR_VARIANT.FADED,
  variant: BADGE_VARIANT.PILL,
})`
  margin-left: ${spacing('4')};
`
