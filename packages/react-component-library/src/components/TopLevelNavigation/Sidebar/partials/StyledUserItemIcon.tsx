import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

import { StyledUserItem } from './StyledUserItem'

export const StyledUserItemIcon = styled.div`
  display: inline-flex;
  margin-right: ${spacing('4')};

  ${StyledUserItem}:hover & {
    color: ${color('action', '500')};
  }
`
