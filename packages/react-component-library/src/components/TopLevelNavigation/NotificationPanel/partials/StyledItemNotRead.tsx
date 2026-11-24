import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

import { StyledNotRead } from './StyledNotRead'

export const StyledItemNotRead = styled(StyledNotRead)`
  border: 1px solid ${themeColor('neutral', '700')};
  top: 0;
  right: 0;
`
