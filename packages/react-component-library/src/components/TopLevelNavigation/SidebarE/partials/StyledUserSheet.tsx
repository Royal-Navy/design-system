import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { Sheet } from '../../Sheet/Sheet'
import { StyledUserItem } from './StyledUserItem'
import { StyledFloatingBox } from '../../../../primitives/FloatingBox'

const { color } = selectors

export const StyledUserSheet = styled(Sheet)`
  ${StyledFloatingBox} {
    margin-left: 1px;

    ol {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    a,
    a:hover {
      color: ${color('neutral', 'white')};
      text-decoration: none;
    }
  }
`
