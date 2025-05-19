import styled from 'styled-components'
import { color } from '@royalnavy/design-tokens'

import { StyledUserItem } from './StyledUserItem'

export const StyledUserItemIcon = styled.div`
  display: inline-flex;

  ${StyledUserItem}:hover & {
    color: ${color('action', '500')};
  }
`
