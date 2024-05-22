import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

import { StyledUserItem } from './StyledUserItem'

export const StyledUserItemText = styled.span`
  white-space: nowrap;

  ${StyledUserItem}:hover & {
    color: ${color('action', '500')};
  }
`
