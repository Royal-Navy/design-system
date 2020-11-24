import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledUserItem } from './StyledUserItem'

const { color } = selectors

export const StyledUserItemText = styled.span`
  white-space: nowrap;

  ${StyledUserItem}:hover & {
    color: ${color('action', '500')};
  }
`
