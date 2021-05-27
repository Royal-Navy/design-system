import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { Sheet } from '../../Sheet/Sheet'
import { StyledNavItem } from './StyledNavItem'
import { StyledFloatingBox } from '../../../../primitives/FloatingBox/partials/StyledFloatingBox'

const { spacing, color } = selectors

export const StyledSubNavSheet = styled(Sheet)`
  display: flex;

  ${StyledFloatingBox} {
    transform: translateX(20px);

    ol {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }

  ${StyledNavItem} {
    > * {
      padding: ${spacing('2')};
    }

    > *,
    > *:hover {
      color: ${color('neutral', 'white')};
      text-decoration: none;
    }
  }
`
