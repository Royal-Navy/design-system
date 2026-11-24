import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

import { StyledUserItem } from './StyledUserItem'

export const StyledUserItemText = styled.span`
  white-space: nowrap;

  ${StyledUserItem}:hover & {
    color: ${themeColor('action', '500')};
  }
`
