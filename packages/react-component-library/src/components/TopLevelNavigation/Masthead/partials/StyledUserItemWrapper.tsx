import { selectors } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledUserItemIcon } from './StyledUserItemIcon'
import { StyledUserItemText } from './StyledUserItemText'

const { color } = selectors

export const StyledUserItemWrapper = styled.div`
  a,
  a:hover {
    color: ${color('neutral', 'white')};
    text-decoration: none;
  }

  &:hover {
    ${StyledUserItemIcon},
    ${StyledUserItemText} {
      color: ${color('action', '500')};
    }
  }
`
