import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { Badge } from '../../Badge'

export const StyledOptionBadge = styled(Badge)`
  transform: translateY(1px);

  & + & {
    margin-left: ${spacing('2')};
  }
`
