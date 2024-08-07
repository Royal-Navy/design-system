import styled from 'styled-components'
import { color, spacing } from '@royalnavy/design-tokens'

import { StyledContent } from '../../../../primitives/FloatingBox/partials/StyledContent'

export const StyledNav = styled.nav`
  height: 100%;
  padding: ${spacing('1')} ${spacing('6')};
  color: ${color('neutral', 'white')};

  ${StyledContent} {
    transform: translateX(0.5rem);
  }
`
