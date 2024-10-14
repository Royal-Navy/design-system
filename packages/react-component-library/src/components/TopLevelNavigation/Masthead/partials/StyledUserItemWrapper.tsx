import { color } from '@royalnavy/design-tokens'
import styled from 'styled-components'

import { StyledUserItemIcon } from './StyledUserItemIcon'
import { StyledUserItemText } from './StyledUserItemText'

export const StyledUserItemWrapper = styled.div`
  position: relative;

  a {
    color: ${color('neutral', 'white')};
    text-decoration: none;
  }

  &:hover {
    ${StyledUserItemIcon},
    ${StyledUserItemText} {
      color: ${color('action', '500')};
    }
  }

  > form button {
    margin: unset;
    padding: unset;
    border: unset;
    background: unset;
    color: inherit;
    cursor: pointer;

    &:hover {
      color: inherit;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
    }
  }
`
