import styled from 'styled-components'
import { spacing, colorValue } from '@royalnavy/design-tokens'

import { StyledContent } from '../../../../primitives/FloatingBox/partials/StyledContent'

export const StyledNav = styled.nav`
  height: 100%;
  padding: ${spacing('1')} ${spacing('6')};
  color: ${colorValue('neutral', 'white')};

  ${StyledContent} {
    transform: translateX(0.5rem);
  }
`
