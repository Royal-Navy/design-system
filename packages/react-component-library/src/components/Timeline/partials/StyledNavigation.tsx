import styled from 'styled-components'
import { selectors } from '@royalnavy/design-tokens'

import { StyledIcon } from '../../Button/partials/StyledIcon'

const { spacing } = selectors

export const StyledNavigation = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;

  button {
    &:first-of-type {
      margin-right: ${spacing('4')};
    }

    span:first-of-type {
      display: none;
    }

    ${StyledIcon} {
      margin-left: 0;
    }
  }
`
