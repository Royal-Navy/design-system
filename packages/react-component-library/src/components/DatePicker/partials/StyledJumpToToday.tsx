import styled from 'styled-components'
import { spacing } from '@royalnavy/design-tokens'

import { Button } from '../../Button'

export const StyledJumpToToday = styled(Button)`
  display: block;
  width: calc(100% - ${spacing('11')});
  margin: 0 auto ${spacing('8')};
  top: ${spacing('6')};
`
