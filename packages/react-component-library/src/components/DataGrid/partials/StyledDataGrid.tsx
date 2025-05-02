import styled, { css } from 'styled-components'
import { color } from '@royalnavy/design-tokens'

import { StyledLayoutProps } from './types'

export const StyledDataGrid = styled.div<
  StyledLayoutProps & { $isFullWidth: boolean }
>`
  display: inline-flex;
  flex-direction: column;
  background: ${color('neutral', 'white')};

  ${({ $hasScrolling }) =>
    $hasScrolling &&
    css`
      height: 100%;
    `}

  border-top: 1px solid ${color('neutral', '200')};

  border-top-left-radius: 4px;
  border-top-right-radius: 4px;

  ${({ $isFullWidth }) =>
    !$isFullWidth &&
    css`
      position: relative;
      margin-bottom: 3.75rem;
    `}
`
