import { styled } from 'styled-components'
import { themeColor } from '@royalnavy/design-tokens'

import { StyledUserItem } from './StyledUserItem'

export const StyledUserItemIcon = styled.div`
  display: inline-flex;

  ${StyledUserItem}:hover & {
    color: ${themeColor('action', '500')};
  }
`
