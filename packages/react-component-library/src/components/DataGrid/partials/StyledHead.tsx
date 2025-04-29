import styled, { css } from 'styled-components'
import { color, zIndex } from '@royalnavy/design-tokens'

import { StyledLayoutProps } from './types'

export const StyledHead = styled.thead<StyledLayoutProps>`
  background: ${color('neutral', '000')};

  ${({$hasScrolling}) => $hasScrolling && css`
    position: sticky;
    top: 0;
    z-index: ${zIndex('header', 1)};
  `}
`
