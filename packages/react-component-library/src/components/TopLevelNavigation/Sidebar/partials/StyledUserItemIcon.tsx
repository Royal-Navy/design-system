import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledUserItem } from './StyledUserItem'

const { spacing, color } = selectors

export const StyledUserItemIcon = styled.div`
  display: inline-flex;
  margin-right: ${spacing('4')};

  ${StyledUserItem}:hover & {
    color: ${color('action', '500')};
  }
`
