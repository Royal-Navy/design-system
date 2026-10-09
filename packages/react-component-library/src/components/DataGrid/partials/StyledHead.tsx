import styled, { css } from 'styled-components'
import { colorByMode, zIndex, Theme } from '@royalnavy/design-tokens'

import { StyledLayoutProps } from './types'

export const StyledHead = styled.thead<StyledLayoutProps>`
  background: ${({ theme }) =>
    colorByMode('neutral', '000', '100', theme as Theme)};

  ${({ $hasScrolling }) =>
    $hasScrolling &&
    css`
      position: sticky;
      top: 0;
      z-index: ${zIndex('header', 1)};
    `}
`
