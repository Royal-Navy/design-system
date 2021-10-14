import styled from 'styled-components'
import { selectors } from '@defencedigital/design-tokens'

import { StyledContent } from '../../../../primitives/FloatingBox/partials/StyledContent'

const { spacing, color } = selectors

export const StyledNav = styled.nav`
  height: 100%;
  padding: ${spacing('1')} ${spacing('6')};
  color: ${color('neutral', 'white')};

  ${StyledContent} {
    transform: translateX(0.5rem);
  }
`
